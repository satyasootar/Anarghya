import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { EventData } from '../types/event';
import { fallbackEventData } from '../data/eventData';

interface EventDataContextValue {
  eventData: EventData;
  isLoading: boolean;
  isError: boolean;
  refresh: () => Promise<void>;
}

const LOCAL_STORAGE_KEY = 'anarghya_event_data_cache_v1';
const REMOTE_DATA_URL = import.meta.env.VITE_EVENT_DATA_URL || '/eventData.json';

const EventDataContext = createContext<EventDataContextValue>({
  eventData: fallbackEventData,
  isLoading: false,
  isError: false,
  refresh: async () => {},
});

/**
 * Defensively validates and merges remote data with the fallback structure.
 * Prevents UI crashes if a remote editor misses a field or corrupts a property.
 */
function sanitizeEventData(raw: unknown): EventData {
  if (!raw || typeof raw !== 'object') {
    return fallbackEventData;
  }

  const data = raw as Partial<EventData>;

  return {
    name: data.name || fallbackEventData.name,
    year: data.year ?? fallbackEventData.year,
    eventDate: data.eventDate || fallbackEventData.eventDate,
    scheduleDateRange: data.scheduleDateRange || fallbackEventData.scheduleDateRange,
    registrationUrl: data.registrationUrl || fallbackEventData.registrationUrl,
    stats: Array.isArray(data.stats) && data.stats.length > 0 ? data.stats : fallbackEventData.stats,
    events: Array.isArray(data.events) && data.events.length > 0 ? data.events : fallbackEventData.events,
    volunteers: data.volunteers && typeof data.volunteers === 'object' && Object.keys(data.volunteers).length > 0
      ? data.volunteers
      : fallbackEventData.volunteers,
    registration: {
      competitions: Array.isArray(data.registration?.competitions) && data.registration.competitions.length > 0
        ? data.registration.competitions
        : fallbackEventData.registration.competitions,
    },
    footer: {
      institution: data.footer?.institution || fallbackEventData.footer.institution,
      location: data.footer?.location || fallbackEventData.footer.location,
      email: data.footer?.email || fallbackEventData.footer.email,
      quickLinks: Array.isArray(data.footer?.quickLinks) && data.footer.quickLinks.length > 0
        ? data.footer.quickLinks
        : fallbackEventData.footer.quickLinks,
      socialLinks: {
        ...fallbackEventData.footer.socialLinks,
        ...(data.footer?.socialLinks || {}),
      },
      credits: Array.isArray(data.footer?.credits) && data.footer.credits.length > 0
        ? data.footer.credits
        : fallbackEventData.footer.credits,
    },
  };
}

/**
 * Retrieves the best immediate data on initial load:
 * 1. Previously cached valid data in localStorage.
 * 2. Bundled fallbackEventData.
 */
function getInitialData(): EventData {
  if (typeof window === 'undefined') {
    return fallbackEventData;
  }

  try {
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      return sanitizeEventData(parsed);
    }
  } catch (err) {
    console.warn('[EventDataProvider] Error reading localStorage cache:', err);
  }

  return fallbackEventData;
}

export const EventDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [eventData, setEventData] = useState<EventData>(getInitialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchRemoteData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      // 1-minute bucket cache-busting to bypass aggressive CDN caching while preventing rate-limit issues
      const cacheBuster = Math.floor(Date.now() / 60000);
      const url = REMOTE_DATA_URL.includes('?')
        ? `${REMOTE_DATA_URL}&_cb=${cacheBuster}`
        : `${REMOTE_DATA_URL}?_cb=${cacheBuster}`;

      const res = await fetch(url, {
        headers: {
          Accept: 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch event data: HTTP ${res.status}`);
      }

      const json = await res.json();
      const sanitized = sanitizeEventData(json);

      setEventData(sanitized);

      // Save to localStorage for instant loads on subsequent visits
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sanitized));
      } catch (storageErr) {
        console.warn('[EventDataProvider] Unable to save to localStorage:', storageErr);
      }
    } catch (err) {
      console.warn('[EventDataProvider] Remote data fetch failed. Continuing with fallback/cache:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRemoteData();
  }, [fetchRemoteData]);

  return (
    <EventDataContext.Provider
      value={{
        eventData,
        isLoading,
        isError,
        refresh: fetchRemoteData,
      }}
    >
      {children}
    </EventDataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEventData = (): EventDataContextValue => {
  const context = useContext(EventDataContext);
  if (!context) {
    throw new Error('useEventData must be used within an EventDataProvider');
  }
  return context;
};


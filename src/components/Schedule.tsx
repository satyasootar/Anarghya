import { CalendarDays, Clock3, MapPin } from 'lucide-react';
import { eventData } from '../data/eventData';

type ScheduleEvent = {
  date: string;
  time: string;
  title: string;
  venue: string;
};

const scheduleData = eventData.events
  .filter((event) => event.date && event.time)
  .map((event): ScheduleEvent => ({
    date: event.date,
    time: event.time,
    title: event.title,
    venue: event.venue
  }))
  .reduce<Array<{ date: string; events: ScheduleEvent[] }>>((days, event) => {
    const day = days.find((item) => item.date === event.date);

    if (day) {
      day.events.push(event);
    } else {
      days.push({ date: event.date, events: [event] });
    }

    return days;
  }, [])
  .sort((firstDay, secondDay) => Date.parse(firstDay.date) - Date.parse(secondDay.date));

const Schedule = () => (
  <section className="bg-slate-50 py-20" id="schedule">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-5 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Plan your visit
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">Event Schedule</h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
            {eventData.scheduleDateRange} · Technical and creative events
          </p>
        </div>
        <div className="w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
          {scheduleData.length} event days
        </div>
      </div>

      <div className="space-y-6">
        {scheduleData.map((day) => {
          const [month, dayNumber] = day.date.split(' ');

          return (
            <section key={day.date} className="grid gap-5 md:grid-cols-[150px_1fr]">
              <div className="flex items-start gap-3 md:block">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-red-600 text-white shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-wider">{month}</span>
                  <span className="text-xl font-bold leading-5">{dayNumber}</span>
                </div>
                <div className="pt-1 md:pt-3">
                  <h3 className="text-lg font-bold text-slate-900">{day.date}</h3>
                  <p className="mt-1 text-sm text-slate-500">{day.events.length} scheduled event{day.events.length === 1 ? '' : 's'}</p>
                </div>
              </div>

              <div className="relative space-y-3 border-l-2 border-red-100 pl-5">
                {day.events.map((event) => (
                  <article key={`${event.date}-${event.title}`} className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <span className="absolute -left-[27px] top-7 h-3 w-3 rounded-full border-2 border-white bg-red-600 ring-1 ring-red-200" aria-hidden="true" />
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{event.title}</h4>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
                          <span className="inline-flex items-center gap-2">
                            <Clock3 className="h-4 w-4 text-red-600" aria-hidden="true" />
                            {event.time}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-red-600" aria-hidden="true" />
                            {event.venue}
                          </span>
                        </div>
                      </div>
                      <span className="w-fit rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
                        On schedule
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  </section>
);

export default Schedule;
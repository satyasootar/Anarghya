import { CalendarDays, Clock3, ExternalLink, MapPin, MessageCircle } from 'lucide-react';
import { useEventData } from '../context/EventDataContext';

interface CompetitionCardProps {
  title: string;
  description: string;
  image: string;
  group: string;
  registration: string;
  date: string;
  time: string;
  venue: string;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  description,
  image,
  group,
  registration,
  date,
  time,
  venue
}) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="relative aspect-[16/7] overflow-hidden bg-gray-100">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width={640}
        height={280}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-xl font-bold leading-tight text-gray-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{description}</p>

      <div className="mt-5 grid grid-cols-1 gap-2 rounded-xl bg-gray-50 p-3 text-sm text-gray-700 sm:grid-cols-3">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
          <span>{date || 'Date to be announced'}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
          <span>{time || 'Time to be announced'}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
          <span>{venue}</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <a
          href={registration}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
        >
          Register
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={group}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-50 px-3 py-2.5 text-sm font-semibold text-green-700 transition-colors hover:bg-green-100"
        >
          WhatsApp
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </article>
);

const Competitions = () => {
  const { eventData } = useEventData();

  return (
    <section className="py-16 bg-gray-50" id="competitions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Featured Competitions
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Showcase your technical prowess in our premier events
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(eventData.events || []).map((competition) => (
            <CompetitionCard key={competition.title} {...competition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
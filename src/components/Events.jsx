import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate

const Events = () => {
  const events = [
    { id: 1, title: 'UEFA Champions League Final', date: 'September 30, 2024', location: 'Stadium XYZ', description: 'Watch the top two football clubs in Europe battle for the ultimate prize, the Champions League Trophy.' },
    { id: 2, title: 'NBA Finals Game 7', date: 'October 5, 2024', location: 'Stadium ABC', description: 'Don\'t miss the dramatic final game of the NBA Finals! See who takes home the championship trophy.' },
    { id: 3, title: 'Wimbledon Men’s Final', date: 'July 14, 2024', location: 'Centre Court, Wimbledon', description: 'Experience the grand finale at Wimbledon as two tennis titans face off in an unforgettable match.' },
    { id: 4, title: 'Super Bowl LVIII', date: 'February 11, 2024', location: 'Las Vegas, Nevada', description: 'The most anticipated event in American football! Be part of the thrilling Super Bowl experience.' },
    { id: 5, title: 'Tour de France - Final Stage', date: 'July 27, 2024', location: 'Champs-Élysées, Paris', description: 'The world’s top cyclists compete in the final, thrilling stage of the prestigious Tour de France.' },
    { id: 6, title: 'Cricket World Cup 2024 Final', date: 'November 15, 2024', location: 'Melbourne Cricket Ground', description: 'Don’t miss the action-packed conclusion of the 2024 Cricket World Cup. Watch the final showdown!' },
    { id: 7, title: 'FIFA World Cup Final', date: 'December 18, 2024', location: 'Lusail Iconic Stadium, Qatar', description: 'Be part of the greatest football event in the world, as two teams compete for ultimate glory.' },
    { id: 8, title: 'Australian Open Tennis - Men’s Final', date: 'January 28, 2024', location: 'Rod Laver Arena, Melbourne', description: 'Watch the world’s best tennis players compete for the Australian Open crown in this thrilling final.' },
  ];

  return (
    <section className="w-full p-8">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">Upcoming Sports Events</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {events.map(event => (
          <div key={event.id} className="w-80 h-auto border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-purple-600">{event.title}</h3>
            <p className="text-gray-600 mt-2">Date: {event.date}</p>
            <p className="text-gray-600">Location: {event.location}</p>
            <p className="mt-4 text-sm text-gray-600">{event.description}</p>
            {/* Link to the dynamic event page using event ID */}
            <Link to={`/events/${event.id}`}>
              <button className="mt-3 px-5 py-2 text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;

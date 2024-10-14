import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EventPage = () => {
  const { eventId } = useParams();

  const event = {
    id: eventId,
    name: 'FIFA World Cup Final',
    date: 'December 18, 2024',
    location: 'Lusail Iconic Stadium, Qatar',
    description: 'The greatest football event in the world, as two teams compete for ultimate glory.',
    price: 299,
    availableSpots: 100, 
  };

  const [availableSpots, setAvailableSpots] = useState(event.availableSpots);

  const handleBuyTicket = () => {
    if (availableSpots > 0) {
      setAvailableSpots(availableSpots - 1);
      alert('Ticket purchased successfully!');
    } else {
      alert('Sorry, no spots available.');
    }
  };

  return (
    <div className="w-full p-8">
      <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
      <p className="text-gray-600 mb-2">Event ID: {event.id}</p>
      <p className="text-gray-600 mb-2">Date: {event.date}</p>
      <p className="text-gray-600 mb-2">Location: {event.location}</p>
      <p className="text-gray-600 mb-4">{event.description}</p>

      <div className="mb-4">
        <p className="text-lg text-green-600">Price: ${event.price}</p>
        <p className="text-lg text-blue-600">Available Spots: {availableSpots}</p>
      </div>

      <button
        onClick={handleBuyTicket}
        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Buy Ticket
      </button>
    </div>
  );
};

export default EventPage;

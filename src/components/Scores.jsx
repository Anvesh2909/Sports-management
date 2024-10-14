import React from 'react';

const Scores = () => {
  // Sample static scores data
  const scores = [
    {
      id: 1,
      eventName: 'Football Match',
      homeTeam: 'Team A',
      homeScore: 3,
      awayScore: 2,
      awayTeam: 'Team B',
    },
    {
      id: 2,
      eventName: 'Basketball Game',
      homeTeam: 'Team C',
      homeScore: 101,
      awayScore: 99,
      awayTeam: 'Team D',
    },
    {
      id: 3,
      eventName: 'Tennis Match',
      homeTeam: 'Player 1',
      homeScore: 2,
      awayScore: 0,
      awayTeam: 'Player 2',
    },
  ];

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-indigo-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Scores
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Check out the latest scores from various sports events.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {scores.map((score) => (
          <div key={score.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold">{score.eventName}</h2>
            <p className="text-gray-600">
              Score: {score.homeTeam} {score.homeScore} - {score.awayScore} {score.awayTeam}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scores;

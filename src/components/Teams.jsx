import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      const url = 'https://os-sports-perform.p.rapidapi.com/v1/sports';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'eab2822f9bmshe8439b44a7e546ep1a44b3jsnf621cf3fc6fc', // Your RapidAPI key
          'x-rapidapi-host': 'os-sports-perform.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json(); // Use json() to parse the response
        console.log(result); // Log the result to see the structure

        // Assuming the API response has a data array
        setTeams(result.data); // Adjust this line based on the actual response structure
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <div className="text-center text-indigo-500">Loading teams...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4 text-indigo-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Teams
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Discover the teams competing in the league. Click on a team to learn more about them.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {teams.map((team) => (
          <div key={team.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
            <img src={team.logo || 'placeholder-logo.png'} alt={`${team.name} logo`} className="w-full h-32 object-cover rounded-md mb-3" />
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <p className="text-gray-600">Some description about {team.name}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;

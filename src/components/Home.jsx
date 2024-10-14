import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-[400px] flex items-center justify-center rounded text-center">
        <div>
          <h1 className="text-5xl font-bold text-purple-600">Welcome to SportsZone⚽</h1>
          <br />
          <p className="mt-3 text-lg text-gray-700">Your hub for live sports events, scores, and player stats!</p>
          <br />
          <Link to="/events">
            <button className="mt-5 px-8 py-3 text-purple-600 border-2 border-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="w-full p-8">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">Featured Events</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Champions League Final */}
          <div className="w-72 h-auto border rounded-lg shadow-lg flex flex-col justify-between p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-xl text-purple-600">Champions League Final</h3>
            <p className="text-gray-600">Date: September 30, 2024</p>
            <p className="text-gray-600">Location: Stadium XYZ</p>
            <p className="mt-2 text-sm text-gray-600">Witness the clash of Europe’s football giants as they fight for the prestigious Champions League trophy!</p>
            <button className="mt-3 px-5 py-2 text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">View Details</button>
          </div>

          {/* NBA Finals */}
          <div className="w-72 h-auto border rounded-lg shadow-lg flex flex-col justify-between p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-xl text-purple-600">NBA Finals</h3>
            <p className="text-gray-600">Date: October 5, 2024</p>
            <p className="text-gray-600">Location: Stadium ABC</p>
            <p className="mt-2 text-sm text-gray-600">The showdown for basketball supremacy is here. Don’t miss the thrilling NBA Finals this season!</p>
            <button className="mt-3 px-5 py-2 text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">View Details</button>
          </div>

          {/* Wimbledon Finals */}
          <div className="w-72 h-auto border rounded-lg shadow-lg flex flex-col justify-between p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-xl text-purple-600">Wimbledon Finals</h3>
            <p className="text-gray-600">Date: July 14, 2024</p>
            <p className="text-gray-600">Location: Centre Court, Wimbledon</p>
            <p className="mt-2 text-sm text-gray-600">Witness tennis greatness as legends battle it out on the iconic grass courts of Wimbledon.</p>
            <button className="mt-3 px-5 py-2 text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">View Details</button>
          </div>

          {/* Super Bowl LVIII */}
          <div className="w-72 h-auto border rounded-lg shadow-lg flex flex-col justify-between p-6 hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-xl text-purple-600">Super Bowl LVIII</h3>
            <p className="text-gray-600">Date: February 11, 2024</p>
            <p className="text-gray-600">Location: Las Vegas, Nevada</p>
            <p className="mt-2 text-sm text-gray-600">The biggest event in American football returns. Be part of the spectacle that is Super Bowl LVIII.</p>
            <button className="mt-3 px-5 py-2 text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">View Details</button>
          </div>
        </div>
      </section>

      {/* Live Scores Section */}
      <section className="w-full p-8">
        <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-8">Live Scores</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-72 h-auto border rounded-lg shadow-lg flex flex-col justify-between p-6">
            <h3 className="font-bold text-xl text-purple-600">Real Madrid vs Barcelona</h3>
            <p className="mt-2 text-sm text-gray-600">Score: 1 - 2 (60' mins)</p>
            <p className="text-gray-600">Location: Santiago Bernabéu</p>
          </div>

          <div className="w-72 h-auto border rounded-lg shadow-lg flex flex-col justify-between p-6">
            <h3 className="font-bold text-xl text-purple-600">Golden State Warriors vs LA Lakers</h3>
            <p className="mt-2 text-sm text-gray-600">Score: 98 - 102 (4th Quarter)</p>
            <p className="text-gray-600">Location: Chase Center</p>
          </div>
        </div>
      </section>

      {/* Teams Fighting Section */}
      <section className="w-full p-8 text-center rounded-lg">
        <h2 className="text-4xl font-semibold mb-6 text-indigo-600">Teams Fighting for Glory</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-72 h-auto border rounded-lg shadow-lg flex flex-col justify-between p-6">
            <h3 className="font-bold text-xl text-purple-600">Manchester City vs Liverpool</h3>
            <p className="mt-2 text-sm text-gray-600">Match kicks off at 8:00 PM</p>
            <p className="text-gray-600">Location: Etihad Stadium</p>
          </div>

          <div className="w-72 h-auto border rounded-lg shadow-lg flex flex-col justify-between p-6">
            <h3 className="font-bold text-xl text-purple-600">Dallas Mavericks vs Miami Heat</h3>
            <p className="mt-2 text-sm text-gray-600">Tip-off at 7:30 PM</p>
            <p className="text-gray-600">Location: American Airlines Center</p>
          </div>
        </div>
      </section>

      {/* Join the Community Section */}
      <section className="w-full p-8 text-center rounded-lg">
        <h2 className="text-4xl font-semibold mb-6 text-indigo-600">Join the Community</h2>
        <p className="text-lg text-gray-700">Connect with fellow sports enthusiasts and stay updated on the latest events, scores, and news!</p>
        <button className="mt-5 px-8 py-3 text-purple-600 border-2 border-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Home;

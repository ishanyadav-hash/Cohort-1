import React from 'react';

const LiveDemo = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Live Product Demo</h1>
          <p className="mt-4 text-xl text-gray-400">Experience the power of Cohot in real-time.</p>
        </div>
        
        <div className="aspect-video bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 flex items-center justify-center relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <svg className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform duration-300 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">Cohot 2026</p>
            <h3 className="text-lg font-bold">Introduction to Analytics Dashboard</h3>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: 'Interactive UI', desc: 'Click and explore every feature.' },
            { title: 'Real Data', desc: 'See how analytics looks live.' },
            { title: 'Fast Setup', desc: 'Integrate in less than 5 minutes.' },
          ].map((feature, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
import React from "react";

export const Organigram = () => {
  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800 transition hover:scale-105 hover:border-indigo-500">
      <h2 className="text-2xl font-bold text-white">Notre Organigramme</h2>
      <div className="mt-4 text-gray-400">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold text-white">John Doe</h3>
            <p className="text-gray-400">CEO</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold text-white">Jane Smith</h3>
            <p className="text-gray-400">CTO</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold text-white">Alice Johnson</h3>
            <p className="text-gray-400">COO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

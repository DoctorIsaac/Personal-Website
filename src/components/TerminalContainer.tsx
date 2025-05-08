import React from 'react';

const TerminalContainer = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Terminal header */}
      <div className="bg-gray-800 p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-sm mx-auto">Steven Velasquez Portfolio</div>
      </div>
      
      {/* Terminal content - children will be passed from parent */}
      <div className="flex-1 bg-gray-900 p-4 font-mono text-green-400 overflow-hidden flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default TerminalContainer;
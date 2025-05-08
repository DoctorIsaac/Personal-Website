import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Steven Velasquez Portfolio" }) => {
  return (
    <div className="bg-gray-800 p-2 flex items-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-gray-400 text-sm mx-auto">{title}</div>
    </div>
  );
};

export default Header;
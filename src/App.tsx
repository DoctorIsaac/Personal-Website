import React, { useState } from 'react';
import TerminalContainer from './components/TerminalContainer';
import TerminalContent from './components/TerminalContent';
import PortfolioSidebar from './components/SideBar';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div className="h-screen bg-gray-950 flex">
      {/* Sidebar - only show when animation is complete */}
      <div 
        className={`transition-all duration-500 ease-in-out ${animationComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <PortfolioSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      
      {/* Main content with adjusted width based on sidebar state */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? 'md:ml-64' : 'ml-0'}`}
      >
        {/* Permanent sidebar toggle button visible at all times */}
        {animationComplete && (
          <button 
            className="fixed top-4 left-4 z-50 bg-gray-800 hover:bg-gray-700 text-green-400 p-2 rounded-md transition-colors duration-200 shadow-lg"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        )}
        
        {/* Terminal container that gets resized when sidebar is toggled */}
        <div className="h-screen">
          <TerminalContainer>
            <TerminalContent onAnimationComplete={handleAnimationComplete} />
          </TerminalContainer>
        </div>
      </div>
    </div>
  );
};

export default App;
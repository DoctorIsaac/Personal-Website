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
    <div className="h-screen bg-gray-950">
      {/* Sidebar - only show when animation is complete */}
      <div 
        className={`transition-all duration-500 ease-in-out ${animationComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <PortfolioSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      
      {/* Main content with sidebar toggle */}
      <div className={`transition-all duration-200 ${animationComplete && sidebarOpen ? 'md:ml-64' : ''}`}>
        {/* Mobile sidebar toggle button - only show when animation is complete */}
        {animationComplete && (
          <button 
            className="md:hidden fixed top-4 left-4 z-10 bg-gray-800 text-white p-2 rounded-md"
            onClick={toggleSidebar}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        
        {/* Terminal */}
        <div className={`h-screen ${animationComplete && sidebarOpen ? 'md:pl-64' : ''}`}>
          <TerminalContainer>
            <TerminalContent onAnimationComplete={handleAnimationComplete} />
          </TerminalContainer>
        </div>
      </div>
    </div>
  );
};

export default App;
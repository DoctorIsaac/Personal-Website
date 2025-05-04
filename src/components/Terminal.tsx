import React, { useState, useEffect, useRef } from 'react';

const TerminalComponent = () => {
  const [lines, setLines] = useState([]);
  const [ellipsis, setEllipsis] = useState('');
  const [animationComplete, setAnimationComplete] = useState(false);
  const terminalRef = useRef(null);

  // Initial animation sequence
  useEffect(() => {
    // Animation sequence
    const startWelcomeAnimation = () => {
      // Start with empty screen
      setLines([]);
      
      // First step: Show initializing message
      setTimeout(() => {
        setLines([{ type: 'output', content: 'Initializing portfolio interface' }]);
        
        // Ellipsis animation
        const ellipsisInterval = setInterval(() => {
          setEllipsis(prev => {
            if (prev === '...') return '';
            return prev + '.';
          });
        }, 500);
        
        // After 3 seconds, clear and show welcome message
        setTimeout(() => {
          clearInterval(ellipsisInterval);
          setLines([{ type: 'output', content: 'Welcome to Steven Velasquez portfolio v1.0.0' }]);
          
          // After 2 more seconds, clear screen completely
          setTimeout(() => {
            setLines([]);
            setAnimationComplete(true);
          }, 2000);
        }, 3000);
      }, 500);
    };
    
    // Start the animation
    startWelcomeAnimation();
  }, []);

  // Auto-scroll to bottom when new lines are added - modified to prevent user scrolling
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      
      // Prevent scroll with wheel
      const preventScroll = (e) => {
        e.preventDefault();
      };
      
      // Apply the event listener to prevent scrolling
      terminalRef.current.addEventListener('wheel', preventScroll, { passive: false });
      
      // Cleanup
      return () => {
        if (terminalRef.current) {
          terminalRef.current.removeEventListener('wheel', preventScroll);
        }
      };
    }
  }, [lines]);

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Terminal header */}
      <div className="bg-gray-800 rounded-t-lg p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-400 text-sm mx-auto">Steven Velasquez Portfolio</div>
      </div>
      
      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="flex-1 bg-gray-900 p-4 font-mono text-green-400 overflow-hidden"
      >
        {lines.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap break-all">
            <div>{line.content}{line.content === 'Initializing portfolio interface' && ellipsis}</div>
          </div>
        ))}
        {/* Once animation is complete, this will be a blank screen for you to code */}
      </div>
    </div>
  );
};

export default TerminalComponent;
import React, { useState, useEffect, useRef } from 'react';

const TerminalContent = ({ onAnimationComplete }) => {
  const [lines, setLines] = useState([]);
  const [ellipsis, setEllipsis] = useState('');
  const [animationComplete, setAnimationComplete] = useState(false);
  const contentRef = useRef(null);

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
            // Call the callback to notify parent component
            if (onAnimationComplete) {
              onAnimationComplete();
            }
          }, 2000);
        }, 3000);
      }, 500);
    };
    
    // Start the animation
    startWelcomeAnimation();
  }, []);

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div ref={contentRef} className="h-full w-full max-w-1xl mx-auto flex flex-col justify-center text-left text-3xl">
      {lines.map((line, index) => (
        <div key={index} className="whitespace-pre-wrap break-all">
          <div>{line.content}{line.content === 'Initializing portfolio interface' && ellipsis}</div>
        </div>
      ))}
      {/* Once animation is complete, this will be a blank screen for you to code */}
    </div>
  );
};

export default TerminalContent;
// In your app.tsx file
import React, { useEffect } from 'react';
import TerminalComponent from './components/Terminal';

function App() {
  // Add effect to disable scrolling on the entire document
  useEffect(() => {
    // Save the original overflow setting
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling on component unmount
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <TerminalComponent />
    </div>
  );
}

export default App;
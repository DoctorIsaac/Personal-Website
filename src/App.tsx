import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path based on your project structure

function App() {
  // Example navigation items
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar menuItems={menuItems} logo="YourBrand" />
      
      {/* Main content of your application */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to YourBrand</h1>
        <p className="mt-4 text-gray-600">This is your application content.</p>
      </main>
    </div>
  );
}

export default App;
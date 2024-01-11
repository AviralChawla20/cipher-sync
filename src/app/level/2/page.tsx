// Import the necessary components and styles
"use client";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Spline from '@splinetool/react-spline';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure this line is included

// Define the component
export default function App() {
  // State to track hover state
  const [isHovered, setIsHovered] = useState(false);

  // Set the title to "First App" on component mount
  useEffect(() => {
    document.title = "URL?";

    // Cleanup function to reset the title when the component is unmounted
    return () => {
      document.title = "Default Title"; // You can set a default title here if needed
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Header/Navbar */}
      <div className="bg-gray-800 p-4 w-full flex justify-end items-center relative">
        {/* Bulb icon */}
        <FontAwesomeIcon
          icon={faLightbulb}
          className={`text-yellow-500 text-2xl mr-2 ${isHovered ? 'opacity-0' : 'opacity-100 transition duration-300'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />

        {/* Hint text */}
        <span
          className={`text-white ${isHovered ? 'opacity-0' : 'opacity-100 transition duration-300'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Hint
        </span>

        {/* Box containing Bulb icon and Hint text (visible only on hover) */}
        {isHovered && (
          <div className="absolute top-0 right-0 flex items-center border-yellow-500 border-4 rounded-md p-2 cursor-pointer transition duration-300 transform hover:scale-90">
            {/* Bulb icon */}
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-yellow-500 text-2xl mr-2"
            />
            {/* Hint text */}
            <span className="text-white">Hint</span>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 w-full h-full overflow-hidden hover:overflow-y-auto">
        {/* Adjust the width and height based on your design preferences */}
        <Spline scene="https://prod.spline.design/EZBrnM1g8g0MQvBT/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}

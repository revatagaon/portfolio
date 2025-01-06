import React, { useState, useEffect } from "react";

const LoadingPage = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete(); // Notify parent when loading is complete
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust timing as needed

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [onComplete]);

  const radius = 100; // Increased radius for a larger circle
  const strokeWidth = 6; // Thicker stroke for better visibility
  const normalizedRadius = radius - strokeWidth / 2; // Adjust radius for stroke
  const circumference = 2 * Math.PI * normalizedRadius; // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-950">
      <div className="relative">
        {/* Circular Progress Bar */}
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform rotate-[-90deg]" // Rotating for correct progress direction
        >
          {/* Background Circle */}
          <circle
            stroke="#4B5563"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress Circle */}
          <circle
            stroke="#ffffff" // White progress bar
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-100" // Smooth animation
          />
        </svg>

        {/* Percentage in the Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
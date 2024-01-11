// Import the necessary components and styles
"use client";
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { BounceLoader } from 'react-spinners';
// import { isAuthenticated } from '@/lib/supabase';
import { useRouter } from 'next/router';
import { NextRequest, NextResponse } from "next/server";

// Define the component
export default function App() {
  // State to track Spline loading state
  const [isSplineLoading, setIsSplineLoading] = useState(true);
  // const router = useRouter();
  

  // Set the title to "Missions" on component mount
  useEffect(() => {
    document.title = "Missions";

    // Cleanup function to reset the title when the component is unmounted
    return () => {
      document.title = "Default Title"; // You can set a default title here if needed
    };
  }, []);

  // Callback for successful loading of the Spline scene
  const handleSplineLoad = () => {
    // Set isSplineLoading to false to remove the loader
    setIsSplineLoading(false);
  };

  return (
    <div className="bg-[#C2D4FF] min-h-screen flex flex-col items-center justify-center">
      {/* Spline Loader */}
      {isSplineLoading && (
        <div className="flex items-center justify-center h-full absolute top-0 left-0 right-0 bottom-0 bg-[#C2D4FF]">
          <BounceLoader color="#36d7b7" />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 w-full h-full overflow-hidden hover:overflow-y-auto">
        {/* Spline Component */}
        <Spline
          scene="https://prod.spline.design/GD3kTOeRSYRjBSga/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onLoad={handleSplineLoad} // Set the onLoad method for Spline
        />
      </div>
    </div>
  );
}

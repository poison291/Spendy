import { useAuth, UserButton, UserProfile } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Hero() {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/auth");
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col items-center justify-center">
      <UserButton />
    </div>
  );
}

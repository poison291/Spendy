import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAuth,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";

export default function Landing() {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-950 h-screen flex flex-col items-center justify-center">
      <h1 className="text-gray-300 text-center font-bold text-4xl font-mono mb-6">
        Welcome to Spendy!
      </h1>

      <SignedOut>
        <div className="flex justify-center space-x-4">
          <SignInButton>
            <button className="text-white bg-blue-500 px-4 py-2 rounded">
              Log In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="text-white bg-green-500 px-4 py-2 rounded">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>
    </div>
  );
}

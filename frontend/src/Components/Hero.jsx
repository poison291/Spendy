import { useAuth, UserButton, UserProfile } from "@clerk/clerk-react";
import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { useUser } from "@clerk/clerk-react";
import Income from "./Income";

export default function Hero() {
  const navigate = useNavigate();
  const {user} = useUser()
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/auth");
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <>
     <Outlet />
     <h1 className=" absolute text-white text-center ">Welcome {user?.firstName}</h1>
      <Navbar />
    
      {/* <Income/> */}
      <div className="bg-gray-900 h-screen flex justify-end">
        <div className="text-white mt-6 mr-6">
          <UserButton className="bg-teal-500 hover:bg-teal-400 px-4 py-2 rounded-full" />
        </div>
      </div>
   
    </>
  );
}

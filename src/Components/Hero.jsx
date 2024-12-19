import { useAuth, UserButton, UserProfile } from "@clerk/clerk-react";
import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import { useUser } from "@clerk/clerk-react"; 

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
      <Navbar />
     <Outlet />
    
      {/* <Income/> */}
     
   
    </>
  );
}

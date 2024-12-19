import React from "react";

export default function About() {
  return (
    <>
    <div className="bg-gray-700 w-[1100px] h-[80vh] my-[10vh] absolute mx-80 rounded-xl flex flex-col items-center ">
      <h1 className="text-4xl font-bold  text-center mb-12 font-mono mt-8">About Us</h1>
      <p className="max-w-3xl mb-6 text-center text-2xl">
        Welcome to our app! We are a team dedicated to providing users with
        powerful and easy-to-use tools for managing their finances. Our goal is
        to help you track your income, expenses, and financial goals in a
        seamless and intuitive way. Stay organized, stay on top of your budget,
        and watch your financial future grow!
      </p>
    </div>
    </>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/NavTabs.jsx";

function App() {
  return (
    <>
      <Nav />
      
      <div className="h-screen bg-zinc-800">
      <Outlet />
        <h1 className="font-bold text-zinc-300">
          The Greatest Website Ever
        </h1>
        <p>By: Owen, Jared, and Dustin</p>
      </div>
    </>
  );
}

export default App;

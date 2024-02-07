import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/NavTabs.jsx";

function App() {
  return (
    <>
      <div className="h-screen bg-zinc-800">
        <Nav />
        <Outlet />
      </div>
    </>
  );
}

export default App;

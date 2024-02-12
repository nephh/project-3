//import { useState } from "react";
import { Link } from "react-router-dom";
import CreateEndeavor from "../components/CreateEndeavor";
import CreateCommunity from "../components/CreateCommunity";


import Auth from "../utils/auth";


export default function Create() {
 
  return (
    // bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900
    <div className="">
      {Auth.loggedIn() ? (
      <div className="min-h-screen flex flex-row flex-wrap justify-evenly content-center items-center">
      <CreateEndeavor />
      <CreateCommunity />
      </div>
      ) : (
        <div className="text-2xl text-center text-amber-400 py-10 h-screen">
          <p>You need to be logged in to Create a Community or Endeavor.</p> 
          <p>  Please{' '}
          <Link to="/login" className="text-white">login</Link> or <Link to="/signup" className="text-white">signup.</Link>
        </p>
        </div>
      )}
    </div>
  );
}

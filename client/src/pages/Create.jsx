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
        <div className="flex min-h-screen flex-row flex-wrap content-center items-center justify-evenly">
          <CreateEndeavor />
          <CreateCommunity />
        </div>
      ) : (
        <div className="h-screen py-10 text-center text-2xl text-amber-400">
          <p>You need to be logged in to Create a Community or Endeavor.</p>
          <p>
            {" "}
            Please{" "}
            <Link to="/login" className="text-white">
              login
            </Link>{" "}
            or{" "}
            <Link to="/signup" className="text-white">
              signup.
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

//import { useState } from "react";
import { Link } from "react-router-dom";
//import { useMutation } from "@apollo/client";
import CreateEndeavor from "../components/CreateEndeavor";
import CreateCommunity from "../components/CreateCommunity";
//import { ADD_ENDEAVOR } from "../utils/mutations";

import Auth from "../utils/auth";


export default function Create() {
  // const [endeavor, setEndeavor] = useState("");
  // const [message, setMessage] = useState("");

  // const [addEndeavor, { error }] = useMutation(ADD_ENDEAVOR);

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addEndeavor({
  //       variables: { ...endeavor },
  //     });

  //     Auth.login(data.addEndeavor.token);
  //   } catch (err) {
  //     console.error(err);
  //     setMessage("Something went wrong!");
  //   }
  // };

  return (
    <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">
      {Auth.loggedIn() ? (
      <div>
      <CreateEndeavor />
      <CreateCommunity />
      </div>
      ) : (
        <div className="text-2xl text-center text-amber-400 py-10">
          <p>You need to be logged in to Create a Community or Endeavor.</p> 
          <p>  Please{' '}
          <Link to="/login" className="text-white">login</Link> or <Link to="/signup" className="text-white">signup.</Link>
        </p>
        </div>
      )}
    </div>
  );
}

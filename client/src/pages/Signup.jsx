import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Login() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex min-h-screen items-center">
      <div className="container mx-auto">
        <div className="mx-auto my-10 py-5 max-w-md rounded-xl bg-black bg-opacity-75">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign Up
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Create an account to start joining communities!
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your Username"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <div className="mb-2 flex justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6 flex justify-center">
                <button
                  type="submit"
                  className="mt-4 w-36 rounded-md bg-indigo-500 p-3 text-white focus:bg-indigo-600 focus:outline-none"
                >
                  Sign up
                </button>
              </div>
              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-indigo-400 focus:text-indigo-500 focus:underline focus:outline-none dark:focus:border-indigo-800"
                >
                  Log in.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

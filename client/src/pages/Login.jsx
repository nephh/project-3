import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Slider from "../components/Slider";
//TEST query
import { useQuery } from "@apollo/client";
import { QUERY_ENDEAVORS } from "../utils/queries";
import SplashImage from "../assets/blur.png";

export default function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // setFormState({
    //   email: '',
    //   password: '',
    // });
  };

  //TEST query
  const { loading, data } = useQuery(QUERY_ENDEAVORS);
  const endeavors = data?.endeavors || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  //console.log(endeavors);

  return (
    <div
      className="flex min-h-screen bg-white dark:bg-gray-900"
      style={{
        backgroundImage: `url(${SplashImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto mt-20">
        <div className="w-11/12 md:min-w-2xl mx-auto max-w-2xl rounded-xl bg-black bg-opacity-75 py-1">
          <div className="text-center">
            <h1 className="my-3 text-4xl font-semibold text-gray-700 dark:text-gray-200">
              Sign in
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <div className="mx-7 mt-7">
            <form
              className="flex flex-col md:flex-row md:items-center justify-between"
              onSubmit={handleFormSubmit}
            >
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
              <div className="mb-3 flex justify-center">
                <button
                  type="submit"
                  className="mt-4 w-36 rounded-md bg-indigo-500 p-3 text-white focus:bg-indigo-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <p className="mb-4 text-center text-sm text-gray-400">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="text-indigo-400 focus:text-indigo-500 focus:underline focus:outline-none dark:focus:border-indigo-800"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
        <div className="mt-20 text-center">
          <Slider endeavors={endeavors} />
        </div>
      </div>
    </div>
  );
}

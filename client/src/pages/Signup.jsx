import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div class="flex min-h-screen items-center bg-white dark:bg-gray-900">
      <div class="container mx-auto">
        <div class="mx-auto my-10 max-w-md">
          <div class="text-center">
            <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign Up
            </h1>
            <p class="text-gray-500 dark:text-gray-400">
              Create an account to start joining communities!
            </p>
          </div>
          <div class="m-7">
            <form action="">
            <div class="mb-6">
                <label
                  for="username"
                  class="mb-2 block text-sm text-gray-600 dark:text-gray-400"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your Username"
                  class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="mb-2 block text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                />
              </div>
              <div class="mb-6">
                <div class="mb-2 flex justify-between">
                  <label
                    for="password"
                    class="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                />
              </div>
              <div class="mb-6 flex justify-center">
                <button
                  type="button"
                  class="mt-4 w-36 rounded-md bg-indigo-500 p-3 text-white focus:bg-indigo-600 focus:outline-none"
                >
                  Sign up
                </button>
              </div>
              <p class="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  class="text-indigo-400 focus:text-indigo-500 focus:underline focus:outline-none dark:focus:border-indigo-800"
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

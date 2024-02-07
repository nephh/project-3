import { useState } from "react";

export default function Create() {
  const [endeavor, setEndeavor] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1 className="text-2xl text-center text-amber-400 py-10">Create New Endeavor!</h1>

      <form className="mx-auto max-w-sm">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Endeavor Name
          </label>
          <input
            type="name"
            id=""
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Type here"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Describe endeavor here..."
            required
          ></textarea>
        </div>
        <div className="mb-5">
          <label
            htmlFor="community"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a Community
          </label>
          <select
            id="community"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option>Gaming</option>
            <option>Events</option>
            <option>Pets</option>
            <option>Music</option>
            <option>Creative</option>
            <option>Volunteer</option>
            <option>Tech</option>
            <option>Charity</option>
          </select>
        </div>

        <div className="mb-5">
          <label
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="endeavor_avatar"
          >
            Optional: Upload file
          </label>
          <input
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            aria-describedby="endeavor_avatar_help"
            id="endeavor_avatar"
            type="file"
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="endeavor_avatar_help"
          >
           Add a picture to help your Endeavor stand out!
          </div>
        </div>

        <div className="mb-5 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Check to use for Fundraising or Donations with {" "}
            <a
              href="https://stripe.com/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Stripe
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Endeavor
        </button>
      </form>
    </div>
  );
}

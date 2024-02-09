import { useState } from "react";
//import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_ENDEAVOR } from "../utils/mutations";

import Auth from "../utils/auth";

export default function CreateEndeavor() {
  const [endeavor, setEndeavor] = useState(
    {
      title: "",
      content: "",
      community: "",
    }
  );
  const [message, setMessage] = useState("");

  const [addEndeavor, { error }] = useMutation(ADD_ENDEAVOR);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addEndeavor({
        variables: { ...endeavor },
      });
      //Auth attempt
      Auth.getUserInfo(data.addEndeavor.token);
      setEndeavor({
        title: "",
        content: "",
        community: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }
    console.log("Endeavor Name:", endeavor.title);
    console.log("Description:", endeavor.content);
    console.log("Community:", endeavor.community);
  };

  return (
    <div className="py-8 ">
      <form className="mx-auto max-w-md rounded bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 px-8 pb-8 pt-6 shadow-md"
        onSubmit={handleFormSubmit}
      >
        <h1 className="border-b-2 border-neutral-100 pb-5 text-center text-2xl text-orange-700 font-extrabold drop-shadow-lg">
          Create New Endeavor!
        </h1>
        <div className="mb-5">
          <label
            htmlFor="endeavorName"
            className="pt-3 mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Endeavor Name
          </label>
          <input
            type="name"
            id="endeavorName"
            value={endeavor.title}
            onChange={(e) => setEndeavor({ ...endeavor, title: e.target.value })}
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
            value={endeavor.content}
            onChange={(e) => setEndeavor({ ...endeavor, content: e.target.value })}
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
            value={endeavor.community}
            onChange={(e) => setEndeavor({ ...endeavor, community: e.target.value })}
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
            Check to use for Fundraising or Donations with{" "}
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

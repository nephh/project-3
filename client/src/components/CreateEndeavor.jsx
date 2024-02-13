import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

import { ADD_ENDEAVOR } from "../utils/mutations";
import { DASHBOARD_QUERY, QUERY_SINGLE_USER } from "../utils/queries";

import Auth from "../utils/auth";

export default function CreateEndeavor() {
  const user = Auth.getUserInfo();
  const [addEndeavor, { error }] = useMutation(ADD_ENDEAVOR, {
    refetchQueries: [
      { query: DASHBOARD_QUERY, variables: { username: user.data.username } },
    ],
  });
  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username: user.data.username },
  });
  const communities = data?.user.communities || [];

  const [formState, setFormState] = useState({
    title: "",
    content: "",
    community: "",
    image: "",
  });

  useEffect(() => {
    if (communities.length > 0) {
      setFormState((prevState) => ({
        ...prevState,
        community: communities[0].name,
      }));
    }
  }, [communities]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addEndeavor({
        variables: {
          ...formState,
          author: user.data.username,
        },
      });

      setFormState({
        title: "",
        content: "",
        image: "",
      });
      //Test take to endeavor page, seems to work but without named url
      window.location.replace(
        `/community/${formState.community}/${data.addEndeavor._id}`,
      );
      console.log(formState.image);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-10">
      <form
        className="mx-auto max-w-md rounded bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 px-8 pb-8 pt-6 shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="border-b-2 border-neutral-100 pb-5 text-center text-2xl font-extrabold text-white drop-shadow-lg">
          Create New Endeavor!
        </h1>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="mb-2 block pt-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Endeavor Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formState.title}
            onChange={handleChange}
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Type here"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="content"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            value={formState.content}
            onChange={handleChange}
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
            name="community"
            value={formState.community}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            {communities.map((community) => {
              return <option key={community._id}>{community.name}</option>;
            })}
          </select>
        </div>
        {/* TEST default image select */}
        <div className="mb-5">
          <label
            htmlFor="image"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a Default Image
          </label>
          <select
            id="image"
            name="image"
            value={formState.image}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option>Select Image</option>

            <option value={"unsplashMusic2.jpg"}>Music</option>
            <option value={"unsplashGaming.jpg"}>Gaming</option>
            <option value={"unsplashGaming2.jpg"}>Gaming 2</option>
            <option value={"unsplashEvent.jpg"}>Events</option>
            <option value={"unsplashCamera.jpg"}>Photography</option>
            <option value={"unsplashCity.jpg"}>City</option>
            <option value={"unsplashCoding.jpg"}>Coding/Computer</option>
            <option value={"unsplashTech.jpg"}>Tech</option>
            <option value={"unsplashTravel.jpg"}>Travel</option>
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

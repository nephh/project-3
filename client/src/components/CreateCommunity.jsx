import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMUNITY } from "../utils/mutations";
import {
  QUERY_SINGLE_USER,
  DASHBOARD_QUERY,
  QUERY_COMMUNITIES,
} from "../utils/queries";
import Auth from "../utils/auth";

const CreateCommunity = () => {
  const user = Auth.getUserInfo();
  const [formState, setFormState] = useState({
    name: "",
    description: "",
  });
  const [addCommunity] = useMutation(ADD_COMMUNITY, {
    refetchQueries: [
      { query: QUERY_SINGLE_USER, variables: { username: user.data.username } },
      {
        query: DASHBOARD_QUERY,
        variables: { username: user.data.username, sort: "" },
      },
      { query: QUERY_COMMUNITIES, variables: { sort: "" } },
    ],
  });

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
      const { data } = await addCommunity({
        variables: {
          ...formState,
          creator: user.data.username,
        },
      });

      setFormState({
        name: "",
        description: "",
      });
      //TEST take to created community page, ISSUE showing undefined for url
      window.location.replace(`/community/${data.addCommunity.url}`);
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
        <h1 className="border-b-2 border-neutral-100 pb-5 text-center text-2xl font-extrabold text-slate-700 drop-shadow-lg">
          Create New Community!
        </h1>
        <div className="mb-5">
          <label
            htmlFor="communityName"
            className="mb-2 block pt-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Community Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Type here"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            value={formState.description}
            rows="4"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Describe community here..."
            required
          ></textarea>
        </div>

        <div className="mb-5">
          <label
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="community_avatar"
          >
            Optional: Upload file
          </label>
          <input
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            aria-describedby="community_avatar_help"
            id="community_avatar"
            type="file"
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="endeavor_avatar_help"
          >
            Add a picture to help your Community stand out!
          </div>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-cyan-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Community
        </button>
      </form>
    </div>
  );
};

export default CreateCommunity;

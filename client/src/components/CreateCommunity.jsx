import React, { useState } from "react";

const CreateCommunity = () => {
  const [communityName, setCommunityName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
    console.log("Community Name:", communityName);
    console.log("Description:", description);
  };

  return (
    <div className="py-10">
      <form
        className="mx-auto max-w-md rounded bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 px-8 pb-8 pt-6 shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="border-b-2 border-neutral-100 pb-5 text-center text-2xl text-green-700 font-extrabold drop-shadow-lg">
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
            id="communityName"
            value={communityName}
            onChange={(e) => setCommunityName(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Community
        </button>
      </form>
    </div>
  );
};

export default CreateCommunity;
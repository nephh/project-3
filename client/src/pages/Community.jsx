import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_COMMUNITY } from "../utils/queries";
import EndeavorComponent from "../components/EndeavorComponent";
export default function Community() {
  const { communityUrl } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_COMMUNITY, {
    variables: { url: communityUrl },
  });

  console.log(data);
  const community = data?.community || [];
  const endeavors = data?.community.endeavors || [];
  const users = community?.users || [];
  console.log(endeavors);

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (community) {
      setUrl(community.url);
    }
  }, []);

  const handleGoBack = () => {
    window.history.back(); // Navigate back to the previous route
  };

  return (
    <div className="h-screen overflow-x-hidden">
      <div className="px-6 py-8">
        <h1 className="pb-5 pt-3 text-center text-2xl font-bold text-zinc-200 md:text-3xl">
          {community.name} Community
        </h1>
        <div className="justify container mx-auto flex lg:justify-between">
          <div className="w-full lg:w-8/12">
            <button
              onClick={handleGoBack}
              className="text-l mb-2 rounded bg-cyan-900 px-3 py-2 font-bold text-zinc-200 hover:scale-110 hover:duration-700 hover:ease-in-out"
            >
              Back
            </button>
            <div className="flex items-center justify-between">
              {/* <h1 className="py-3 text-2xl font-bold text-zinc-200 md:text-3xl">
                {community.name} Community
              </h1> */}
              {/* <div>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Filter</option>
                  <option>Last Week</option>
                </select>
              </div> */}
            </div>
            <div className="mt-4">
              <div className="mx-auto max-w-4xl rounded-lg bg-zinc-900 bg-opacity-75 px-10 py-6 shadow-md shadow-black">
                <div className="mt-2">
                  <p className="text-2xl font-bold text-zinc-400">About Us:</p>
                  <p className="mt-2 text-zinc-200">{community.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-bold text-gray-500">
                    {community.endeavorCount} Active Endeavors
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-2xl">Community Endeavors</p>
            </div>
            <div className="mt-8">
              {endeavors.map((endeavor, index) => (
                <EndeavorComponent
                  key={index}
                  endeavor={endeavor}
                  index={index}
                />
              ))}
            </div>
            {/* <div className="mt-8">
              <div className="flex">
                <a
                  href="#"
                  className="mx-1 rounded-md bg-white px-3 py-2 font-medium text-gray-500 hover:bg-gray-500 hover:text-white"
                >
                  Previous
                </a>

                <a
                  href="#"
                  className="mx-1 rounded-md bg-white px-3 py-2 font-medium text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                  Next
                </a>
              </div>
            </div> */}
          </div>
          <div className="-mx-8 hidden w-4/12 lg:block">
            <div className="px-8">
              <h1 className="mb-4 text-xl font-bold text-zinc-400">Founder</h1>
              <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-rose-900 px-6 py-4 shadow-md">
                <ul className="-mx-4">
                  <li className="flex items-center">
                    <p>
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-400 hover:underline"
                      >
                        {community.creator} {`-`}
                      </a>
                      <span className="text-sm font-light text-gray-400">
                        Created 23 Posts
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 px-8">
              <h1 className="mb-4 text-xl font-bold text-zinc-400">
                Contributors
              </h1>
              <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-rose-900 px-4 py-6 shadow-md">
                <ul>
                  {users.map((user, index) => (
                    <li key={index} className="space-between flex items-center">
                      <p className="mx-1 font-bold text-gray-400 hover:underline">
                        {user.username} {`-`}
                      </p>
                      <p className="text-sm font-light text-gray-400">
                        Joined: 1/1/2024
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 px-8">
              <h1 className="mb-4 text-xl font-bold text-zinc-400">
                Most Recent Endeavor
              </h1>
              {endeavors[0] && (
                <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-rose-900 px-8 py-6 shadow-md">
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-300 hover:underline"
                    >
                      {endeavors[0].title}
                    </a>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="text-sm text-gray-400 hover:underline"
                      >
                        {endeavors[0].author}
                      </a>
                    </div>
                    <span className="text-sm font-light text-gray-400">
                      {endeavors[0].userCount} Active Users
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

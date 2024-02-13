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
  const endeavors = community?.endeavors || [];
  const users = community?.users || [];
  console.log(community.name);
  console.log(endeavors)

  const [ url, setUrl ] = useState("");

  useEffect(() => {
    if(community) {
      setUrl(community.url)
    }
  }, [])

  return (
    <div className="overflow-x-hidden h-screen">
      <div className="px-6 py-8">
        <div className="container mx-auto flex justify-between">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-white md:text-2xl">
                {community.name}
              </h1>
              {/* <div>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Filter</option>
                  <option>Last Week</option>
                </select>
              </div> */}
            </div>
            <div className="mt-4">
              <div className="mx-auto max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md shadow-black">
                <div className="mt-2">
                  <p className="text-2xl font-bold text-gray-700">About Us:</p>
                  <p className="mt-2 text-gray-600">
                    {community.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href="#"
                    className="text-l rounded bg-blue-500 px-3 py-2 font-bold text-zinc-200 hover:scale-110 hover:duration-700 hover:ease-in-out"
                  >
                    JOIN US
                  </a>
                  <p className="font-bold text-gray-700">{community.endeavorCount} Active Endeavors</p>
                </div>
              </div>
            </div>
            <div className="mt-16">
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
              <h1 className="mb-4 text-xl font-bold text-white">Founder</h1>
              <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-6 py-4 shadow-md">
                <ul className="-mx-4">
                  <li className="flex items-center">
                    <p>
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:underline"
                      >
                        {community.creator}
                      </a>
                      <span className="text-sm font-light text-gray-700">
                        Created 23 Posts
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 px-8">
              <h1 className="mb-4 text-xl font-bold text-white">
                Contributors
              </h1>
              <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-4 py-6 shadow-md">
                <ul>
                  {users.map((user, index) => (
                    <li className="flex items-center space-between">
                      <p className="mx-1 font-bold text-gray-700 hover:underline">{user.username}</p>
                      <p className="text-sm font-light text-gray-700">Joined: 1/1/2024</p>
                    </li>
                  ))}
                  
                </ul>
              </div>
            </div>
            <div className="mt-10 px-8">
              <h1 className="mb-4 text-xl font-bold text-white">
                Most Recent Endeavor
              </h1>
              <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-8 py-6 shadow-md">
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-700 hover:underline"
                  >
                    LFG
                  </a>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <a
                      href="#"
                      className="mx-3 text-sm text-gray-700 hover:underline"
                    >
                      Owen
                    </a>
                  </div>
                  <span className="text-sm font-light text-gray-600">
                    Jun 1, 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

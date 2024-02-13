import React from "react";
import { Link } from "react-router-dom";

export default function DashboardCommunities({ communities, sort }) {
  return (
    <div className="mx-5 mt-10">
      <h1 className="mb-4 ml-2 text-xl font-bold text-zinc-200">Your Communities</h1>
      {/* <div className="mb-2">
        <button
          onClick={() => sort("popular")}
          className="px-4 py-2 text-sm text-zinc-300"
        >
          Most Popular
        </button>
        |
        <button
          onClick={() => sort("title")}
          className="px-4 py-2 text-sm text-zinc-300"
        >
          Alphabetical Order
        </button>
      </div> */}
      <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-zinc-900 bg-opacity-75 px-4 py-6 shadow-md">
        <ul className="border-t border-zinc-400 border-opacity-25">
          {communities.map((community, index) => (
            <li
              key={index}
              className="flex items-center border-b border-zinc-400 border-opacity-25 py-4"
            >
              <p>
                <Link
                  to={`/community/${community.url}`}
                  className="mx-1 font-bold text-zinc-200 hover:underline"
                >
                  {community.name}
                </Link>
                <span className="ml-4 text-sm font-light text-zinc-400">
                  Users: {community.userCount}
                </span>
              </p>
              <div className="my-2 border-t border-zinc-400" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

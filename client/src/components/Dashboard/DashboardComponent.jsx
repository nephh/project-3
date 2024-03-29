import React from "react";
import { Link } from "react-router-dom";

export default function DashboardComponent({ endeavor, index }) {
  return (
    <div
      key={index}
      className="mb-4 flex flex-col w-full text-center md:text-left md:flex-row items-center rounded-lg bg-zinc-900 bg-opacity-75 py-6 px-8 shadow-md"
    >
      <Link to={`/community/${endeavor.communityUrl}/${endeavor._id}`}>
        <img
          className="flex my-4 md:mr-8 h-32 w-32 items-center justify-center rounded-full object-cover"
          src={`images/${endeavor.image}`}
          alt="endeavor"
        />
      </Link>
      <div className="w-10/12">
        <div className="flex items-center md:justify-between justify-center">
          <span className="font-light text-zinc-400">{endeavor.community}</span>
        </div>
        <div className="mt-2">
          <Link
            to={`/community/${endeavor.communityUrl}/${endeavor._id}`}
            className="text-2xl font-bold text-zinc-200 hover:underline"
          >
            {endeavor.title}
          </Link>
          <p className="mt-2 overflow-hidden text-ellipsis text-zinc-300">
            {endeavor.content}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-zinc-400">
            Users: <span className="font-semibold">{endeavor.userCount}</span>
          </p>
          <div>
            <h1 className="font-bold text-zinc-400 hover:underline">
              Author: {endeavor.author}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

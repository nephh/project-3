import React from "react";

export default function DashboardCommunities({ communities }) {
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-zinc-200">Your Communities</h1>
      <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-zinc-900 px-4 py-6 shadow-md">
        <ul>
          {communities.map((item, index) => (
            <li key={index} className="flex items-center">
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold text-zinc-200 hover:underline"
                >
                  {item.name}
                </a>
                <span className="ml-4 text-sm font-light text-zinc-400">
                  Users: {item.users}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

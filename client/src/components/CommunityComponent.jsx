import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function CommunityComponent({ community, index, join }) {
  let user;
  if (Auth.loggedIn()) {
    user = Auth.getUserInfo()?.data.username;
  }

  const [check, setCheck] = useState(
    community.users.some((item) => item.username === user),
  );

  const handleClick = async (e, id) => {
    e.preventDefault();
    join(id, user);
    setCheck(true);
  };

  return (
    <div className="mb-4 w-full rounded-lg bg-zinc-900 px-10 py-6 shadow-md">
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <Link
            to={`/community/${community.url}`}
            className="text-2xl font-bold text-zinc-200 hover:underline"
          >
            {community.name}
          </Link>

          {Auth.loggedIn() && (
            <button
              onClick={(e) => handleClick(e, community._id)}
              className="mt-1 px-4 py-2 text-xs font-semibold text-zinc-300 text-opacity-50"
              value={community._id}
            >
              {check ? "Community Joined!" : "Join Community"}
            </button>
          )}
        </div>
        <p className="mt-2 overflow-hidden text-ellipsis text-zinc-300">
          {community.description}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-zinc-400">
          Users: <span className="font-semibold">{community.userCount}</span>
        </p>
        <div>
          <h1 className="font-bold text-zinc-400 hover:underline">
            Creator: {community.creator}
          </h1>
        </div>
      </div>
    </div>
  );
}

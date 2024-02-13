import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

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
    <div className="mb-4 flex w-full flex-col justify-between rounded-lg bg-zinc-900 bg-opacity-75 px-10 py-6 shadow-md">
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <Link
            to={`/community/${community.url}`}
            className="text-2xl font-bold text-zinc-200 hover:underline"
          >
            {community.name}
          </Link>

          {Auth.loggedIn() && (
            <div>
              {check ? (
                <p className="mt-1 px-4 py-2 text-xs font-semibold text-zinc-300 text-opacity-50">
                  Community Joined!
                </p>
              ) : (
                <button
                  onClick={(e) => handleClick(e, community._id)}
                  className="mt-1 px-4 py-2 text-xs font-semibold text-zinc-300 text-opacity-50 hover:text-zinc-200"
                  value={community._id}
                >
                  Join Community
                </button>
              )}
            </div>
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
        <p className="text-zinc-400">
          Endeavors:{" "}
          <span className="font-semibold">{community.endeavorCount}</span>
        </p>
        <div>
          <h1 className="text-zinc-400">
            Creator: <span className="font-semibold">{community.creator}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

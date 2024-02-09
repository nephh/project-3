import { Link } from "react-router-dom";

export default function CommunityList({ communities, sort }) {
  return (
    <>
      <div className="flex w-10/12 flex-col">
        <h1 className="mb-4 text-center text-xl font-bold text-zinc-200">
          Find your new favorite community and start an Endeavor!
        </h1>
        <div>
          {/* <button
        onClick={handleSortByRecent}
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Sort by Recent
      </button> */}
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
        </div>
        {communities.map((community, index) => (
          <div
            key={index}
            className="mb-4 w-full rounded-lg bg-zinc-900 px-10 py-6 shadow-md"
          >
            {/* <div className="flex items-center justify-between">
              <span className="font-light text-zinc-400">
                {community.name}
              </span>
            </div> */}
            <div className="mt-2">
              <Link
                to={`/community/${community.url}`}
                className="text-2xl font-bold text-zinc-200 hover:underline"
              >
                {community.name}
              </Link>
              <p className="mt-2 overflow-hidden text-ellipsis text-zinc-300">
                {community.description}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-zinc-400">
                Users:{" "}
                <span className="font-semibold">{community.userCount}</span>
              </p>
              <div>
                <h1 className="font-bold text-zinc-400 hover:underline">
                  Creator: {community.creator}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

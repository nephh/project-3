import { Link } from "react-router-dom";

export default function DashboardList({ endeavors, sort }) {
  return (
    <>
      <div className="flex w-8/12 flex-col mx-auto md:mx-5">
        <h1 className="mb-4 text-xl font-bold text-zinc-200">
          Recent Endeavors
        </h1>
        <div>
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
        {endeavors.map((endeavor, index) => (
          <div
            key={index}
            className="mb-4 w-full rounded-lg bg-zinc-900 px-10 py-6 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-light text-zinc-400">
                {endeavor.community}
              </span>
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
                Users:{" "}
                <span className="font-semibold">{endeavor.userCount}</span>
              </p>
              <div>
                <h1 className="font-bold text-zinc-400 hover:underline">
                  Author: {endeavor.author}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

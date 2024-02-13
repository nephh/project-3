import { Link } from "react-router-dom";
import DashboardComponent from "./DashboardComponent";

export default function DashboardList({ endeavors, sort }) {
  return (
    <>
      <div className="mx-auto flex w-11/12 md:w-8/12 flex-col md:mx-5">
        <h1 className="mb-4 ml-4 flex justify-center text-3xl font-bold text-zinc-200 md:mb-2 md:justify-start">
          All Endeavors
        </h1>
        <div className="mb-2">
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
          |
          <button
            onClick={() => sort("newest")}
            className="px-4 py-2 text-sm text-zinc-300"
          >
            Newest
          </button>
        </div>
        {endeavors.map((endeavor, index) => (
          <DashboardComponent key={index} endeavor={endeavor} />
        ))}
      </div>
    </>
  );
}

import { useQuery } from "@apollo/client";
import DashboardCommunities from "../components/Dashboard/DashboardCommunities";
import DashboardList from "../components/Dashboard/DashboardList";
import { DASHBOARD_QUERY } from "../utils/queries";
import Auth from "../utils/auth";
import { useState } from "react";

export default function Dashboard() {
  if (!Auth.loggedIn()) {
    window.location.assign("/login");
  }
  const [sort, setSort] = useState("");
  const [mobile, setMobile] = useState(false);
  const { data: user } = Auth.getUserInfo();
  const { loading, data } = useQuery(DASHBOARD_QUERY, {
    variables: { username: user.username, sort: sort },
  });

  const endeavors = data?.endeavors || [];
  const communities = data?.user.communities || [];

  console.log(mobile);
  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-6 font-bold text-zinc-200 md:text-5xl">
        Welcome {user.username}!
      </h2>
      {loading && (
        <div className="mt-12 flex h-screen justify-center text-4xl font-bold">
          Loading...
        </div>
      )}
      <div className="mt-4 flex flex-col md:flex-row md:justify-evenly">
        <DashboardList endeavors={endeavors} sort={setSort} />
        <DashboardCommunities communities={communities} mobile={mobile} />
      </div>
      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        className="fixed bottom-20 bg-gray-900 right-6 inline-flex h-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-gray-200 md:hidden"
        aria-controls="navbar-cta"
        aria-expanded="false"
        onClick={() => setMobile(!mobile)}
      >
        <span className="font-semibold">View your communities</span>
      </button>
    </div>
  );
}

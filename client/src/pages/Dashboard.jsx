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
  const { data: user } = Auth.getUserInfo();
  const { loading, data } = useQuery(DASHBOARD_QUERY, {
    variables: { username: user.username, sort: sort },
  });

  const endeavors = data?.endeavors || [];
  const communities = data?.user.communities || [];

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-6 text-5xl font-bold text-zinc-200">
        Welcome {user.username}!
      </h2>
      {loading && (
        <div className="mt-12 flex h-screen justify-center text-4xl font-bold">
          Loading...
        </div>
      )}
      <div className="mt-4 flex flex-col md:flex-row md:justify-evenly">
        <DashboardList endeavors={endeavors} sort={setSort} />
        <DashboardCommunities communities={communities} sort={setSort} />
      </div>
    </div>
  );
}

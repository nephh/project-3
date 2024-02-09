import { useQuery } from "@apollo/client";
import DashboardCommunities from "../components/DashboardCommunities";
import DashboardList from "../components/DashboardList";
import { DASHBOARD_QUERY } from "../utils/queries";
import Auth from "../utils/auth";
import { useState } from "react";

export default function Dashboard() {
  const [sort, setSort] = useState("");
  const { data: user } = Auth.getUserInfo();
  const { loading, data } = useQuery(DASHBOARD_QUERY, {
    variables: { username: user.username, sort: sort },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const endeavors = data?.endeavors || [];
  const communities = data?.user.communities || [];

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-4 text-5xl font-bold text-zinc-200">
        Welcome {user.username}!
      </h2>

      <div className="mt-4 flex flex-row justify-evenly">
        <DashboardList endeavors={endeavors} sort={setSort} />
        <DashboardCommunities communities={communities} />
      </div>
    </div>
  );
}

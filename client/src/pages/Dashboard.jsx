import { useQuery } from "@apollo/client";
import DashboardCommunities from "../components/DashboardCommunities";
import DashboardList from "../components/DashboardList";
import { QUERY_COMMUNITIES, QUERY_ENDEAVORS } from "../utils/queries";
import Auth from "../utils/auth";

export default function Dashboard() {
  const { loading, data } = useQuery(QUERY_ENDEAVORS);
  const { loading: cloading, data: communityData } =
    useQuery(QUERY_COMMUNITIES);

  if (loading || cloading) {
    return <div>Loading...</div>;
  }

  const endeavors = data?.endeavors || [];
  const communities = communityData?.communities || [];
  const { data: user } = Auth.getUserInfo();

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-4 text-5xl font-bold text-zinc-200">
        Welcome {user.username}!
      </h2>
      <div className="mt-4 flex flex-row justify-evenly">
        <DashboardList endeavors={endeavors} />
        <DashboardCommunities communities={communities} />
      </div>
    </div>
  );
}

import { useQuery } from "@apollo/client";
import DashboardCommunities from "../components/DashboardCommunities";
import DashboardList from "../components/DashboardList";
import { QUERY_COMMUNITIES, QUERY_ENDEAVORS } from "../utils/queries";

export default function Dashboard() {
  const { loading, data } = useQuery(QUERY_ENDEAVORS);
  const { loading: cloading, data: communityData } =
    useQuery(QUERY_COMMUNITIES);

  if (loading || cloading) {
    return <div>Loading...</div>;
  }

  const endeavors = data?.endeavors || [];
  const communities = communityData?.communities || [];

  return (
    <div className="mt-4 flex flex-row justify-evenly">
      <DashboardList endeavors={endeavors} />
      <DashboardCommunities communities={communities} />
    </div>
  );
}

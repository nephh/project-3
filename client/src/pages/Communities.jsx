import { useQuery } from "@apollo/client";
import { useState } from "react";
import { QUERY_COMMUNITIES } from "../utils/queries";
import CommunityList from "../components/CommunityList";
import Auth from "../utils/auth";

export default function Dashboard() {
  const [sort, setSort] = useState("");
  const { data: user } = Auth.getUserInfo();
  const { loading, data } = useQuery(QUERY_COMMUNITIES, {
    variables: { sort: sort },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const communities = data?.communities || [];

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-4 text-5xl font-bold text-zinc-200">
        Welcome {user.username}!
      </h2>

      <div className="mt-4 flex flex-row justify-evenly">
        <CommunityList communities={communities} sort={setSort} />
      </div>
    </div>
  );
}

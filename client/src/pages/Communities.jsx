import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { DASHBOARD_QUERY, QUERY_COMMUNITIES } from "../utils/queries";
import { JOIN_COMMUNITY } from "../utils/mutations";
import CommunityList from "../components/CommunityList";
import Auth from "../utils/auth";

export default function Communities() {
  let user;
  if (Auth.loggedIn()) {
    user = Auth.getUserInfo()?.data.username;
  }
  const [sort, setSort] = useState("");
  const { loading, data } = useQuery(QUERY_COMMUNITIES, {
    variables: { sort: sort },
  });

  const [joinCommunity, { error }] = useMutation(JOIN_COMMUNITY, {
    refetchQueries: [
      { query: DASHBOARD_QUERY, variables: { username: user, sort } },
    ],
  });

  async function onJoin(communityId) {
    try {
      const { data } = await joinCommunity({
        variables: { communityId: communityId },
      });
      return data;
    } catch (e) {
      console.error(e);
      console.log(error);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const communities = data?.communities || [];

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-4 text-5xl font-bold text-zinc-200">
        {/* Welcome {user.username}! */}
      </h2>

      <div className="mt-4 flex flex-row justify-evenly">
        <CommunityList communities={communities} sort={setSort} join={onJoin} />
      </div>
    </div>
  );
}

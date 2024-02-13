import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { DASHBOARD_QUERY, QUERY_COMMUNITIES } from "../utils/queries";
import { JOIN_COMMUNITY } from "../utils/mutations";
import CommunityList from "../components/CommunityPage/CommunityList";
import Auth from "../utils/auth";

let user;
if (Auth.loggedIn()) {
  user = Auth.getUserInfo()?.data.username;
}

export default function Communities() {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  const { loading, data } = useQuery(QUERY_COMMUNITIES, {
    variables: { sort: sort },
  });

  const [joinCommunity, { error }] = useMutation(JOIN_COMMUNITY, {
    refetchQueries: [
      { query: DASHBOARD_QUERY, variables: { username: user, sort } },
      { query: QUERY_COMMUNITIES, variables: { sort: sort } },
    ],
  });

  // useEffect(() => {
  //   const { data } = useQuery(QUERY_COMMUNITIES, {
  //     variables: { name: search, sort: sort },
  //   });
  // }, [search, sort]);

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

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const communities = data?.communities || [];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="mt-6 text-5xl font-bold text-zinc-200">Communities</h2>
        <p className="mb-8 mt-4 px-2 text-center text-xl font-bold text-zinc-200">
          Find your new favorite community and start an Endeavor!
        </p>{" "}
        {loading && (
          <div className="mt-12 flex h-screen justify-center text-4xl font-bold">
            Loading...
          </div>
        )}
      </div>
      <div className="mt-4 flex flex-row justify-evenly">
        <CommunityList communities={communities} sort={setSort} join={onJoin} />
      </div>
    </div>
  );
}

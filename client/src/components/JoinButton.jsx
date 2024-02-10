import { useState } from "react";

export default function JoinButton({ communityId, user, join, users }) {
  const [check, setCheck] = useState(
    users.some((item) => item.username === user),
  );

  const handleClick = async (e, id) => {
    e.preventDefault();
    join(id, user);
    setCheck(true);
  };

  return (
    <button
      onClick={(e) => handleClick(e, communityId)}
      className="mt-1 px-4 py-2 text-xs font-semibold text-zinc-300 text-opacity-50"
      value={communityId}
    >
      {check ? "Community Joined!" : "Join Community"}
    </button>
  );
}

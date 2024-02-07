import React from "react";
import DashboardList from "../components/DashboardList";
import DashboardCommunities from "../components/DashboardCommunities";

const data = [
  {
    community: "Music",
    author: "neph",
    title: "cool music",
    content: "some content",
    users: 10,
  },
  {
    community: "Clemmie Marline",
    author: "neph",
    title: "sggsE7cS",
    content: "some content",
    users: 63,
  },
  {
    community: "Rivi Andi",
    author: "neph",
    title: "4YfmKstSY",
    content: "some content",
    users: 11,
  },
  {
    community: "Idelle Bria",
    author: "neph",
    title: "5qWYzKoB",
    content: "some content",
    users: 56,
  },
];

const comData = [
  {
    name: "Music",
    users: 10,
  },
  {
    name: "Games",
    users: 20,
  },
  {
    name: "Monster Hunter",
    users: 200,
  },
];

export default function Dashboard() {
  return (
    <div className="mt-4 flex flex-row justify-evenly">
      <DashboardList endeavors={data} />;
      <DashboardCommunities communities={comData} />
    </div>
  );
}

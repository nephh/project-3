import React from "react";
import DashboardList from "./DashboardList";

const data = [
  {
    community: "Music",
    author: "neph",
    title: "cool music",
    users: 10,
  },
  {
    community: "Clemmie Marline",
    author: "neph",
    title: "sggsE7cS",
    users: 63,
  },
  {
    community: "Rivi Andi",
    author: "neph",
    title: "4YfmKstSY",
    users: 11,
  },
  {
    community: "Idelle Bria",
    author: "neph",
    title: "5qWYzKoB",
    users: 56,
  },
];

export default function Dashboard() {
  return <DashboardList endeavors={data} />;
}

// "use client";
import MyAllBookings from "@/components/tables/MybookingsTable";
import { headers } from "next/headers";
import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

const fetchMyBookings = async () => {
  const res = await fetch(
    "https://car-doctor-nextjs-eight.vercel.app/api/service",
    {
      headers: new Headers(await headers()),
    }
  );
  const d = await res.json();
  //setData(d);
  return d;
};

export default async function MyBookingsPage() {
  const data = await fetchMyBookings();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetchMyBookings();
  // }, []);
  return (
    <div>
      <MyAllBookings data={data} />
    </div>
  );
}
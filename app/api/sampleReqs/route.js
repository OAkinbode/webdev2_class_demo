import { NextResponse } from "next/server";

export async function POST(req) {
  const request = await req.json();
  console.log("request:", request);
  const data = {
    name: "Bishal Shrestha",
    age: "27",
  };

  return NextResponse.json({ data });
}

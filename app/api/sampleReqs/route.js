import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const newAge = body.age + 1;
  const response = {
    ...body,
    age: newAge,
  };

  return NextResponse.json({ response });
}

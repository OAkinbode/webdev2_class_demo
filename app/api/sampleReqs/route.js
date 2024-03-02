import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const canModel = body.age < 25 ? true : false;
  const response = {
    ...body,
    canModel,
  };

  return NextResponse.json({ response });
}

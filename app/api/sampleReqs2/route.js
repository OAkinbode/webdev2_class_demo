import { NextResponse } from "next/server";

export async function POST(req) {
  const body = req.body;

  const postSecret = "";

  return NextResponse.json({ body });
}

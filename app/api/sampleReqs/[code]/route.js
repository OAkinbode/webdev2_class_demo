import { NextResponse } from "next/server";

export async function GET(req, { params: { code } }) {
  const secretCode = process.env.SECRET_CLASS_PASSCODE;
  return NextResponse.json({ secretCode });
}

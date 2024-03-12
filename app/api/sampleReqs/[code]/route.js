import { NextResponse } from "next/server";

export async function GET(req, { params: { code } }) {
  const secretCode =
    code === "ehen2rfow"
      ? process.env.SECRET_CLASS_PASSCODE
      : "You passcode is not correct";

  return NextResponse.json({ secretCode });
}

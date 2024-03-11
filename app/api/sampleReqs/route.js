import { NextResponse, runMiddleware } from "next/server";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Authorization", "Content-Type"],
  credentials: true,
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  const { headers } = req;

  // Get the Authorization header
  const authorizationHeader = headers.get("Authorization");

  // Check if the Authorization header is present
  if (!authorizationHeader) {
    return NextResponse.json(
      { error: "Missing Bearer token" },
      { status: 401 }
    );
  }

  // Check if the Authorization header starts with "Bearer "
  const tokenParts = authorizationHeader.split(" ");
  if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
    return NextResponse.json(
      { error: "Invalid Bearer token format" },
      { status: 401 }
    );
  }

  const bearerToken = tokenParts[1];

  console.log("bearer token: ", bearerToken);

  // Now you can use the bearerToken as needed
  // For example, you might want to validate it against some authentication logic

  const body = await req.json();
  const answer =
    bearerToken === "08h0c7ntyQo3P4yu30hvc0293hnvidhhn3iagarg4a4"
      ? "AnswerCode0928473"
      : "";
  const response = {
    ...body,
    answer,
  };

  return NextResponse.json({ response });
}

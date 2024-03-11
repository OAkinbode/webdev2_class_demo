import Cors from "cors";
import { runMiddleware, NextResponse } from "next/server";

const cors = Cors({
  origin: "http://localhost:3000",
  methods: ["POST", "OPTIONS"], // Add other methods if needed
  allowedHeaders: ["Content-Type", "Authorization"],
});

export default async function handler(req, res) {
  // Run CORS middleware
  await runMiddleware(req, res, cors);

  if (req.method === "OPTIONS") {
    // Preflight request response
    return NextResponse.empty();
  }

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

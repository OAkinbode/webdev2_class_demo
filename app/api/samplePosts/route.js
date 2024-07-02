export async function GET() {
  return new Response("Hello, world!");
}

export async function POST(request) {
  const newUser = await request.json();

  // store in database
  // ...
  // update id
  newUser.id = 4;

  return new Response(JSON.stringify(newUser), { status: 201 });
}

//https://nextjs.org/docs/app/building-your-application/routing/route-handlers
export async function POST(request: Request) {
  const res = await request.json()
  console.log(res);
  return Response.json({ res })
}
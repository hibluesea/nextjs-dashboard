import {NextRequest} from "next/server";

export async function GET(request:NextRequest) {

  //const data = await res.json()
  //console.log(request);
  const searchParams = request.nextUrl.searchParams;
  const foo = searchParams.get('foo');
  console.log(foo);
  const data = {hello:"world"};

  return Response.json(data)
}
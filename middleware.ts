import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse, NextRequest } from 'next/server'

// export default NextAuth(authConfig).auth;

// export default function temp(res:NextRequest){
//     console.log(12344555);
//     console.log(res)
// }


export function middleware(request: NextRequest) {
    // play
      console.log('i am in middleware');
      //console.log(request);

  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get('nextjs')
  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  // const allCookies = request.cookies.getAll()
  // console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
  //
  // request.cookies.has('nextjs') // => true
  // request.cookies.delete('nextjs')
  // request.cookies.has('nextjs') // => false

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next()
  //response.cookies.set('vercel', 'fast')
  // response.cookies.set({
  //   name: 'nextjs',
  //   value: 'fast',
  //   path: '/',
  // })
  //cookie = response.cookies.get('vercel')
  //console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/` header.
  return response
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
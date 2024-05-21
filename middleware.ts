import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse, NextRequest } from 'next/server'


// export default NextAuth(authConfig).auth;

// export default function temp(res:NextRequest){
//     console.log(12344555);
//     console.log(res)
// }


export function middleware(request: NextRequest) {
  
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
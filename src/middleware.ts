import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";



export default function middleware(req: NextRequest) {
    const { cookies } = req
    const token: any = cookies.get('token')
    const url = req.url;
    const secret: any = process.env.SECRET_JWT_KEY
    const urlArray = url.split('/')

    // const verification = jwt.verify('eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDU2MDI5M2YwNDdlMTM2NDEwZDA3OTMiLCJuYW1lIjoiTmFzaWYiLCJlbWFpbCI6Im5hc2lmcGU3N0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRDTXlIa3NMWWp4bW1ua2FJVC9wM2d1aWsxSk9tZXJFT3BGemhVd3M4UzBqVFNpNEdhbFB3UyIsImNvbnRhY3QiOjk4MDk3OTIwNzUsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMDZUMDc6MzI6MzUuMzQ2WiIsIl9fdiI6MH0.0K9TR0RH7edOapIP2IRkgsxhmbVEB3QUw4IFswleMd0', '73c5471ea4653be2f43da62563a1c9b44d1b98ef46a4cf0170ccee2a04134795')

    // console.log(verification)

    // if (urlArray[3] === 'auth' && urlArray[4] === 'login') {
    //     console.log(token)
    //     if (token === undefined) {
    //         console.log('first')
    //         return
    //     }
    //     try {
    //         const verification = jwt.verify(token, secret)
    //         console.log(verification)
    //         return NextResponse.redirect(new URL('/user', req.url))
    //     } catch (error) {
    //         return

    //     }
    // }

    return NextResponse.next()
}
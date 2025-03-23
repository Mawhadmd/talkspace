import { NextRequest, NextResponse } from "next/server";
export async function POST(req:NextRequest) {
    console.log('received POST request', req.body);
    return NextResponse.redirect('http://localhost:3000/Support');
}
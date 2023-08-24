import { NextRequest, NextResponse } from "next/server";
import { db } from '@vercel/postgres'

export async function GET(request: NextRequest){
    const client = await db.connect();

    try{

    }catch(err){
        console.log(err)
        NextResponse.json({message: "Error"})
    }

    return NextResponse.json({ message: "Hello Api"})
}
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cartTable, db } from '@/lib/drizzle'
import { sql } from "@vercel/postgres";

export const GET = async (request: NextRequest) => {
  try {
    await sql`CREATE TABLE IF NOT EXISTS cart(id serial, user_id varchar(255), product_id varchar(255), name varchar(255), category varchar(255), price varchar(255), image varchar(255))`;
    const res = await db.select().from(cartTable);
    // console.log(res);
    return NextResponse.json({
      success: "Record Fetched successfully",
      data: res,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
    await sql`CREATE TABLE IF NOT EXISTS cart(id serial, user_id varchar(255), product_id varchar(255), name varchar(255), category varchar(255), price varchar(255), image varchar(255))`;
  const uid = uuid();
  const user_id = cookies().get("user_id");
  const setCookies = cookies();
  if (!user_id) {
    setCookies.set("user_id", uid);
  }
  // console.log(req)
  try {
    if (
      req.user_id ||
      req.product_id ||
      req.name ||
      req.image ||
      req.category ||
      req.price
    ) {
    
      const res = await db
        .insert(cartTable)
        .values({
          user_id: cookies().get("user_id")?.value as string,
          product_id: req._id,
          name: req.name,
          image: req.image,
          category: req.category,
          price: req.price,
        })
        .returning();
      return NextResponse.json({
        success: "Cart Added Successfully",
        data: res,
      });
    
  }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
};

export const DELETE= async (req: NextRequest)=>{
  try {
    const res= await db.delete(cartTable).execute();
    return NextResponse.json({
      success: "All records deleted successfully",
  data:res
    })
  } catch (error) {
    console.log(error)
  }
}
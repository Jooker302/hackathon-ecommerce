import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { cartTable, db } from '@/lib/drizzle'
import { sql } from "@vercel/postgres";

export const GET = async (request) => {
  try {
    const uid = uuid();
  const user_id = cookies().get("user_id");
  const setCookies = cookies();
  if (!user_id) {
    setCookies.set("user_id", uid);
  }
    await sql`CREATE TABLE IF NOT EXISTS cart(id serial, user_id varchar(255), product_id varchar(255), name varchar(255), category varchar(255), price varchar(255), image varchar(255))`;
    const res = await db.select().from(cartTable)
    // res.filter
    // console.log(user_id)
    // console.log(cookies().get("user_id"))
    // console.log(filteredResults);
    const filteredResults = res.filter(item => item.user_id === user_id.value);
    // console.log(filteredResults);
    // console.log(res);
    return NextResponse.json({
      success: "Record Fetched successfully",
      data: filteredResults,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
};

export const POST = async (request) => {
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
          user_id: cookies().get("user_id")?.value,
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

export const DELETE= async (req)=>{
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
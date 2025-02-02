import posts from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  console.log(body)

  try {
    await connect();
    await posts.create(body);
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

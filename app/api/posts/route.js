import posts from "@/models/Post";
import connect from "@/utils/db";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function GET(request) {

  const url = new URL(request.url)
  const username = url.searchParams.get("username")

  try {
    await connect()
    const postss = await posts.find(username && {username})
    return new NextResponse(JSON.stringify(postss), { status: 200 })
  }
  catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}

export async function POST (request) {
  const body = await request.json();
  const { title, description, img, content } = body
  const newPost = new posts({
    title, description, img, content, username
  });

  try {
    await connect();
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

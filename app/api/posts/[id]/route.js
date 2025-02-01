import posts from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
  const {id} = params
  try {
    await connect()
    const post = await posts.findById(id)
    return NextResponse.json(post, { status : 200 }) 
  }
   catch (error) {
    return new NextResponse('Database error', { status : 500 })
  }
}

export async function DELETE(request, {params}) {
  const {id} = params
  try {
    await connect()
    await posts.findByIdAndDelete(id)
  }
  catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}

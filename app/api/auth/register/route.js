import user from "@/models/user";
import connect from "@/utils/db";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, password } = await request.json()
  // console.log(name, email, password)
  await connect()
  const hashedPassword = await bcrypt.hash(password, 5)
  const res = await user.create({ name, email, password:hashedPassword })

  try {
    return new NextResponse(res, {
      status: 201
    })
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500
    })
  }
}
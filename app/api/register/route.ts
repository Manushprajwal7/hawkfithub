import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const userData = await request.json()
    // In a real application, you would save this data to a database
    // For now, we'll just log it and return a success response
    console.log("User registration data:", userData)

    return NextResponse.json({ success: true, message: "Registration successful" })
  } catch (error) {
    console.error("Error in registration:", error)
    return NextResponse.json({ success: false, error: "Registration failed" }, { status: 500 })
  }
}


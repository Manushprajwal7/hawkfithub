import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function POST(request: Request) {
  try {
    const { id } = await request.json()
    const client = await clientPromise
    const db = client.db("hawk_fit_hub")

    const result = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: { paymentStatus: "completed" } })

    if (result.modifiedCount === 1) {
      return NextResponse.json({ success: true, message: "Payment processed successfully" })
    } else {
      return NextResponse.json(
        { success: false, error: "User not found or payment already processed" },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Error processing payment:", error)
    return NextResponse.json({ success: false, error: "Payment processing failed" }, { status: 500 })
  }
}


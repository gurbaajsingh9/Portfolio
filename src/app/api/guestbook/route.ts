import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// List all guestbook entries
export async function GET() {
    return NextResponse.json({ success: true, data: [], message: "Entries fetched successfully" });
}

// Add a new entry
export async function POST(req: Request) {
    return NextResponse.json({ success: false, message: "Guestbook disabled" }, { status: 403 });
}

// Remove an entry
export async function DELETE(req: Request) {
    return NextResponse.json({ success: false, message: "Guestbook disabled" }, { status: 403 });
}
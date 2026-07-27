import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

//  Fetch all todos
export async function GET() {
    return NextResponse.json({ success: true, data: [] });
}

//  Create new todo
export async function POST(req: NextRequest) {
    return NextResponse.json({ success: false, message: "Todo disabled" }, { status: 403 });
}

//  Update todo
export async function PATCH(req: NextRequest) {
    return NextResponse.json({ success: false, message: "Todo disabled" }, { status: 403 });
}

// Delete todo 
export async function DELETE(req: NextRequest) {
    return NextResponse.json({ success: false, message: "Todo disabled" }, { status: 403 });
}
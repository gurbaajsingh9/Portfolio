import { NextResponse } from "next/server";

//  Fetch all todos
export async function GET() {
    return NextResponse.json({ success: true, data: [] });
}

//  Create new todo
export async function POST() {
    return NextResponse.json({ success: false, message: "Todo disabled" }, { status: 403 });
}

//  Update todo
export async function PATCH() {
    return NextResponse.json({ success: false, message: "Todo disabled" }, { status: 403 });
}

// Delete todo 
export async function DELETE() {
    return NextResponse.json({ success: false, message: "Todo disabled" }, { status: 403 });
}
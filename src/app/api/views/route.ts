import { NextResponse } from "next/server";

export const cache = "no-cache"
export const revalidate = 0

export async function GET() {
    // Return dummy data since Umami analytics are disabled
    return NextResponse.json({ success: true, data: { pageviews: { value: 0 } } });
}

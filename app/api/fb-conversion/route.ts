import { NextRequest, NextResponse } from "next/server";
import { sendFbConversionEvent } from "@/libs/fbConversionApi";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const clientIp =
            req.headers.get("x-forwarded-for")?.split(",")[0] ||
            req.headers.get("x-real-ip") ||
            "";
        const userAgent = req.headers.get("user-agent") || "";

        const result = await sendFbConversionEvent({
            eventName: body.eventName,
            eventSourceUrl: body.eventSourceUrl,
            eventId: body.eventId,
            email: body.email,
            phone: body.phone,
            firstName: body.firstName,   // 👈 add
            lastName: body.lastName,     // 👈 add
            fbp: body.fbp,
            fbc: body.fbc,
            customData: body.customData,
            clientIp,
            userAgent,
        });

        return NextResponse.json(result);
    } catch (err) {
        console.error("CAPI route error:", err);
        return NextResponse.json({ error: "CAPI failed" }, { status: 500 });
    }
}
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const FB_PIXEL_ID = process.env.FB_PIXEL_ID!; // server-only, no NEXT_PUBLIC
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN!;
const FB_API_VERSION = "v20.0";

function hash(value: string) {
    return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const clientIp =
            req.headers.get("x-forwarded-for")?.split(",")[0] ||
            req.headers.get("x-real-ip") ||
            "";
        const userAgent = req.headers.get("user-agent") || "";

        const payload = {
            data: [
                {
                    event_name: body.eventName,
                    event_time: Math.floor(Date.now() / 1000),
                    event_id: body.eventId,
                    event_source_url: body.eventSourceUrl,
                    action_source: "website",
                    user_data: {
                        em: body.email ? [hash(body.email)] : undefined,
                        ph: body.phone ? [hash(body.phone.replace(/\D/g, ""))] : undefined,
                        client_ip_address: clientIp,
                        client_user_agent: userAgent,
                        fbp: body.fbp,
                        fbc: body.fbc,
                    },
                    custom_data: body.customData, 
                },
            ],
        };

        const res = await fetch(
            `https://graph.facebook.com/${FB_API_VERSION}/${FB_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            }
        );

        const result = await res.json();
        if (!res.ok) {
            console.error("FB CAPI error:", result);
            return NextResponse.json({ error: result }, { status: 500 });
        }

        return NextResponse.json(result);
    } catch (err) {
        console.error("CAPI route error:", err);
        return NextResponse.json({ error: "CAPI failed" }, { status: 500 });
    }
}
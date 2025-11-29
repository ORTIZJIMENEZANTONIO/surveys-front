import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await context.params; // 👈 Next 16 lo envía como Promise

  try {
    const url = slug.join("/");
    const target = `${process.env.NEXT_PUBLIC_API_URL}/${url}`;

    const upstreamRes = await fetch(target, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const text = await upstreamRes.text();

    return new Response(text, {
      status: upstreamRes.status,
      headers: {
        "Content-Type":
          upstreamRes.headers.get("content-type") ||
          "application/json; charset=utf-8",
      },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || "Internal Server Error" }),
      { status: 500 }
    );
  }
}

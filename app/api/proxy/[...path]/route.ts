import { NextRequest } from "next/server";

const proxyConfig = {
  back: {
    target: "http://operators-back-service",
    pathRewrite: { "^/back": "" },
  },
  "documents-back": {
    target: "http://documents-back-service",
    pathRewrite: { "^/documents-back": "" },
  },
  "assesment-form-back": {
    target: "http://localhost:4000",
    pathRewrite: { "^/assesment-form-back": "" },
  },
  "payments-back": {
    target: "http://payments-service",
    pathRewrite: { "^/payments-back": "" },
  },
  "mailer-back": {
    target: "http://mailer-service",
    pathRewrite: { "^/mailer-back": "" },
  },
};

function applyRewrite(url: string, rewrite?: Record<string, string>) {
  if (!rewrite) return url;
  let rewritten = url;
  for (const pattern in rewrite) {
    rewritten = rewritten.replace(new RegExp(pattern), rewrite[pattern]);
  }
  return rewritten;
}

export async function ALL(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  // ⬅ ESTA ES LA CORRECTA PARA NEXT 16 + TURBOPACK
  const { path } = await context.params;

  const prefix = path[0];
  const rest = "/" + path.slice(1).join("/");

  const cfg = proxyConfig[prefix];
  if (!cfg) return new Response("Proxy prefix not found", { status: 404 });

  const rewrittenPath = applyRewrite(`/${prefix}${rest}`, cfg.pathRewrite);
  const targetUrl = `${cfg.target}${rewrittenPath}`;

  let body = undefined;

  if (req.method !== "GET" && req.method !== "HEAD") {
    const ct = req.headers.get("content-type") || "";

    if (ct.includes("application/json")) {
      body = JSON.stringify(await req.json());
    } else if (ct.includes("multipart/form-data")) {
      body = req.body;
    } else {
      body = await req.text();
    }
  }

  const headers: Record<string, string> = {};
  req.headers.forEach((v, k) => {
    if (k !== "host") headers[k] = v;
  });

  console.log("🔵 PROXY REQUEST →", {
    from: req.url,
    to: targetUrl,
  });

  const response = await fetch(targetUrl, {
    method: req.method,
    headers,
    body,
    redirect: "follow",
  });

  const buffer = await response.arrayBuffer();

  console.log("🟢 PROXY RESPONSE ←", {
    status: response.status,
    url: targetUrl,
  });

  return new Response(buffer, {
    status: response.status,
    headers: response.headers,
  });
}

export { ALL as GET, ALL as POST, ALL as PUT, ALL as PATCH, ALL as DELETE };

import { NextRequest } from "next/server";
import { createProxyMiddleware } from "http-proxy-middleware";
import { NextApiRequest, NextApiResponse } from "next";

const proxyConfig: Record<string, any> = {
  "/back": {
    target: "http://operators-back-service",
    pathRewrite: { "^/api/proxy/back": "" },
    changeOrigin: true,
    prependPath: false,
  },
  "/documents-back": {
    target: "http://documents-back-service",
    pathRewrite: { "^/api/proxy/documents-back": "" },
    changeOrigin: false,
    prependPath: false,
  },
  "/assesment-form-back": {
    target: "http://assesment-back-v1-service",
    pathRewrite: { "^/api/proxy/assesment-form-back": "" },
    changeOrigin: false,
    prependPath: false,
  },
  "/payments-back": {
    target: "http://payments-service",
    pathRewrite: { "^/api/proxy/payments-back": "" },
    changeOrigin: false,
    prependPath: false,
  },
  "/mailer-back": {
    target: "http://mailer-service",
    pathRewrite: { "^/api/proxy/mailer-back": "" },
    changeOrigin: false,
    prependPath: false,
  },
};

// Convertimos la función al estilo Next (Node runtime)
export async function GET(request: NextRequest) {
  return handleProxy(request);
}

export async function POST(request: NextRequest) {
  return handleProxy(request);
}

export async function PUT(request: NextRequest) {
  return handleProxy(request);
}

export async function DELETE(request: NextRequest) {
  return handleProxy(request);
}

async function handleProxy(request: NextRequest) {
  const reqUrl = request.nextUrl.pathname.replace("/api/proxy", "");

  for (const context in proxyConfig) {
    if (reqUrl.startsWith(context)) {
      const options = proxyConfig[context];

      return new Promise((resolve) => {
        const proxy = createProxyMiddleware(options);

        const fakeReq = request as unknown as NextApiRequest;
        const fakeRes = {
          end: (data: any) => resolve(new Response(data)),
          write: (data: any) => resolve(new Response(data)),
          setHeader() {},
        } as unknown as NextApiResponse;

        proxy(fakeReq, fakeRes, () => resolve(new Response("OK")));
      });
    }
  }

  return new Response("No proxy match", { status: 404 });
}

import { NextResponse, type NextRequest } from "next/server";

/**
 * Temporary password gate for the whole site (HTTP Basic Auth).
 *
 * Set SITE_PASSWORD in the environment to lock the site; any username works.
 * Remove the variable (and redeploy) to open the site to everyone again.
 */
export function proxy(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) return NextResponse.next();

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const supplied = decoded.slice(decoded.indexOf(":") + 1);
      if (supplied === password) return NextResponse.next();
    } catch {
      // Malformed header: fall through to the challenge.
    }
  }

  return new NextResponse("This site is private for now.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Hooked on Tours (private preview)", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

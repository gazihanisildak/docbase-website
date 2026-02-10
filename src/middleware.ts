import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "de"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  // Check if locale is in cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("Accept-Language");
  if (acceptLanguage) {
    const browserLocales = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().substring(0, 2));

    for (const browserLocale of browserLocales) {
      if (locales.includes(browserLocale)) {
        return browserLocale;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal paths
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

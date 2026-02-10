"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  dict: {
    nav: {
      features: string;
      privacy: string;
      download: string;
    };
  };
  locale: string;
}

export function Header({ dict, locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(/^\/(en|de)/, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
    // Set cookie for persistence
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="font-bold text-xl">Docbase</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href={`/${locale}#features`}
              className="text-muted hover:text-foreground transition-colors"
            >
              {dict.nav.features}
            </Link>
            <Link
              href={`/${locale}/privacy`}
              className="text-muted hover:text-foreground transition-colors"
            >
              {dict.nav.privacy}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-border rounded-lg p-1">
              <button
                onClick={() => switchLocale("en")}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  locale === "en"
                    ? "bg-primary text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale("de")}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  locale === "de"
                    ? "bg-primary text-white"
                    : "text-muted hover:text-foreground"
                }`}
              >
                DE
              </button>
            </div>

            <a
              href="#download"
              className="px-4 py-2 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
            >
              {dict.nav.download}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href={`/${locale}#features`}
                className="text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dict.nav.features}
              </Link>
              <Link
                href={`/${locale}/privacy`}
                className="text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dict.nav.privacy}
              </Link>

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted">Language:</span>
                <div className="flex items-center gap-1 border border-border rounded-lg p-1">
                  <button
                    onClick={() => {
                      switchLocale("en");
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                      locale === "en"
                        ? "bg-primary text-white"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      switchLocale("de");
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                      locale === "de"
                        ? "bg-primary text-white"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    DE
                  </button>
                </div>
              </div>

              <a
                href="#download"
                className="px-4 py-2 rounded-lg gradient-bg text-white font-medium hover:opacity-90 transition-opacity text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dict.nav.download}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import Link from "next/link";

interface FooterProps {
  dict: {
    footer: {
      description: string;
      product: string;
      legal: string;
      terms: string;
      imprint: string;
      rights: string;
      madeIn: string;
    };
    nav: {
      features: string;
      privacy: string;
      download: string;
    };
  };
  locale: string;
}

export function Footer({ dict, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
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
            <p className="text-muted max-w-md">{dict.footer.description}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">{dict.footer.product}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}#features`}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {dict.nav.features}
                </Link>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {dict.nav.download}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">{dict.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {dict.nav.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  {dict.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; {currentYear} Docbase. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-muted text-sm flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {dict.footer.madeIn}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { brand, footerColumns } from "../data/site";

function IconInstagram(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFacebook(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-cream/80">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 text-cream">
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#BF5326" />
                <ellipse cx="16" cy="16" rx="9" ry="11" fill="#F7F2EA" />
                <path d="M16 5 C 13 11, 13 21, 16 27" stroke="#BF5326" strokeWidth="1.6" fill="none" />
              </svg>
              <span className="font-serif-heading text-2xl tracking-wide">DIEN3EAN</span>
            </Link>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-rust-light">
              {brand.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">{brand.heroDesc}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-rust hover:text-rust-light"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href={brand.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-rust hover:text-rust-light"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-cream">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-cream/60 transition-colors hover:text-rust-light">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DIEN3EAN COFFEE. Bản sắc Điện Biên, hương vị Tây Bắc.</p>
          <div className="flex gap-6">
            <span>{brand.email}</span>
            <span>{brand.hotline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

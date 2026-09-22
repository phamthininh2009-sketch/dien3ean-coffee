import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { nav } from "../data/site";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-coffee-dark/95 backdrop-blur shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-cream" onClick={() => setOpen(false)}>
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#BF5326" />
            <ellipse cx="16" cy="16" rx="9" ry="11" fill="#F7F2EA" />
            <path d="M16 5 C 13 11, 13 21, 16 27" stroke="#BF5326" strokeWidth="1.6" fill="none" />
          </svg>
          <span className="font-serif-heading text-xl tracking-wide">DIEN3EAN</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link text-[13px] font-medium uppercase tracking-[0.1em] transition-colors ${
                  isActive ? "text-rust-light" : "text-cream/80 hover:text-cream"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/lien-he" variant="primary">
            Liên hệ
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-coffee-dark px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-[0.1em] ${
                    isActive ? "bg-cream/10 text-rust-light" : "text-cream/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/lien-he"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-rust px-3 py-3 text-center text-sm font-semibold uppercase tracking-[0.1em] text-cream"
            >
              Liên hệ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

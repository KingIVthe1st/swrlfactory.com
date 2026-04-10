import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-swrl-black border-t border-swrl-white/10">
      {/* Franchise CTA Banner */}
      <div className="bg-gradient-to-r from-swrl-pink/20 via-swrl-pink/10 to-swrl-black border-b border-swrl-pink/20 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-2xl text-swrl-white">
              Own a SWRL™
            </h3>
            <p className="text-swrl-white/60 text-sm mt-1">
              Join the fastest-growing cinnamon roll franchise in the Southeast.
            </p>
          </div>
          <Link
            href="/franchise"
            className="bg-swrl-pink text-swrl-white font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-swrl-pink/40 hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Link href="/">
            <Image
              src="/images/swrl-logo.jpeg"
              alt="SWRL Cinnamon Roll Factory"
              width={120}
              height={50}
              className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-swrl-pink font-display font-bold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-swrl-white/60 hover:text-swrl-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-swrl-pink font-display font-bold text-sm uppercase tracking-widest mb-5">
              Contact & Hours
            </h4>
            <address className="not-italic text-swrl-white/60 text-sm space-y-2">
              <p>1234 Trade Street</p>
              <p>Charlotte, NC 28202</p>
              <p className="mt-3">
                <a
                  href="tel:+17045557975"
                  className="hover:text-swrl-white transition-colors"
                >
                  (704) 555-SWRL
                </a>
              </p>
            </address>
            <div className="mt-4 text-swrl-white/60 text-sm space-y-1">
              <p className="font-medium text-swrl-white/80">Hours</p>
              <p>Mon – Sat: 7AM – 9PM</p>
              <p>Sun: 8AM – 6PM</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-swrl-pink font-display font-bold text-sm uppercase tracking-widest mb-5">
              Follow Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://instagram.com/swrlfactory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-swrl-white/60 hover:text-swrl-white text-sm transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@swrlfactory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-swrl-white/60 hover:text-swrl-white text-sm transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
                  </svg>
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/swrlfactory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-swrl-white/60 hover:text-swrl-white text-sm transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-swrl-white/10 py-5 px-4">
        <p className="text-center text-swrl-white/40 text-xs">
          &copy; {new Date().getFullYear()} SWRL Cinnamon Roll Factory™. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/robotics", label: "Robotics" },
  { href: "/industrial-automation", label: "Automation" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="William Chen"
            width={240}
            height={80}
            className="h-10 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex gap-4 md:gap-6 text-sm">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "text-zinc-900 font-medium"
                    : "text-zinc-500 hover:text-zinc-900 transition"
                }
              >
                {label}
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}

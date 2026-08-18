"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

type NavItem = NavLink & {
  children?: NavLink[];
};

type NavbarProps = {
  sections?: NavLink[];
};

/* -------------------------------------------------------------
   Nav config — add or reorder projects here.
------------------------------------------------------------- */
const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/robotics",
    label: "Robotics",
    children: [
      { href: "/robotics/soft-gripper", label: "Soft Gripper Optimization" },
      {
        href: "/robotics/weed-management-robot",
        label: "Weed Management Robot",
      },
      { href: "/robotics/robot-cafe", label: "Autonomous Robot Café" },
    ],
  },
  {
    href: "/industrial-automation",
    label: "Automation",
    // Add project pages here as they go live, e.g.
    // children: [
    //   { href: "/industrial-automation/bun-inspection", label: "Vision-Based Quality Inspection" },
    // ],
  },
];

export default function Navbar({ sections }: NavbarProps) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  /* Close on route change */
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  /* Close on outside click and on Escape */
  useEffect(() => {
    function handlePointer(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="border-b border-zinc-200">
      <div
        ref={navRef}
        className="max-w-6xl mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between gap-4"
      >

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
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
        <div className="flex items-center gap-4 md:gap-6 text-sm">

          {/* Section anchors — homepage only */}
          {sections?.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hidden md:inline text-zinc-500 hover:text-zinc-900 transition"
            >
              {label}
            </a>
          ))}

          {NAV.map(({ href, label, children }) => {
            const active = isActive(href);

            if (!children) {
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-zinc-900 font-medium"
                      : "text-zinc-500 hover:text-zinc-900 transition"
                  }
                >
                  {label}
                </Link>
              );
            }

            const open = openMenu === label;

            return (
              <div key={href} className="relative">

                <button
                  type="button"
                  onClick={() => setOpenMenu(open ? null : label)}
                  aria-expanded={open}
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 ${
                    active
                      ? "text-zinc-900 font-medium"
                      : "text-zinc-500 hover:text-zinc-900 transition"
                  }`}
                >
                  {label}
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {open && (
                  <div className="absolute right-0 mt-3 w-64 rounded-xl border border-zinc-200 bg-white shadow-lg py-2 z-50">

                    <Link
                      href={href}
                      className="block px-4 py-2.5 text-zinc-900 font-medium hover:bg-zinc-50"
                    >
                      All {label}
                    </Link>

                    <div className="my-1 border-t border-zinc-100" />

                    {children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        aria-current={
                          pathname === child.href ? "page" : undefined
                        }
                        className={`block px-4 py-2.5 hover:bg-zinc-50 ${
                          pathname === child.href
                            ? "text-zinc-900 font-medium"
                            : "text-zinc-600"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </nav>
  );
}

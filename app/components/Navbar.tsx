import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="William Chen"
            width={240}
            height={80}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm">
          <Link
            href="/"
            className="hover:text-zinc-500"
          >
            Home
          </Link>

          <Link
            href="/robotics"
            className="hover:text-zinc-500"
          >
            Robotics
          </Link>

          <Link
            href="/industrial-automation"
            className="hover:text-zinc-500"
          >
            Industrial Automation
          </Link>
        </div>

      </div>
    </nav>
  );
}
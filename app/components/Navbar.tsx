import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">

        <Link
          href="/"
          className="text-xl font-bold"
        >
          William Chen
        </Link>

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
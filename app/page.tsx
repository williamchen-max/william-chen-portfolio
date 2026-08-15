import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div className="text-xl font-bold">
          William Chen
        </div>

        <div className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-zinc-500">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-500">
            Projects
          </a>
          <a href="#skills" className="hover:text-zinc-500">
            Skills
          </a>
          <a href="#contact" className="hover:text-zinc-500">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-32 pb-32">
        <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-6">
          Automation • Robotics • Industry 4.0
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
          William Chen
        </h1>

        <h2 className="text-2xl md:text-3xl text-zinc-500 mt-6">
          Automation & Robotics Engineer
        </h2>

        <p className="text-lg text-zinc-600 max-w-2xl mt-8 leading-8">
          I design, integrate, and commission industrial automation and
          robotic systems, combining controls engineering, machine vision,
          robotics, and software to build intelligent manufacturing solutions.
        </p>

        <div className="flex gap-4 mt-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-zinc-300 hover:bg-zinc-100"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-zinc-50 px-8 py-24"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold mt-4">
            What I Build
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {/* Robotics */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 hover:shadow-lg transition">
              <p className="text-sm text-zinc-500 mb-4">
                01 / ROBOTICS
              </p>

              <h3 className="text-3xl font-semibold">
                Robotics
              </h3>

              <p className="text-zinc-600 mt-4 leading-7">
                Robotic system integration, autonomous systems, robot
                programming, ROS integration, and human-robot collaboration.
              </p>

              <Link
                href="/robotics"
                className="inline-block mt-8 font-medium hover:underline"
              >
                Explore Robotics →
              </Link>
            </div>

            {/* Industrial Automation */}
            <div className="bg-white rounded-2xl p-8 border border-zinc-200 hover:shadow-lg transition">
              <p className="text-sm text-zinc-500 mb-4">
                02 / INDUSTRIAL AUTOMATION
              </p>

              <h3 className="text-3xl font-semibold">
                Industrial Automation
              </h3>

              <p className="text-zinc-600 mt-4 leading-7">
                PLC programming, machine vision, motion control, HMI,
                industrial networking, commissioning, and production systems.
              </p>

              <Link
                href="/industrial-automation"
                className="inline-block mt-8 font-medium hover:underline"
              >
                Explore Automation →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          About
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Engineering at the intersection of software and machines.
        </h2>

        <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
          My work focuses on developing and integrating intelligent
          manufacturing systems. I work across controls, robotics,
          machine vision, software, and industrial networks to turn
          engineering concepts into working production systems.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="bg-zinc-50 px-8 py-24"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Technical Skills
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div>
              <h3 className="font-semibold text-xl">
                Controls
              </h3>
              <p className="text-zinc-600 mt-3">
                PLC • HMI • VFD • Motion Control • PID • SCADA
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Robotics
              </h3>
              <p className="text-zinc-600 mt-3">
                ROS • Cobots • Robot Integration • Automation
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Vision & Software
              </h3>
              <p className="text-zinc-600 mt-3">
                Machine Vision • C# • .NET • Industrial Networking
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-8 py-24"
      >
        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Contact
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Let&apos;s build something.
        </h2>

        <p className="text-zinc-600 mt-6">
          Interested in working together or learning more about my projects?
        </p>

        <a
          href="mailto:william,weijen@gmail.com"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-black text-white"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-8 py-8">
        <div className="max-w-6xl mx-auto text-sm text-zinc-500">
          © 2026 William Chen. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
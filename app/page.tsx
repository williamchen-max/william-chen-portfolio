import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      <Navbar
        sections={[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-32 pb-32">
        <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-6">
          Mechanical Design • Robotics • Mechatronics
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
          William Chen
        </h1>

        <h2 className="text-2xl md:text-3xl text-zinc-500 mt-6">
          Mechanical &amp; Robotics Design Engineer
        </h2>

        <p className="text-lg text-zinc-600 max-w-2xl mt-8 leading-8">
          I design mechanisms for machines that physically handle things
          no two of which are alike — soft grippers, agricultural
          implements, food-processing systems. I started on the
          production floor building this kind of hardware, and I
          commission it on customer sites today. That&apos;s where I
          learned which designs survive and which ones only work in CAD.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-zinc-300 hover:bg-zinc-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-zinc-50 px-8 py-24">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            I learned what breaks before I learned how to draw it.
          </h2>

          <div className="max-w-3xl mt-10 space-y-6">

            <p className="text-lg text-zinc-600 leading-8">
              My dream of becoming a mechatronics engineer started in 8th
              grade. I saw the SFU Mechatronics logo and a live
              demonstration at the Surrey Central campus, and I was
              hooked. That spark sent me to study Physics at KPU, and
              eventually led me right back to that same SFU campus, where
              I earned my Master of Engineering in Industrial Automation.
            </p>

            <p className="text-lg text-zinc-600 leading-8">
              The route between those two points is the part that shaped
              how I design. I started as a production worker at Motion
              Metrics, building custom wiring and enclosures for mining
              equipment — hands on the hardware before I ever specified
              any of it. Today I&apos;m on the other end of that: I lead
              FAT, SAT, and commissioning on international deployments,
              watching the equipment I work on run in front of the
              customer. You learn very quickly which design decisions
              survive contact with the field and which ones only ever
              worked in CAD.
            </p>

            <p className="text-lg text-zinc-600 leading-8">
              My undergraduate capstone came from the same instinct. I
              inherited an abandoned six-wheel chassis and an Arduino left
              behind by previous students, and turned it into a machine
              that drove.
            </p>

            <p className="text-lg text-zinc-600 leading-8">
              Since then the work has kept circling one problem: machines
              that have to physically handle objects that refuse to be
              identical. A gripper light enough to swing on a harvesting
              arm but compliant enough not to bruise fruit. An implement
              that disturbs soil without damaging the crop next to it.
              R&amp;D vision systems — ToF, hyperspectral, thermal, RGB —
              for product that arrives in a different shape every unit.
              You can&apos;t tolerance your way out of that kind of
              variation; it has to be designed into the mechanism.
            </p>

            <p className="text-lg text-zinc-600 leading-8">
              When I&apos;m not building robots, you can find me out in the
              mountains skiing and hiking, or exploring the world in search
              of delicious food — especially anything from Japan.
            </p>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Technical Skills
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-10">

          <div>
            <h3 className="font-semibold text-xl">Mechanical Design</h3>
            <p className="text-zinc-600 mt-3 leading-7">
              SolidWorks • FEA • Topology Optimization • Design for 3D
              Printing • Mechanism &amp; Linkage Design
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Robotics</h3>
            <p className="text-zinc-600 mt-3 leading-7">
              ROS • End-Effectors • Mobile Robots • Cobots &amp; Humanoid
              Integration
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Controls &amp; Vision</h3>
            <p className="text-zinc-600 mt-3 leading-7">
              PLC • Ignition HMI • Motion Control • Multi-Modal Machine
              Vision • C# / .NET • FAT, SAT &amp; Commissioning
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-zinc-50 px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Machines that make contact.
          </h2>

          <p className="text-lg text-zinc-600 max-w-2xl mt-6 leading-8">
            Gripping fruit without bruising it, pulling a weed without
            damaging the crop beside it, grading product that arrives in
            a different shape every time — the same problem, at
            different scales.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            {/* Soft Gripper */}
            <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
              <div className="border-b border-zinc-200">
                <Image
                  src="/soft-gripper/gripper-final.png"
                  alt="Topology-optimized soft gripper finger"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              <div className="p-8">
                <p className="text-sm text-zinc-500 mb-4">
                  TOPOLOGY OPTIMIZATION / FEA
                </p>

                <h3 className="text-3xl font-semibold">
                  Soft Gripper Optimization
                </h3>

                <p className="text-zinc-600 mt-4 leading-7">
                  A compliant end-effector for fruit harvesting, taken
                  from 130 g to 71 g through iterative FEA — then
                  redrawn from the optimizer&apos;s raw output into
                  geometry that could actually be printed.
                </p>

                <Link
                  href="/robotics/soft-gripper"
                  className="inline-block mt-8 font-medium hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>

            {/* Weed Robot */}
            <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
              <div className="border-b border-zinc-200">
                <Image
                  src="/weed-robot/model.jpg"
                  alt="Autonomous weed management robot"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>

              <div className="p-8">
                <p className="text-sm text-zinc-500 mb-4">
                  MECHANISM DESIGN / 3D PRINTING
                </p>

                <h3 className="text-3xl font-semibold">
                  Weed Management Robot
                </h3>

                <p className="text-zinc-600 mt-4 leading-7">
                  A robot that pulls weeds mechanically instead of
                  spraying them. I designed the implement — a spring
                  tine on a servo-driven parallel lift, 15 printed
                  parts — and modified the chassis to carry it.
                </p>

                <Link
                  href="/robotics/weed-management-robot"
                  className="inline-block mt-8 font-medium hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>

          </div>

          {/* Secondary links */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">

            <div className="bg-white rounded-2xl p-8 border border-zinc-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">More Robotics</h3>
              <p className="text-zinc-600 mt-3 leading-7">
                Autonomous platforms, ROS integration, and the robot
                café project.
              </p>
              <Link
                href="/robotics"
                className="inline-block mt-6 font-medium hover:underline"
              >
                Explore Robotics →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-zinc-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Industrial Automation</h3>
              <p className="text-zinc-600 mt-3 leading-7">
                Machine vision, controls, and production systems — the
                work that taught me what survives a factory floor.
              </p>
              <Link
                href="/industrial-automation"
                className="inline-block mt-6 font-medium hover:underline"
              >
                Explore Automation →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Contact
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Let&apos;s build something.
        </h2>

        <p className="text-zinc-600 mt-6">
          Interested in working together or learning more about my projects?
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="mailto:william.weijen@gmail.com"
            className="inline-block px-6 py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition"
          >
            Get in Touch
          </a>

          <a
            href="https://www.linkedin.com/in/williammse/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border border-zinc-300 hover:bg-zinc-100 transition"
          >
            LinkedIn
          </a>

          {/* Drop William-Chen-Resume.pdf into /public, or delete this link */}
          <a
            href="/William-Chen-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border border-zinc-300 hover:bg-zinc-100 transition"
          >
            Résumé (PDF)
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
          <span>© 2026 William Chen. All rights reserved.</span>

          <div className="flex gap-6">
            <a
              href="mailto:william.weijen@gmail.com"
              className="hover:text-zinc-900 transition"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/williammse/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

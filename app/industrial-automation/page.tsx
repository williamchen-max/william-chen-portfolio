import Link from "next/link";
import Navbar from "../components/Navbar";

export default function IndustrialAutomation() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
        <Navbar />
        
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Industrial Automation
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Industrial Automation Projects
        </h1>

        <p className="text-xl text-zinc-600 max-w-3xl mt-8 leading-8">
          Industrial control systems, machine vision, motion control,
          commissioning, and software integration for automated
          manufacturing systems.
        </p>

        {/* Project 1 */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            PROJECT 01
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Inline Bun Quality Inspection System
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Developed a full-stack machine vision inspection system for
            inline bun quality control, using a Time-of-Flight 3D camera
            to compare each product&apos;s point cloud against a reference
            model in real time.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="font-semibold">
                My Role
              </h3>
              <p className="text-zinc-600 mt-2">
                End-to-end development — custom Windows application
                for data collection (C#), 3D image processing (Halcon),
                and PLC integration for pass/fail sorting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Technologies
              </h3>
              <p className="text-zinc-600 mt-2">
                C#, Halcon, Time-of-Flight camera,
                Allen-Bradley PLC, TCP/IP.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Focus
              </h3>
              <p className="text-zinc-600 mt-2">
                Sub-500ms scan-to-decision time, point-cloud scoring,
                and 3-month result and image archiving for traceability.
              </p>
            </div>

          </div>

        </div>

        {/* Project 2 */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            PROJECT 02
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Fries Length & Quality Grading System
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Designed the operator and manager HMI for a production-line
            fries inspection system, integrating live camera imaging to
            monitor length ratio and defect rate on an hourly basis.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="font-semibold">
                My Role
              </h3>
              <p className="text-zinc-600 mt-2">
                HMI design and development (Ignition), Gocator
                linescan camera integration, and conveyor/motor speed
                configuration to optimize image quality.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Technologies
              </h3>
              <p className="text-zinc-600 mt-2">
                Ignition, Gocator linescan camera, PLC.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Focus
              </h3>
              <p className="text-zinc-600 mt-2">
                Simple on/off controls for operators, configurability
                and history tracing for managers, and consistent
                product quality across production runs.
              </p>
            </div>

          </div>

        </div>

        {/* Project 3 */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            PROJECT 03
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Freezer System Commissioning
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Commissioned a production freezer system end-to-end, from
            control panel I/O verification through motor and belt tuning,
            VFD configuration, and full network integration with remote
            panel access.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="font-semibold">
                My Role
              </h3>
              <p className="text-zinc-600 mt-2">
                Controls commissioning — I/O checkout, PID and motor
                ratio tuning, VFD configuration, and network/remote
                access setup.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Technologies
              </h3>
              <p className="text-zinc-600 mt-2">
                PLC, VFD, PID control, Industrial
                Ethernet, VPN/remote access.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Focus
              </h3>
              <p className="text-zinc-600 mt-2">
                Control panel I/O verification, motor/belt speed and
                PID tuning, VFD parameter validation, and secure
                remote access to the plant network.
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}

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
            Vision-Based Quality Inspection System
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Developed an inline machine vision inspection system for
            automated product sorting, defect detection, and dimensional
            measurement within a production environment.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="font-semibold">
                My Role
              </h3>
              <p className="text-zinc-600 mt-2">
                System integration, PLC programming,
                machine vision, and commissioning.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Technologies
              </h3>
              <p className="text-zinc-600 mt-2">
                Machine Vision, PLC, HMI, sensors,
                conveyors, pneumatic actuators.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Focus
              </h3>
              <p className="text-zinc-600 mt-2">
                Automated inspection, defect detection,
                measurement, and product sorting.
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
            Industrial Automation & Commissioning
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Field commissioning and startup of automated industrial
            equipment, including factory acceptance testing, site
            acceptance testing, troubleshooting, and production ramp-up.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="font-semibold">
                My Role
              </h3>
              <p className="text-zinc-600 mt-2">
                Controls engineer, commissioning,
                troubleshooting, and customer support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Technologies
              </h3>
              <p className="text-zinc-600 mt-2">
                PLC, HMI, VFD, SCADA, industrial
                networking, sensors, and actuators.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Focus
              </h3>
              <p className="text-zinc-600 mt-2">
                FAT, SAT, commissioning, startup,
                troubleshooting, and optimization.
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
            Motor Synchronization & Motion Control
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Developed closed-loop control strategies for synchronizing
            multiple motors in an industrial conveyor application,
            including PID tuning and drive control.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="font-semibold">
                My Role
              </h3>
              <p className="text-zinc-600 mt-2">
                Controls development, PID tuning,
                troubleshooting, and optimization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Technologies
              </h3>
              <p className="text-zinc-600 mt-2">
                PLC, VFD, PID control, encoder feedback,
                and industrial motion control.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Focus
              </h3>
              <p className="text-zinc-600 mt-2">
                Motor synchronization, speed regulation,
                feedback control, and stability.
              </p>
            </div>

          </div>

        </div>

        {/* Project 4 */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            PROJECT 04
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Industrial Networking & Remote Access
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Designed and troubleshot industrial communication and
            remote-access systems for connected automation equipment.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="font-semibold">
                My Role
              </h3>
              <p className="text-zinc-600 mt-2">
                Network configuration, troubleshooting,
                remote access, and system support.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Technologies
              </h3>
              <p className="text-zinc-600 mt-2">
                Industrial Ethernet, VPN, PLC networks,
                VFD communication, and remote diagnostics.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Focus
              </h3>
              <p className="text-zinc-600 mt-2">
                Reliable communication, remote troubleshooting,
                and connected industrial systems.
              </p>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation | William Chen",
  description:
    "Machine vision, controls, and commissioning for food production lines — inline 3D bun inspection, fries grading, freezer commissioning, and predictive control.",
};

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
          Production lines run product that looks identical to the eye but
          reads as a different geometry to a computer. These are the vision,
          control, and commissioning systems I&apos;ve built to measure and
          act on that variation at line speed.
        </p>

        {/* ============ Project 1 ============ */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">PROJECT 01</p>

          <h2 className="text-4xl font-bold mt-3">
            Inline Bun Quality Inspection System
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Developed a full-stack machine vision inspection system for
            inline bun quality control, using a Time-of-Flight 3D camera
            to compare each product&apos;s point cloud against a reference
            model in real time.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">
            <div>
              <p className="text-3xl font-bold">&lt;500 ms</p>
              <p className="text-sm text-zinc-500 mt-1">
                Scan-to-decision time
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">3 months</p>
              <p className="text-sm text-zinc-500 mt-1">
                Archived inspection history
              </p>
            </div>
          </div>

          {/* Operator application — drop vision-ui.gif into /public/industrial-automation/ */}
          {/*<div className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <Image
                src="/industrial-automation/vision-ui.gif"
                alt="Operator application showing live inspection, scoring, and event log"
                width={1200}
                height={676}
                unoptimized
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-zinc-500 mt-3">
              The operator application I built in C# — live inspection,
              scoring, and event log, feeding results to the PLC.
            </p>
          </div>*/}

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="font-semibold">My Role</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                End-to-end development — custom Windows application for
                data collection (C#), 3D image processing (Halcon), and
                PLC integration for pass/fail sorting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Technologies</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                C#, Halcon, Time-of-Flight camera, Allen-Bradley PLC,
                TCP/IP.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Focus</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                Sub-500 ms scan-to-decision time, point-cloud scoring,
                and three-month result and image archiving for
                traceability.
              </p>
            </div>
          </div>
        </div>

        {/* ============ Project 2 ============ */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">PROJECT 02</p>

          <h2 className="text-4xl font-bold mt-3">
            Fries Length &amp; Quality Grading System
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Designed the operator and manager HMI for a production-line
            fries inspection system, integrating live camera imaging to
            monitor length ratio and defect rate on an hourly basis.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">
            <div>
              <p className="text-3xl font-bold">120 pc/min</p>
              <p className="text-sm text-zinc-500 mt-1">
                Inspection throughput
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">±1%</p>
              <p className="text-sm text-zinc-500 mt-1">
                Measurement accuracy
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">Hourly</p>
              <p className="text-sm text-zinc-500 mt-1">
                Length &amp; defect quality checks
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="font-semibold">My Role</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                HMI design and development (Ignition), Gocator linescan
                camera integration, and conveyor/motor speed
                configuration to optimize image quality.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Technologies</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                Ignition, Gocator linescan camera, PLC.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Focus</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                Simple on/off controls for operators, configurability
                and history tracing for managers, and consistent
                product quality across production runs.
              </p>
            </div>
          </div>
        </div>

        {/* ============ Project 3 ============ */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">PROJECT 03</p>

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
              <h3 className="font-semibold">My Role</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                Controls commissioning — I/O checkout, PID and motor
                ratio tuning, VFD configuration, and network/remote
                access setup.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Technologies</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                PLC, VFD, PID control, Industrial Ethernet, VPN/remote
                access.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Focus</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                Control panel I/O verification, motor and belt speed
                tuning, VFD parameter validation, and secure remote
                access to the plant network.
              </p>
            </div>
          </div>
        </div>

        {/* ============ Project 4 ============ */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            PROJECT 04 · GRADUATE TEAM PROJECT
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Dew Point Prediction for Compressed Air Systems
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            Predicting dew point in a manufacturing plant&apos;s compressed
            air drying system, to move from reactive threshold-based
            control toward proactive, predictive control.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">
            <div>
              <p className="text-3xl font-bold">0.9925</p>
              <p className="text-sm text-zinc-500 mt-1">R² on test set</p>
            </div>

            <div>
              <p className="text-3xl font-bold">0.0089</p>
              <p className="text-sm text-zinc-500 mt-1">RMSE on test set</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="font-semibold">My Role</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                Implemented and compared regression algorithms in Python,
                and led hyperparameter tuning on the best-performing
                model.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Technologies</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                Python, pandas, scikit-learn, GridSearchCV.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Focus</h3>
              <p className="text-zinc-600 mt-2 leading-7">
                Feature engineering, comparative evaluation across eight
                regression models, and hyperparameter tuning validated by
                R² and RMSE.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <Image
                src="/dew-point/correlation-plot.png"
                alt="Correlation plot between dew point and the top four predictive features"
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-zinc-500 mt-3">
              Correlation between dew point and the four most predictive
              features — supply temp, discharge temp, step, and motor
              amperage.
            </p>
          </div>
        </div>

        {/* ============ Footer nav ============ */}
        <div className="mt-24 border-t border-zinc-200 pt-10 flex flex-wrap gap-6">
          <Link
            href="/robotics"
            className="font-medium hover:underline"
          >
            Explore Robotics →
          </Link>

          <Link
            href="/#contact"
            className="font-medium hover:underline"
          >
            Get in touch →
          </Link>
        </div>

      </section>
    </main>
  );
}

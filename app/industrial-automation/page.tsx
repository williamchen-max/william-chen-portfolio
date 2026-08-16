import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";

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

          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">

            <div>
              <p className="text-3xl font-bold">
                &lt;500ms
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Scan-to-Decision Time
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                3 Months
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Archived Inspection History
              </p>
            </div>

          </div>

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

          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">

            <div>
              <p className="text-3xl font-bold">
                120 pc/min
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Inspection Throughput
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                1%
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Measurement Accuracy
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                Hourly
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Length & Defect Quality Checks
              </p>
            </div>

          </div>

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

          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">

            <div>
              <p className="text-3xl font-bold">
                4 Systems
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Commissioned End-to-End — I/O, Motion, VFD, Network
              </p>
            </div>

          </div>

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

        {/* Project 4 */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            PROJECT 04
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Dew Point Prediction for Compressed Air Systems
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            A graduate team project predicting dew point in a
            manufacturing plant&apos;s compressed air drying system, to
            move from reactive threshold-based control toward proactive,
            predictive control.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-8">

            <div>
              <p className="text-3xl font-bold">
                0.9925
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                R² on Test Set
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                0.0089
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                RMSE on Test Set
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div>
              <h3 className="font-semibold">
                My Role
              </h3>
              <p className="text-zinc-600 mt-2">
                Implemented and compared regression algorithms in
                Python, and led hyperparameter tuning on the
                best-performing model.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Technologies
              </h3>
              <p className="text-zinc-600 mt-2">
                Python, pandas, scikit-learn, GridSearchCV.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Focus
              </h3>
              <p className="text-zinc-600 mt-2">
                Feature engineering, comparative evaluation across
                eight regression models, and hyperparameter tuning
                validated by R² and RMSE.
              </p>
            </div>

          </div>

          {/* Correlation Chart */}
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
              Correlation between dew point and the four most
              predictive features — supply temp, discharge temp,
              step, and motor amperage.
            </p>

          </div>

        </div>

      </section>
    </main>
  );
}

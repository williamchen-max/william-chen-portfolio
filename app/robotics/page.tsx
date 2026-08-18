import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Robotics() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      <Navbar />

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Robotics
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Robotics Projects
        </h1>

        <p className="text-xl text-zinc-600 max-w-3xl mt-8 leading-8">
          Mechanisms, end-effectors, and autonomous platforms — machines
          built to physically handle things that are never quite the
          same twice.
        </p>


        {/* =====================================================
            PROJECT 01 — SOFT GRIPPER OPTIMIZATION
        ===================================================== */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            FEATURED PROJECT
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Soft Gripper Weight & Rigidity Optimization
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            A compliant end-effector for fruit and vegetable harvesting.
            I swept the constraint space in iterative FEA-based topology
            optimization, then reworked the optimizer&apos;s output into
            printable geometry — taking the finger from 130 g to 71 g
            without losing the compliant grip that keeps produce
            undamaged.
          </p>


          {/* Project Details */}
          <div className="grid md:grid-cols-5 gap-10 mt-10 items-center">

            {/* Soft Gripper Image */}
            <div className="md:col-span-2">

              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">

                <Image
                  src="/soft-gripper/gripper-final.png"
                  alt="Topology-optimized soft gripper finger, final design"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                  priority
                />

              </div>

            </div>


            {/* Project Information */}
            <div className="md:col-span-3 grid md:grid-cols-3 gap-8">

              <div>
                <h3 className="font-semibold">
                  My Role
                </h3>

                <p className="text-zinc-600 mt-2">
                  Topology optimization, FEA, and design for 3D
                  printing.
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Technologies
                </h3>

                <p className="text-zinc-600 mt-2">
                  SolidWorks • Topology Optimization • FEA • FDM 3D
                  Printing
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Result
                </h3>

                <p className="text-zinc-600 mt-2">
                  45% lighter at comparable simulated stress —
                  printed and verified by hand.
                </p>
              </div>

            </div>

          </div>


          {/* Project Link */}
          <Link
            href="/robotics/soft-gripper"
            className="inline-block mt-8 font-medium hover:underline"
          >
            View Project →
          </Link>

        </div>


        {/* =====================================================
            PROJECT 02 — WEED MANAGEMENT ROBOT
        ===================================================== */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            UNIVERSITY PROJECT
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Autonomous Weed Management Robot
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            A mobile robot that pulls weeds mechanically instead of
            spraying them. I designed and fabricated the implement — a
            spring tine on a servo-driven parallel lift, 15 custom
            3D-printed parts — and modified the chassis to carry it,
            trading two drive motors for the space and power the
            mechanism needed.
          </p>


          {/* Project Details */}
          <div className="grid md:grid-cols-5 gap-10 mt-10 items-center">

            {/* Weed Robot Image */}
            <div className="md:col-span-2">

              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">

                <Image
                  src="/weed-robot/model.jpg"
                  alt="Autonomous weed management robot"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />

              </div>

            </div>


            {/* Project Information */}
            <div className="md:col-span-3 grid md:grid-cols-3 gap-8">

              <div>
                <h3 className="font-semibold">
                  My Role
                </h3>

                <p className="text-zinc-600 mt-2">
                  Mechanism design, CAD, 3D-printed fabrication, and
                  integration onto the platform.
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Technologies
                </h3>

                <p className="text-zinc-600 mt-2">
                  SolidWorks • 3D Printing • ROS • Arduino •
                  YDLIDAR X4 • Hector SLAM
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Focus
                </h3>

                <p className="text-zinc-600 mt-2">
                  Linkage design and soil-contact implement on an
                  autonomous platform.
                </p>
              </div>

            </div>

          </div>


          {/* Project Link */}
          <Link
            href="/robotics/weed-management-robot"
            className="inline-block mt-8 font-medium hover:underline"
          >
            View Project →
          </Link>

        </div>


        {/* =====================================================
            PROJECT 03 — ROBOT CAFÉ
        ===================================================== */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            R&D PROJECT
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Autonomous Robot Café
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            An autonomous café system pairing a humanoid robot with a
            mobile platform to take orders and retrieve pastries — the
            same handling problem in a service setting, where the item
            being picked is soft and the tolerance for crushing it is
            zero.
          </p>


          {/* Project Details */}
          <div className="grid md:grid-cols-5 gap-10 mt-10 items-center">

            {/* Robot Café Image */}
            <div className="md:col-span-2">

              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">

                <Image
                  src="/robot-cafe/robot_cafe1.png"
                  alt="Autonomous Robot Café"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />

              </div>

            </div>


            {/* Project Information */}
            <div className="md:col-span-3 grid md:grid-cols-3 gap-8">

              <div>
                <h3 className="font-semibold">
                  My Role
                </h3>

                <p className="text-zinc-600 mt-2">
                  AMR navigation, map configuration, waypoint planning,
                  and movement optimization.
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Technologies
                </h3>

                <p className="text-zinc-600 mt-2">
                  DOBOT AtomW • ROS 2 • AMR • Teleoperation
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Focus
                </h3>

                <p className="text-zinc-600 mt-2">
                  Autonomous navigation and robotic pastry retrieval.
                </p>
              </div>

            </div>

          </div>


          {/* Project Link */}
          <Link
            href="/robotics/robot-cafe"
            className="inline-block mt-8 font-medium hover:underline"
          >
            View Project →
          </Link>

        </div>


      </section>

    </main>
  );
}

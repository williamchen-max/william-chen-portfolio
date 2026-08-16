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
          Robotic system integration, autonomous systems, and
          robotics applications for real-world automation.
        </p>


        {/* =====================================================
            PROJECT 01 — ROBOT CAFÉ
        ===================================================== */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            FEATURED PROJECT
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Autonomous Robot Café
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            An autonomous robotic café system combining a humanoid robot
            with a mobile autonomous robot platform to automate customer
            orders and pastry retrieval.
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
            An autonomous agricultural robot designed to reduce manual
            weed-management labor by combining ROS-based navigation,
            2D LiDAR mapping, embedded motor control, and a custom
            3D-printed mechanical weeding mechanism.
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
                  Mechanical design, CAD development, 3D printing,
                  robotic integration, navigation, and system testing.
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Technologies
                </h3>

                <p className="text-zinc-600 mt-2">
                  ROS • Raspberry Pi • Arduino • YDLIDAR X4 •
                  Hector SLAM • SolidWorks
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Focus
                </h3>

                <p className="text-zinc-600 mt-2">
                  Autonomous navigation, LiDAR mapping, and
                  custom mechanical weed removal.
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
            PROJECT 03 — SOFT GRIPPER OPTIMIZATION
        ===================================================== */}
        <div className="mt-20 border-t border-zinc-200 pt-12">

          <p className="text-sm text-zinc-500">
            UNIVERSITY PROJECT
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Soft Gripper Weight & Rigidity Optimization
          </h2>

          <p className="text-zinc-600 max-w-3xl mt-6 leading-8">
            A graduate team project redesigning a soft robotic gripper for
            fruit picking. I led the topology optimization, cutting the
            gripper&apos;s weight nearly in half through iterative FEA-based
            design while preserving the compliant grip needed to handle
            delicate produce without damage.
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
                  Designed and ran the topology optimization —
                  mesh, material, and constraint setup across
                  iterative FEA studies.
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Technologies
                </h3>

                <p className="text-zinc-600 mt-2">
                  SolidWorks • Topology Optimization • FEA • 3D Printing
                </p>
              </div>


              <div>
                <h3 className="font-semibold">
                  Focus
                </h3>

                <p className="text-zinc-600 mt-2">
                  Reducing weight while preserving gripping
                  rigidity for damage-free handling of produce.
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


      </section>

    </main>
  );
}

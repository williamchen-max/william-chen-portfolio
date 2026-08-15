import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function RobotCafe() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

        <Navbar />

      {/* Back to Robotics */}
      <div className="max-w-6xl mx-auto px-8 pt-8">

        <Link
          href="/robotics"
          className="text-sm text-zinc-500 hover:text-zinc-900"
        >
          ← Back to Robotics
        </Link>

      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Robotics / Project
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4">
          Autonomous Robot Café
        </h1>

        <p className="text-xl text-zinc-600 max-w-3xl mt-8 leading-8">
          An autonomous robotic café system combining a humanoid robot
          with a mobile autonomous robot base to automate customer orders
          and pastry retrieval.
        </p>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-zinc-200 pt-10">

          <div>
            <p className="text-sm text-zinc-500 uppercase">
              Robot Platform
            </p>
            <p className="font-semibold mt-2">
              DOBOT AtomW Wheeled Version
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500 uppercase">
              Technologies
            </p>
            <p className="font-semibold mt-2">
              ROS 2 • AMR • Teleoperation
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500 uppercase">
              My Role
            </p>
            <p className="font-semibold mt-2">
              AMR Navigation & Robot Movement
            </p>
          </div>

        </div>

      </section>


      {/* Overview */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Overview
          </p>

          <h2 className="text-4xl font-bold mt-4">
            From customer order to autonomous pastry retrieval.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            The system combines a humanoid robotic platform with an
            autonomous mobile robot base. Customers place an order,
            complete payment, and the robot then navigates to the
            appropriate location to retrieve the selected pastry.
          </p>

        </div>

      </section>


      {/* Workflow */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          System Workflow
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Autonomous Order Workflow
        </h2>

        <div className="grid md:grid-cols-5 gap-4 mt-12">

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">01</p>
            <h3 className="font-semibold mt-2">
              Customer Order
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              Customer places an order through the café system.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">02</p>
            <h3 className="font-semibold mt-2">
              Confirmation
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              Order is confirmed and payment is completed.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">03</p>
            <h3 className="font-semibold mt-2">
              Navigation
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              The AMR navigates to the required location.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">04</p>
            <h3 className="font-semibold mt-2">
              Pastry Retrieval
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              The robot performs the pastry retrieval process.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">05</p>
            <h3 className="font-semibold mt-2">
              Delivery
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              The robot moves to the required destination.
            </p>
          </div>

        </div>

      </section>


      {/* My Role */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            My Contribution
          </p>

          <h2 className="text-4xl font-bold mt-4">
            AMR Navigation & Movement
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            My primary responsibility was configuring the autonomous
            mobile robot navigation system and ensuring smooth movement
            between locations within the café environment.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div>
              <h3 className="font-semibold text-xl">
                Map Configuration
              </h3>
              <p className="text-zinc-600 mt-3 leading-7">
                Created and configured the navigation map used by the
                AMR to understand and move through the café environment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Waypoint Planning
              </h3>
              <p className="text-zinc-600 mt-3 leading-7">
                Defined navigation waypoints and configured movement
                between important locations in the system.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">
                Motion Optimization
              </h3>
              <p className="text-zinc-600 mt-3 leading-7">
                Adjusted navigation and waypoint transitions to achieve
                smooth and reliable movement between locations.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* AMR Navigation */}
<section className="bg-zinc-50 px-8 py-24">

  <div className="max-w-6xl mx-auto">

    <p className="text-sm tracking-widest text-zinc-500 uppercase">
      My Contribution
    </p>

    <h2 className="text-4xl font-bold mt-4">
      AMR Navigation
    </h2>

    <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
     My primary responsibility was configuring and optimizing the
    autonomous mobile robot navigation system used to move the robot
    between key locations within the café environment. The AMR uses
    SLAM with two 2D LiDAR sensors, positioned at the front and rear
    of the platform, to build and navigate the café environment.
    </p>

    {/* Navigation Process */}
    <div className="grid md:grid-cols-4 gap-6 mt-12">

      <div className="bg-white rounded-2xl p-6 border border-zinc-200">
        <p className="text-sm text-zinc-500">
          01
        </p>

        <h3 className="text-xl font-semibold mt-3">
          SLAM Mapping
        </h3>

        <p className="text-zinc-600 mt-3 leading-7">
        Configured the AMR navigation system to use SLAM for mapping
        and localization within the café environment.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-zinc-200">
        <p className="text-sm text-zinc-500">
          02
        </p>

        <h3 className="text-xl font-semibold mt-3">
          Dual 2D LiDAR
        </h3>

        <p className="text-zinc-600 mt-3 leading-7">
          Worked with two 2D LiDAR sensors positioned at the front and
        rear of the AMR to support environmental perception and navigation.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-zinc-200">
        <p className="text-sm text-zinc-500">
          03
        </p>

        <h3 className="text-xl font-semibold mt-3">
          Waypoint Planning
        </h3>

        <p className="text-zinc-600 mt-3 leading-7">
          Configured navigation waypoints for key locations and defined
        the robot's movement between different areas of the café.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-zinc-200">
        <p className="text-sm text-zinc-500">
          04
        </p>

        <h3 className="text-xl font-semibold mt-3">
          Movement Optimization
        </h3>

        <p className="text-zinc-600 mt-3 leading-7">
          Tested and refined waypoint positioning and navigation behavior
        to achieve smooth and reliable movement between locations.
        </p>
      </div>

    </div>

    {/* Map Placeholder */}
    <div className="mt-16">

      <div className="aspect-video bg-white rounded-2xl border border-zinc-200 flex items-center justify-center">

        <div className="text-center">
          <p className="text-zinc-400 text-lg">
            AMR Navigation Map
          </p>

          <p className="text-zinc-400 text-sm mt-2">
            Project map image will be added here
          </p>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* ROS 2 */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Software & Robotics
        </p>

        <h2 className="text-4xl font-bold mt-4">
          ROS 2 Integration
        </h2>

        <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
          ROS 2 was used as part of the robotic control architecture,
          including control of selected robot joints and integration
          with the mobile robot movement system.
        </p>

        <div className="mt-10 inline-flex items-center rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium">
          ROS 2
        </div>

      </section>


      {/* Teleoperation */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Robot Training
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Teleoperation for Pastry Retrieval
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            Teleoperation was used to train and develop the pastry
            retrieval process, allowing the robot to learn the required
            movement sequence for interacting with the pastry station.
          </p>

        </div>

      </section>


      {/* Media Placeholder */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Project Media
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Photos & Demonstration
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          <div className="aspect-video bg-zinc-100 rounded-2xl flex items-center justify-center">
            <p className="text-zinc-400">
              Project Photo
            </p>
          </div>

          <div className="aspect-video bg-zinc-100 rounded-2xl flex items-center justify-center">
            <p className="text-zinc-400">
              Project Video
            </p>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-zinc-200 px-8 py-8">

        <div className="max-w-6xl mx-auto text-sm text-zinc-500">
          William Chen • Robotics & Automation
        </div>

      </footer>

    </main>
  );
}
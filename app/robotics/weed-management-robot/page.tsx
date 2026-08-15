import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function WeedManagementRobot() {
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


      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          University Project / Robotics
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-4 max-w-5xl">
          Autonomous Weed Management Robot
        </h1>

        <p className="text-xl text-zinc-600 max-w-3xl mt-8 leading-8">
          An autonomous agricultural robot designed to reduce manual labor
          in weed management by combining ROS-based navigation, 2D LiDAR
          mapping, embedded motor control, and a custom mechanical
          weeding mechanism.
        </p>

        {/* Main Robot Image */}
        <div className="mt-12 overflow-hidden rounded-2xl">
          <Image
            src="/weed-robot/weed-robot-main.png"
            alt="Autonomous weed management robot"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>


        {/* Project Information */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-zinc-200 pt-10">

          <div>
            <p className="text-sm text-zinc-500 uppercase">
              Project Type
            </p>

            <p className="font-semibold mt-2">
              University Robotics Project
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500 uppercase">
              Navigation
            </p>

            <p className="font-semibold mt-2">
              ROS + Hector SLAM + 2D LiDAR
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500 uppercase">
              Platform
            </p>

            <p className="font-semibold mt-2">
              Wild Thumper Mobile Robot
            </p>
          </div>

        </div>


        {/* Skills / Technologies */}
        <div className="mt-12">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Technologies & Skills
          </p>

          <div className="flex flex-wrap gap-3 mt-5">

            {[
              "ROS",
              "C++",
              "Arduino",
              "Raspberry Pi",
              "YDLIDAR X4",
              "Hector SLAM",
              "SolidWorks",
              "3D Printing",
              "Sabertooth 2×32",
              "Differential Drive",
              "Motor Control",
              "Servo Control",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-sm text-zinc-700"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          PROJECT OVERVIEW
      ========================================================= */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Project Overview
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            Combining autonomous robotics with mechanical weed removal.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            The project focused on developing an autonomous ground robot
            capable of navigating a predefined environment while carrying
            a mechanically actuated weeding attachment.
          </p>

          <p className="text-lg text-zinc-600 max-w-3xl mt-6 leading-8">
            The system combined a Raspberry Pi 3B+ running ROS, an Arduino
            microcontroller, a YDLIDAR X4, a Sabertooth motor controller,
            and a custom 3D-printed mechanical weeder.
          </p>

          <p className="text-lg text-zinc-600 max-w-3xl mt-6 leading-8">
            The project required integration across mechanical design,
            embedded control, robotics software, sensing, autonomous
            navigation, and physical system testing.
          </p>

        </div>

      </section>


      {/* =========================================================
          PROBLEM
      ========================================================= */}
      <section className="px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16">

            <div>

              <p className="text-sm tracking-widest text-zinc-500 uppercase">
                The Problem
              </p>

              <h2 className="text-4xl font-bold mt-4">
                Reducing repetitive agricultural labor.
              </h2>

            </div>

            <div>

              <p className="text-lg text-zinc-600 leading-8">
                Weed management can require significant manual labor,
                particularly when weeds must be physically removed from
                growing areas.
              </p>

              <p className="text-lg text-zinc-600 mt-6 leading-8">
                Chemical weed control can also introduce environmental
                concerns and contribute to herbicide resistance.
              </p>

              <p className="text-lg text-zinc-600 mt-6 leading-8">
                The goal of this project was to develop an autonomous
                mobile platform capable of navigating an environment and
                performing physical weed removal with a mechanical
                attachment.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ENGINEERING SOLUTION
      ========================================================= */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Engineering Solution
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            A modular autonomous robotic platform.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            The robot was designed as a modular system where sensing,
            computation, motor control, navigation, and mechanical
            actuation were separated into functional subsystems.
          </p>


          {/* System Components */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            <div className="border-t border-zinc-300 pt-6">
              <p className="text-sm text-zinc-500">
                01
              </p>

              <h3 className="text-xl font-semibold mt-3">
                Raspberry Pi 3B+
              </h3>

              <p className="text-zinc-600 mt-3 leading-7">
                High-level computing platform running ROS and handling
                navigation, LiDAR processing, and robot communication.
              </p>
            </div>


            <div className="border-t border-zinc-300 pt-6">
              <p className="text-sm text-zinc-500">
                02
              </p>

              <h3 className="text-xl font-semibold mt-3">
                Arduino
              </h3>

              <p className="text-zinc-600 mt-3 leading-7">
                Low-level controller responsible for motor commands,
                servo control, and communication with the motor driver.
              </p>
            </div>


            <div className="border-t border-zinc-300 pt-6">
              <p className="text-sm text-zinc-500">
                03
              </p>

              <h3 className="text-xl font-semibold mt-3">
                YDLIDAR X4
              </h3>

              <p className="text-zinc-600 mt-3 leading-7">
                2D LiDAR sensor used for environmental scanning,
                mapping, and obstacle detection.
              </p>
            </div>


            <div className="border-t border-zinc-300 pt-6">
              <p className="text-sm text-zinc-500">
                04
              </p>

              <h3 className="text-xl font-semibold mt-3">
                Sabertooth 2×32
              </h3>

              <p className="text-zinc-600 mt-3 leading-7">
                Motor controller used to drive the differential-drive
                DC motors.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MECHANICAL DESIGN
      ========================================================= */}
      <section className="px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Mechanical Design & Fabrication
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            A custom mechanical weeding system designed and fabricated
            for the robot.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            I designed and fabricated the mechanical weeding mechanism
            used by the robot. The mechanism was developed in SolidWorks,
            manufactured using 3D printing, and integrated onto the
            mobile platform.
          </p>


          {/* Design Process */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="border-t border-zinc-300 pt-6">

              <p className="text-sm text-zinc-500">
                01
              </p>

              <h3 className="text-xl font-semibold mt-3">
                Mechanical Design
              </h3>

              <p className="text-zinc-600 mt-3 leading-7">
                Designed the custom weeding mechanism in SolidWorks,
                considering the robot chassis, mounting points,
                linkage geometry, and required movement.
              </p>

            </div>


            <div className="border-t border-zinc-300 pt-6">

              <p className="text-sm text-zinc-500">
                02
              </p>

              <h3 className="text-xl font-semibold mt-3">
                3D Printing
              </h3>

              <p className="text-zinc-600 mt-3 leading-7">
                Fabricated 15 custom components using 3D printing to
                create the physical mechanism and mounting structure.
              </p>

            </div>


            <div className="border-t border-zinc-300 pt-6">

              <p className="text-sm text-zinc-500">
                03
              </p>

              <h3 className="text-xl font-semibold mt-3">
                Mechanism Integration
              </h3>

              <p className="text-zinc-600 mt-3 leading-7">
                Integrated the custom mechanism with the Wild Thumper
                chassis and incorporated servo-based actuation.
              </p>

            </div>


            <div className="border-t border-zinc-300 pt-6">

              <p className="text-sm text-zinc-500">
                04
              </p>

              <h3 className="text-xl font-semibold mt-3">
                Testing
              </h3>

              <p className="text-zinc-600 mt-3 leading-7">
                Tested the mechanical assembly as part of the complete
                robotic system and refined the design during development.
              </p>

            </div>

          </div>


          {/* Full Robot Image */}
          <div className="mt-16 overflow-hidden rounded-2xl border border-zinc-200">

            <Image
              src="/weed-robot/Robot Full-side.jpg"
              alt="Full side view of autonomous weed management robot"
              width={1600}
              height={900}
              className="w-full h-auto"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          MECHANICAL WEEDER DETAIL
      ========================================================= */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-sm tracking-widest text-zinc-500 uppercase">
                Mechanical Design
              </p>

              <h2 className="text-4xl font-bold mt-4">
                Designing the weeding mechanism.
              </h2>

              <p className="text-lg text-zinc-600 mt-8 leading-8">
                The mechanical weeder was developed as a custom
                attachment for the autonomous mobile robot. I designed
                the mechanism in SolidWorks and developed the physical
                components through 3D printing.
              </p>

              <p className="text-lg text-zinc-600 mt-6 leading-8">
                The mechanism was inspired by a commercial tine weeder
                and used a spring tine mounted to a custom plate. A
                servo-driven parallel lift mechanism allowed the
                attachment to be raised and lowered.
              </p>

              <p className="text-lg text-zinc-600 mt-6 leading-8">
                The Wild Thumper chassis was also modified to
                accommodate the attachment. Two rear motors were removed
                to reduce electrical load and create additional space
                for the mechanical system.
              </p>

            </div>


            <div>

              <div className="overflow-hidden rounded-2xl bg-white border border-zinc-200">

                <Image
                  src="/weed-robot/weeder  Full-side.jpg"
                  alt="Custom mechanical weeding mechanism"
                  width={1200}
                  height={1200}
                  className="w-full h-auto"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          ELECTRONICS & CONTROL
      ========================================================= */}
      <section className="px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Electronics & Control Architecture
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            Separating high-level autonomy from low-level control.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            The robot used a two-level control architecture. ROS running
            on the Raspberry Pi handled high-level robotic functions,
            while an Arduino provided low-level control of the motors
            and servo.
          </p>


          {/* High / Low Level */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {/* High Level */}
            <div className="rounded-2xl border border-zinc-200 p-8">

              <p className="text-sm tracking-widest text-zinc-500 uppercase">
                High-Level Control
              </p>

              <h3 className="text-2xl font-bold mt-4">
                Raspberry Pi + ROS
              </h3>

              <div className="mt-8 space-y-4">

                <p className="text-zinc-600">
                  • ROS master and robotic communication
                </p>

                <p className="text-zinc-600">
                  • LiDAR processing
                </p>

                <p className="text-zinc-600">
                  • Mapping and localization
                </p>

                <p className="text-zinc-600">
                  • Autonomous navigation
                </p>

                <p className="text-zinc-600">
                  • Teleoperation
                </p>

              </div>

            </div>


            {/* Low Level */}
            <div className="rounded-2xl border border-zinc-200 p-8">

              <p className="text-sm tracking-widest text-zinc-500 uppercase">
                Low-Level Control
              </p>

              <h3 className="text-2xl font-bold mt-4">
                Arduino + Motor Controller
              </h3>

              <div className="mt-8 space-y-4">

                <p className="text-zinc-600">
                  • Motor control
                </p>

                <p className="text-zinc-600">
                  • Sabertooth motor controller
                </p>

                <p className="text-zinc-600">
                  • Differential-drive movement
                </p>

                <p className="text-zinc-600">
                  • Servo control
                </p>

                <p className="text-zinc-600">
                  • ROS serial communication
                </p>

              </div>

            </div>

          </div>


 {/* Control Flow Diagram */}
<div className="mt-16">

  <p className="text-sm tracking-widest text-zinc-500 uppercase">
    Control Flow
  </p>

  <div className="mt-6 flex justify-center">
    <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <Image
        src="/weed-robot/Blank diagram.png"
        alt="Robot electronics and control architecture diagram"
        width={1600}
        height={900}
        className="w-full h-auto"
      />
    </div>
  </div>

</div>

        </div>

      </section>


      {/* =========================================================
          AUTONOMOUS NAVIGATION
      ========================================================= */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-start">

            <div>

              <p className="text-sm tracking-widest text-zinc-500 uppercase">
                Autonomous Navigation
              </p>

              <h2 className="text-4xl font-bold mt-4">
                Mapping the environment with 2D LiDAR.
              </h2>

            </div>


            <div>

              <p className="text-lg text-zinc-600 leading-8">
                A YDLIDAR X4 was used to scan the surrounding environment
                and generate a 2D representation of the robot's
                surroundings.
              </p>

              <p className="text-lg text-zinc-600 mt-6 leading-8">
                The project implemented ROS Hector SLAM to construct a
                real-time map while the robot moved through the
                environment.
              </p>

              <p className="text-lg text-zinc-600 mt-6 leading-8">
                The resulting map could be visualized in RViz and saved
                for later use. This allowed the project to progress from
                manual control toward autonomous navigation within a
                preset environment.
              </p>

            </div>

          </div>


          {/* Navigation Pipeline */}
          <div className="mt-16 grid md:grid-cols-5 gap-4">

            {[
              ["01", "LiDAR", "Environmental scanning"],
              ["02", "ROS", "Sensor communication"],
              ["03", "Hector SLAM", "Mapping and localization"],
              ["04", "RViz", "Visualization"],
              ["05", "Navigation", "Autonomous movement"],
            ].map(([number, title, description]) => (

              <div
                key={number}
                className="bg-white border border-zinc-200 rounded-2xl p-6"
              >

                <p className="text-sm text-zinc-400">
                  {number}
                </p>

                <h3 className="text-xl font-semibold mt-3">
                  {title}
                </h3>

                <p className="text-sm text-zinc-600 mt-3 leading-6">
                  {description}
                </p>

              </div>

            ))}

          </div>

          {/* SLAM Map */}
<div className="mt-16">

  <p className="text-sm tracking-widest text-zinc-500 uppercase">
    SLAM Mapping
  </p>

  <h3 className="text-2xl md:text-3xl font-bold mt-4">
    Real-time environment mapping using LiDAR and Hector SLAM.
  </h3>

  <div className="mt-8 flex justify-center">
    <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <Image
        src="/weed-robot/dotmap.png"
        alt="2D LiDAR map generated using Hector SLAM"
        width={1600}
        height={900}
        className="w-full h-auto"
      />
    </div>
  </div>

</div>

        </div>

      </section>


      {/* =========================================================
          SOFTWARE
      ========================================================= */}
      <section className="px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Software Development
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            Connecting perception, control, and navigation through ROS.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            The software system was divided between ROS running on the
            Raspberry Pi and Arduino firmware responsible for low-level
            hardware control.
          </p>


          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="border-t border-zinc-300 pt-6">

              <p className="text-sm text-zinc-500 uppercase">
                ROS Development
              </p>

              <ul className="mt-6 space-y-3 text-zinc-600">

                <li>• rosserial</li>
                <li>• rosserial_arduino</li>
                <li>• YDLIDAR package</li>
                <li>• Hector SLAM</li>
                <li>• C++ ROS nodes</li>
                <li>• cmd_vel differential-drive control</li>

              </ul>

            </div>


            <div className="border-t border-zinc-300 pt-6">

              <p className="text-sm text-zinc-500 uppercase">
                Arduino Development
              </p>

              <ul className="mt-6 space-y-3 text-zinc-600">

                <li>• Arduino IDE</li>
                <li>• Sabertooth library</li>
                <li>• ROS communication library</li>
                <li>• Motor control logic</li>
                <li>• Servo control</li>
                <li>• Differential-drive implementation</li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          TESTING
      ========================================================= */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Testing & Validation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            Building and validating the system incrementally.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            The robot was developed through a series of incremental
            experiments. Each subsystem was validated before being
            integrated into the complete autonomous platform.
          </p>


          <div className="mt-16 space-y-0">

            {[
              [
                "01",
                "Motor Control",
                "Tested Arduino control of the Sabertooth motor controller and verified basic motor operation.",
              ],
              [
                "02",
                "ROS–Arduino Communication",
                "Verified serial communication between ROS and the Arduino using ROS topics.",
              ],
              [
                "03",
                "ROS Motor Control",
                "Demonstrated differential-drive control using ROS cmd_vel messages.",
              ],
              [
                "04",
                "LiDAR Integration",
                "Successfully obtained LiDAR scans and visualized the surrounding environment in RViz.",
              ],
              [
                "05",
                "SLAM Navigation",
                "Generated a real-time map using LiDAR data and Hector SLAM.",
              ],
              [
                "06",
                "Autonomous Operation",
                "Demonstrated autonomous navigation within the preset development environment.",
              ],
            ].map(([number, title, description]) => (

              <div
                key={number}
                className="grid md:grid-cols-[80px_240px_1fr] gap-6 py-8 border-b border-zinc-200"
              >

                <p className="text-sm text-zinc-400">
                  {number}
                </p>

                <h3 className="text-xl font-semibold">
                  {title}
                </h3>

                <p className="text-zinc-600 leading-7">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          RESULTS
      ========================================================= */}
      <section className="px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Results
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            Integrating mechanical, electrical, and software systems
            into one working prototype.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            The completed prototype successfully integrated the mechanical,
            electrical, and software subsystems into an autonomous mobile
            robot.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {[
              ["ROS", "Robotic communication and autonomous system architecture"],
              ["SLAM", "Real-time LiDAR-based mapping and localization"],
              ["Mechanical Weeder", "Custom 3D-printed physical weed-removal hardware"],
              ["Motor Control", "Arduino and Sabertooth-based differential drive"],
              ["LiDAR", "Environmental sensing and obstacle detection"],
              ["System Integration", "Combined hardware and software into a functional prototype"],
            ].map(([title, description]) => (

              <div
                key={title}
                className="border border-zinc-200 rounded-2xl p-7"
              >

                <h3 className="text-xl font-semibold">
                  {title}
                </h3>

                <p className="text-zinc-600 mt-3 leading-7">
                  {description}
                </p>

              </div>

            ))}

          </div>


          {/* Validation Limitation */}
          <div className="mt-16 border-l-4 border-zinc-300 pl-6">

            <p className="text-sm tracking-widest text-zinc-500 uppercase">
              Validation Limitation
            </p>

            <p className="text-lg text-zinc-600 mt-4 leading-8 max-w-3xl">
              Due to seasonal timing, outdoor agricultural field testing
              was not performed. The project therefore demonstrated
              autonomous operation in a controlled environment rather
              than validating long-term field-weeding performance.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          CHALLENGES
      ========================================================= */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Challenges & Improvements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            Identifying limitations and opportunities for improvement.
          </h2>


          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="bg-white rounded-2xl border border-zinc-200 p-8">

              <p className="text-sm text-zinc-500 uppercase">
                Mechanical
              </p>

              <h3 className="text-2xl font-bold mt-3">
                Chassis Maneuverability
              </h3>

              <p className="text-zinc-600 mt-4 leading-7">
                The rectangular chassis required significant turning
                space. A circular or more compact chassis geometry could
                improve maneuverability in tighter agricultural rows.
              </p>

            </div>


            <div className="bg-white rounded-2xl border border-zinc-200 p-8">

              <p className="text-sm text-zinc-500 uppercase">
                Environmental
              </p>

              <h3 className="text-2xl font-bold mt-3">
                Environmental Protection
              </h3>

              <p className="text-zinc-600 mt-4 leading-7">
                The main electronics were protected using a weatherproof
                enclosure, but the LiDAR and servo remained exposed to
                environmental conditions.
              </p>

            </div>


            <div className="bg-white rounded-2xl border border-zinc-200 p-8">

              <p className="text-sm text-zinc-500 uppercase">
                Navigation
              </p>

              <h3 className="text-2xl font-bold mt-3">
                Localization Improvements
              </h3>

              <p className="text-zinc-600 mt-4 leading-7">
                Hector SLAM relied primarily on LiDAR. A future
                implementation could incorporate odometry alongside
                laser data to improve navigation robustness.
              </p>

            </div>


            <div className="bg-white rounded-2xl border border-zinc-200 p-8">

              <p className="text-sm text-zinc-500 uppercase">
                Computing
              </p>

              <h3 className="text-2xl font-bold mt-3">
                Processing Capacity
              </h3>

              <p className="text-zinc-600 mt-4 leading-7">
                The Raspberry Pi 3B+ with 1 GB of RAM was sufficient for
                the prototype but could become a limitation as additional
                perception and autonomous applications are introduced.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FUTURE DEVELOPMENT
      ========================================================= */}
      <section className="px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Future Development
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            Expanding the platform beyond mechanical weed removal.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            The modular ROS architecture provides a foundation for
            expanding the platform into a broader autonomous agricultural
            robotics system.
          </p>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

            {[
              "Computer vision and plant recognition",
              "Plant-health monitoring",
              "Alternative agricultural attachments",
              "Improved mechanical weeding mechanisms",
              "Advanced navigation and perception",
              "Additional autonomous agricultural tasks",
            ].map((item, index) => (

              <div
                key={item}
                className="border-t border-zinc-300 pt-6"
              >

                <p className="text-sm text-zinc-400">
                  0{index + 1}
                </p>

                <h3 className="text-xl font-semibold mt-3">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          SKILLS
      ========================================================= */}
      <section className="bg-zinc-900 text-white px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-400 uppercase">
            Skills Demonstrated
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 max-w-4xl">
            A multidisciplinary robotics project.
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">

            <div>

              <h3 className="text-xl font-semibold">
                Robotics
              </h3>

              <ul className="mt-5 space-y-3 text-zinc-400">

                <li>Autonomous mobile robotics</li>
                <li>ROS</li>
                <li>SLAM</li>
                <li>LiDAR</li>
                <li>Differential-drive systems</li>

              </ul>

            </div>


            <div>

              <h3 className="text-xl font-semibold">
                Embedded Systems
              </h3>

              <ul className="mt-5 space-y-3 text-zinc-400">

                <li>Arduino</li>
                <li>Raspberry Pi</li>
                <li>Serial communication</li>
                <li>Motor control</li>
                <li>Servo control</li>

              </ul>

            </div>


            <div>

              <h3 className="text-xl font-semibold">
                Mechanical Engineering
              </h3>

              <ul className="mt-5 space-y-3 text-zinc-400">

                <li>SolidWorks</li>
                <li>CAD design</li>
                <li>3D printing</li>
                <li>Mechanical linkage design</li>
                <li>Robotic attachment design</li>

              </ul>

            </div>


            <div>

              <h3 className="text-xl font-semibold">
                Systems Integration
              </h3>

              <ul className="mt-5 space-y-3 text-zinc-400">

                <li>Hardware/software integration</li>
                <li>Sensor integration</li>
                <li>Autonomous navigation</li>
                <li>Experimental testing</li>
                <li>Debugging & validation</li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL PROJECT SUMMARY
      ========================================================= */}
      <section className="px-8 py-24">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Project Summary
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">
            Designed and built an autonomous agricultural robot
            integrating robotics, embedded control, autonomous
            navigation, and custom mechanical fabrication.
          </h2>

          <p className="text-lg text-zinc-600 mt-8 leading-8">
            The project brought together mechanical engineering,
            electronics, embedded programming, ROS development,
            sensor integration, and autonomous robotics into a
            single functional prototype.
          </p>

          <div className="mt-10">

            <Link
              href="/robotics"
              className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-zinc-700 transition"
            >
              ← Back to Robotics
            </Link>

          </div>

        </div>

      </section>


    </main>
  );
}
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soft Gripper Weight & Rigidity Optimization | William Chen",
  description:
    "A compliant fruit-harvesting end-effector taken from 130 g to 71 g through swept topology optimization, then redrawn into printable geometry and printed in PLA.",
};

export default function SoftGripper() {
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
          Soft Gripper Weight &amp; Rigidity Optimization
        </h1>

        <p className="text-xl text-zinc-600 max-w-3xl mt-8 leading-8">
          A flexible robotic end-effector for fruit and vegetable
          harvesting. I took the gripper finger from 130 g to 71 g
          through iterative topology optimization, then reworked the
          optimizer&apos;s output into geometry that could actually be
          printed — without losing the compliant grip that keeps
          delicate produce undamaged.
        </p>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-zinc-200 pt-10">

          <div>
            <p className="text-sm text-zinc-500 uppercase">Project Type</p>
            <p className="font-semibold mt-2">
              University Project (MSE 812)
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500 uppercase">Technologies</p>
            <p className="font-semibold mt-2">
              SolidWorks • Topology Optimization • FEA • FDM 3D Printing
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500 uppercase">My Role</p>
            <p className="font-semibold mt-2">
              Topology Optimization, FEA &amp; Design for 3D Printing
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
            Weight you can&apos;t remove without touching the thing that
            makes it work.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            Completed as a three-person team project, this project
            designed a flexible end-effector for robotic fruit and
            vegetable harvesting — a gripper that conforms to irregular
            produce while holding it firmly enough not to drop it and
            gently enough not to bruise it. Mass at the end of a
            harvesting arm is expensive: it drives actuator sizing,
            cycle time, and arm inertia.
          </p>

          <p className="text-lg text-zinc-600 max-w-3xl mt-6 leading-8">
            My piece was making the finger lighter. What makes that
            difficult in a compliant gripper is that weight and function
            aren&apos;t separable — the finger grips <em>by</em> bending,
            so every gram of material removed changes the mechanism
            itself. There is no safe interior to hollow out.
          </p>

        </div>
      </section>


      {/* Design Requirements */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Design Requirements
        </p>

        <h2 className="text-4xl font-bold mt-4">Specific Requirements</h2>

        <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
          Harvesting fruit and vegetables is still largely manual,
          driving up labor costs and limiting throughput. Flexible
          end-effectors can adapt to a wider range of object shapes
          than rigid grippers, but often trade away grasping force or
          rely on expensive specialty materials to get that
          flexibility. The project defined five requirements to guide
          the design.
        </p>

        <div className="grid md:grid-cols-5 gap-4 mt-12">

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">01</p>
            <h3 className="font-semibold mt-2">Size &amp; Scalability</h3>
            <p className="text-sm text-zinc-600 mt-3">
              Accommodate a range of object sizes and shapes.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">02</p>
            <h3 className="font-semibold mt-2">Material Selection</h3>
            <p className="text-sm text-zinc-600 mt-3">
              TPU, TPE, or flexible PLA.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">03</p>
            <h3 className="font-semibold mt-2">Geometry</h3>
            <p className="text-sm text-zinc-600 mt-3">
              Flexibility and deformation while maintaining
              structural integrity.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">04</p>
            <h3 className="font-semibold mt-2">
              Robustness &amp; Reliability
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              Stress analysis and simulation to confirm the design
              withstands repeated use.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">05</p>
            <h3 className="font-semibold mt-2">
              Texture &amp; Surface Finish
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              Enhance grip and friction against the object.
            </p>
          </div>

        </div>

      </section>


      {/* Background Research */}
      <section className="bg-zinc-50 px-8 py-24">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Background Research
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Learning From Existing Soft-Gripper Designs
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            Before settling on a design direction, the team reviewed
            existing soft-gripper research, including a shape-memory-alloy
            gripper with variable stiffness, an octopus-inspired bionic
            gripper for apple grasping, a Fin-Ray-inspired gripper with
            fruit slip detection, and a bionic flexible end-effector for
            tomato harvesting. One consistent finding: controlled
            flexibility and slip feedback substantially reduced fruit
            damage compared to rigid designs — in one study, from a 20%
            damage rate down to 0% with force feedback enabled. The team
            then brainstormed a range of concepts, from tentacle and
            shape-memory-alloy grippers to pressurized and hinged finger
            designs, before narrowing toward a soft, geometry-based
            flexible finger. For fabrication, PLA was selected for its
            durability, relative flexibility, and cost-effectiveness,
            with TPU considered as a softer alternative.
          </p>

        </div>
      </section>


      {/* My Contribution */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          My Contribution
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Sweeping the constraint space, not running the optimizer once.
        </h2>

        <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
          A single optimization run tells you very little — it gives you
          one point in a tradeoff space without telling you where that
          point sits. So I set the work up as a sweep. I built the FEA
          mesh, defined the material, set the grip hinge and the fixed
          outer border, then varied the displacement constraint from 0.8
          to 1.5 and pushed mass reduction targets from 10% up to 80%
          across iterations.
        </p>

        <p className="text-lg text-zinc-600 max-w-3xl mt-6 leading-8">
          Every candidate then went through a static stress simulation
          against the original finger under identical load conditions,
          so the question at each step was always what the design had
          <em> lost</em>, not whether the result looked plausible.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white rounded-2xl p-6 border border-zinc-200">
            <p className="text-sm text-zinc-500">01</p>
            <h3 className="text-xl font-semibold mt-3">
              Mesh &amp; Material
            </h3>
            <p className="text-zinc-600 mt-3 leading-7">
              Built the FEA mesh and defined the base material for
              each optimization run.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-zinc-200">
            <p className="text-sm text-zinc-500">02</p>
            <h3 className="text-xl font-semibold mt-3">
              Hinge &amp; Border
            </h3>
            <p className="text-zinc-600 mt-3 leading-7">
              Defined the grip hinge point and fixed outer border —
              the constraints that protect the bending behaviour
              through optimization.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-zinc-200">
            <p className="text-sm text-zinc-500">03</p>
            <h3 className="text-xl font-semibold mt-3">
              Iterative Tuning
            </h3>
            <p className="text-zinc-600 mt-3 leading-7">
              Varied displacement constraint (0.8–1.5) and mass
              reduction targets (10%–80%) across iterations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-zinc-200">
            <p className="text-sm text-zinc-500">04</p>
            <h3 className="text-xl font-semibold mt-3">
              Stress Validation
            </h3>
            <p className="text-zinc-600 mt-3 leading-7">
              Ran static stress simulations on each candidate to
              select the best strength-to-weight iteration.
            </p>
          </div>

        </div>

        <div className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <Image
              src="/soft-gripper/gripper-topology-optimization.jpg"
              alt="SolidWorks topology optimization material mass plot"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-zinc-500 mt-3">
            Material mass plot from one optimization iteration —
            yellow regions must be kept, purple regions are safe
            to remove.
          </p>
        </div>

      </section>


      {/* Design for Manufacturing */}
      <section className="bg-zinc-50 px-8 py-24">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Design for Manufacturing
          </p>

          <h2 className="text-4xl font-bold mt-4">
            The optimizer doesn&apos;t know how the part gets made.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            The aggressive iterations produced geometry that was lighter
            and, as far as the solver was concerned, correct — but not
            manufacturable. Topology optimization has no model of the
            FDM process, so it returns organic webbing with sharp
            transitions and features that don&apos;t survive contact with
            a nozzle and a layer height.
          </p>

          <p className="text-lg text-zinc-600 max-w-3xl mt-6 leading-8">
            It also treats the part as isotropic, which an FDM print
            isn&apos;t — a printed part is markedly weaker across layer
            boundaries than along them. For a finger that grips by
            flexing in one direction and has to stay stiff in the
            others, that anisotropy isn&apos;t a defect to work around.
            It&apos;s a design variable.
          </p>

          <p className="text-lg text-zinc-600 max-w-3xl mt-6 leading-8">
            So I treated the optimizer&apos;s material map as a guide
            rather than a result. The final finger is a redrawn part that
            keeps the load paths the solver identified, smooths the
            transitions it left sharp, puts material back wherever the
            geometry fell below what the process could reliably produce,
            and is oriented on the bed to put the layers where the
            bending needs them. That interpretation step is the part the
            software can&apos;t do.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            <div className="bg-white rounded-2xl p-6 border border-zinc-200">
              <h3 className="text-xl font-semibold">Keep the load paths</h3>
              <p className="text-zinc-600 mt-3 leading-7">
                The material the solver refused to remove shows where
                load actually travels. Those regions carried straight
                into the final geometry.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-200">
              <h3 className="text-xl font-semibold">
                Soften the transitions
              </h3>
              <p className="text-zinc-600 mt-3 leading-7">
                Raw optimizer output meets at abrupt angles that
                concentrate stress. Fairing those junctions costs a
                little mass and buys back durability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-200">
              <h3 className="text-xl font-semibold">Respect the process</h3>
              <p className="text-zinc-600 mt-3 leading-7">
                Features finer than the extrusion width, or overhangs
                the printer couldn&apos;t hold, were rebuilt into forms
                that print cleanly in PLA.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-zinc-200">
              <h3 className="text-xl font-semibold">Orient for the bend</h3>
              <p className="text-zinc-600 mt-3 leading-7">
                The finger has to flex in one direction and resist load
                in the others. Print orientation was chosen so bending
                stress runs along the extrusions rather than across the
                layer bonds — the same anisotropy that would
                delaminate a flexure, used to bias stiffness where the
                design wants it.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Validation */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Validation
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Initial vs. Final Design Simulation
        </h2>

        <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
          I ran static stress simulations on the original finger design
          and the final printable design under the same load conditions.
          The final design holds a comparable stress distribution while
          carrying substantially less material.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">

          <div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <Image
                src="/soft-gripper/gripper-simulation-initial.png"
                alt="Static stress simulation of the initial gripper design"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-zinc-500 mt-3">Initial Design</p>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <Image
                src="/soft-gripper/gripper-simulation-final.png"
                alt="Static stress simulation of the final gripper design"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-zinc-500 mt-3">Final Design</p>
          </div>

        </div>

        <div className="max-w-3xl mt-12 border-l-2 border-zinc-300 pl-6">
          <p className="text-lg text-zinc-600 leading-8">
            Worth being precise about what this shows. The stress
            response is simulated and compared directly against the
            original. The compliant grip was <em>preserved by
            constraint</em> — through the hinge definition and
            displacement limits that shaped every optimization run —
            rather than measured. Force-deflection was never
            characterized on a rig.
          </p>
        </div>

      </section>


      {/* Results */}
      <section className="bg-zinc-50 px-8 py-24">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Results
          </p>

          <h2 className="text-4xl font-bold mt-4">
            130 g to 71 g — and it prints.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white rounded-2xl p-8 border border-zinc-200">
              <p className="text-5xl font-bold">59 g</p>
              <p className="text-zinc-600 mt-3 leading-7">
                removed from the finger, 130 g down to 71 g
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-zinc-200">
              <p className="text-5xl font-bold">45%</p>
              <p className="text-zinc-600 mt-3 leading-7">
                lighter, at a comparable simulated stress distribution
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-zinc-200">
              <p className="text-5xl font-bold">PLA</p>
              <p className="text-zinc-600 mt-3 leading-7">
                printed on FDM from the final geometry
              </p>
            </div>

          </div>

          <p className="text-lg text-zinc-600 max-w-3xl mt-12 leading-8">
            The final geometry printed in PLA and was checked by hand —
            squeezing the finger to feel whether it bent the way the
            simulation predicted and sprang back. It did. That&apos;s a
            sanity check rather than a characterization, but it
            confirmed the part was real and that the compliance survived
            the material that came out of it.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            <div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <Image
                  src="/soft-gripper/gripper-final.png"
                  alt="Final 3D-printable soft gripper geometry"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
              <p className="text-sm text-zinc-500 mt-3">
                Final, print-ready geometry
              </p>
            </div>

            <div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                <Image
                  src="/soft-gripper/real_print.png"
                  alt="The optimized gripper finger printed in PLA, flexing under hand pressure"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
              <p className="text-sm text-zinc-500 mt-3">
                The printed finger in PLA — flexing under hand pressure
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Limitations & Next Steps */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Limitations &amp; Next Steps
        </p>

        <h2 className="text-4xl font-bold mt-4">
          What I&apos;d do with another cycle.
        </h2>

        <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
          The project ended at a validated, printed part. Three things
          would take it from a working prototype to something you could
          put on a harvester.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="border border-zinc-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">
              Characterize the compliance
            </h3>
            <p className="text-zinc-600 mt-3 leading-7">
              Clamp the fixed border, load the fingertip in known
              increments, and measure deflection — producing
              force-deflection curves for the original and optimized
              parts to quantify what the 45% actually cost.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Cycle it to failure</h3>
            <p className="text-zinc-600 mt-3 leading-7">
              A harvesting gripper closes thousands of times a day.
              Static stress says nothing about fatigue at the thinned
              sections, which is where a lightweighted flexure would
              be expected to go first.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold">
              Test against real produce
            </h3>
            <p className="text-zinc-600 mt-3 leading-7">
              The requirement was gripping without bruising. That is
              ultimately a claim about fruit, and it needs damage
              rates across a range of sizes, ripeness, and surface
              conditions to be settled.
            </p>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t border-zinc-200 px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
          <span>William Chen • Robotics &amp; Automation</span>
          <Link href="/robotics" className="hover:text-zinc-900 transition">
            ← Back to Robotics
          </Link>
        </div>
      </footer>

    </main>
  );
}

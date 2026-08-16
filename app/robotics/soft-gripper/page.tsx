import Link from "next/link";
import Navbar from "../../components/Navbar";
import Image from "next/image";

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
          Soft Gripper Weight & Rigidity Optimization
        </h1>

        <p className="text-xl text-zinc-600 max-w-3xl mt-8 leading-8">
          A flexible robotic end-effector for fruit and vegetable
          harvesting, redesigned through topology optimization to cut
          weight while preserving the compliant grip needed to handle
          delicate produce without damage.
        </p>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-zinc-200 pt-10">

          <div>
            <p className="text-sm text-zinc-500 uppercase">
              Project Type
            </p>
            <p className="font-semibold mt-2">
              University Project (MSE 812)
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500 uppercase">
              Technologies
            </p>
            <p className="font-semibold mt-2">
              SolidWorks • Topology Optimization • FEA
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500 uppercase">
              My Role
            </p>
            <p className="font-semibold mt-2">
              Topology Optimization & Simulation
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
            From flexible concept to a lighter, printable gripper.
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            Completed as a three-person team project, this project
            designed a flexible end-effector for robotic fruit and
            vegetable harvesting — a gripper that can conform to
            irregular produce shapes while applying enough force to
            hold it without bruising or damaging it. I led the
            topology optimization work used to cut the gripper&apos;s
            weight while preserving its structural strength and
            compliant grip.
          </p>

        </div>

      </section>


      {/* Specific Requirements */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Design Requirements
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Specific Requirements
        </h2>

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
            <h3 className="font-semibold mt-2">
              Size & Scalability
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              Accommodate a range of object sizes and shapes.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">02</p>
            <h3 className="font-semibold mt-2">
              Material Selection
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              TPU, TPE, or flexible PLA.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">03</p>
            <h3 className="font-semibold mt-2">
              Geometry
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              Flexibility and deformation while maintaining
              structural integrity.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">04</p>
            <h3 className="font-semibold mt-2">
              Robustness & Reliability
            </h3>
            <p className="text-sm text-zinc-600 mt-3">
              Stress analysis and simulation to confirm the design
              withstands repeated use.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-xl p-6">
            <p className="text-sm text-zinc-500">05</p>
            <h3 className="font-semibold mt-2">
              Texture & Surface Finish
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


      {/* My Contribution — Topology Optimization */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          My Contribution
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Topology Optimization & Weight Reduction
        </h2>

        <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
          I designed and ran the gripper finger through SolidWorks&apos;
          topology optimization tool across several iterations, using
          five steps: create the mesh, define the material, define the
          hinge, define the fixed border, and evaluate the resulting
          stress plane. For each iteration I varied the mesh density,
          boundary conditions, displacement constraint, and target mass
          reduction, then ran a static stress simulation on the result to
          weigh strength retained against weight removed.
        </p>

        {/* Optimization Process */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white rounded-2xl p-6 border border-zinc-200">
            <p className="text-sm text-zinc-500">01</p>
            <h3 className="text-xl font-semibold mt-3">
              Mesh & Material
            </h3>
            <p className="text-zinc-600 mt-3 leading-7">
              Built the FEA mesh and defined the base material for
              each optimization run.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-zinc-200">
            <p className="text-sm text-zinc-500">02</p>
            <h3 className="text-xl font-semibold mt-3">
              Hinge & Border
            </h3>
            <p className="text-zinc-600 mt-3 leading-7">
              Defined the grip hinge point and fixed outer border
              constraining the optimization.
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

        {/* Topology Optimization Image */}
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


      {/* Validation — Simulation */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Validation
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Initial vs. Final Design Simulation
          </h2>

          <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
            To validate the optimized geometry, I ran static stress
            simulations on the original finger design and the final
            topology-optimized design under the same load conditions.
            The final design kept a comparable stress distribution
            while removing significant material.
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
              <p className="text-sm text-zinc-500 mt-3">
                Initial Design
              </p>
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
              <p className="text-sm text-zinc-500 mt-3">
                Final Design
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Results */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-sm tracking-widest text-zinc-500 uppercase">
          Results
        </p>

        <h2 className="text-4xl font-bold mt-4">
          130g to 71g — roughly 45% lighter.
        </h2>

        <p className="text-lg text-zinc-600 max-w-3xl mt-8 leading-8">
          The final iteration was softened from the raw topology
          optimization output into a shape that could be 3D printed,
          cutting the gripper finger&apos;s weight from 130g to 71g
          while keeping its stress response in a similar range to the
          original design and preserving the compliant bending needed
          to grip irregular, delicate produce without damaging it.
        </p>

        <div className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <Image
              src="/soft-gripper/gripper-final.png"
              alt="Final 3D-printable soft gripper design"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-zinc-500 mt-3">
            Final, print-ready gripper geometry
          </p>
        </div>

      </section>


      {/* Conclusions */}
      <section className="bg-zinc-50 px-8 py-24">

        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-zinc-500 uppercase">
            Conclusions
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Key Takeaways
          </h2>

          <div className="grid md:grid-cols-5 gap-4 mt-12">

            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <h3 className="font-semibold">
                Energy Cost
              </h3>
              <p className="text-sm text-zinc-600 mt-3">
                Topology optimization minimized material use, reducing
                production energy cost.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <h3 className="font-semibold">
                Enhanced Flexibility
              </h3>
              <p className="text-sm text-zinc-600 mt-3">
                The optimized design adapts to a range of gripping
                scenarios.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <h3 className="font-semibold">
                Product Quality
              </h3>
              <p className="text-sm text-zinc-600 mt-3">
                Gentle handling minimizes product damage and preserves
                quality.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <h3 className="font-semibold">
                Cost-Effectiveness
              </h3>
              <p className="text-sm text-zinc-600 mt-3">
                Material savings without compromising performance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-zinc-200">
              <h3 className="font-semibold">
                Weight Reduction
              </h3>
              <p className="text-sm text-zinc-600 mt-3">
                FEA confirmed the design maintains integrity under
                varying loads.
              </p>
            </div>

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

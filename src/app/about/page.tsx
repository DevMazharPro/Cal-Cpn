import { Check, Cpu, Heart, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Cal-Cpn",
  description:
    "Learn about Cal-Cpn's mission to provide the most accurate and flexible CPN calculator for students, allowing for standard and custom institute weights.",
};

export default function AboutPage() {
  return (
    // Use 'pt-20' for consistency with other pages
    <main className="w-full bg-black text-white pb-20 pt-20">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        {/* --- Section 1: Hero --- */}
        <section className="text-center pt-12 mb-16 md:mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            About <span className="text-purple-600">Cal-Cpn</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
            We're here to bring clarity and confidence to your CPN calculations.
          </p>
        </section>

        {/* --- Section 2: Our Mission (UPDATED) --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5 flex items-center gap-3">
            <Heart className="text-purple-500" size={32} />
            Our Mission
          </h2>
          <div className="space-y-4 text-lg text-neutral-300 leading-relaxed">
            <p>
              Calculating your CPN (Composite Percentage Number) is a critical
              step in your academic journey. We understand that it can be
              confusing, stressful, and easy to miscalculate.
            </p>
            <p>
              Our mission is simple:{" "}
              <strong>to eliminate that confusion.</strong> We provide a simple,{" "}
              <strong>flexible</strong>, and 100% accurate tool so you can plan
              your future with complete confidence. No more guesswork, no more{" "}
              <strong>rigid formulas</strong>, no more complex spreadsheets—just
              a clear, instant result.
            </p>
          </div>
        </section>

        {/* --- Section 3: Our Technology --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5 flex items-center gap-3">
            <Cpu className="text-purple-500" size={32} />
            Our Technology
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            To ensure a fast, secure, and reliable experience, Cal-Cpn is built
            on a high-performance, modern tech stack. We handle the complexity
            so you get a simple, instant result.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-xl">
              <Check className="text-purple-600" size={28} />
              <span>Built with Next.js for peak performance</span>
            </li>
            <li className="flex items-center gap-3 text-xl">
              <Check className="text-purple-600" size={28} />
              <span>Reliable & Accurate Calculations</span>
            </li>
            <li className="flex items-center gap-3 text-xl">
              <Check className="text-purple-600" size={28} />
              <span>Clean, Responsive, and Well-Designed UI</span>
            </li>
          </ul>
        </section>

        {/* --- Section 4: What is CPN? (UPDATED) --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5 flex items-center gap-3">
            <BarChart3 className="text-purple-500" size={32} />
            What is CPN?
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Your CPN, or Composite Percentage Number, is a weighted average
            score used by many universities for admissions. A common formula is:
          </p>
          <ul className="list-disc list-inside text-lg text-neutral-300 space-y-2 mt-4 ml-2">
            <li>Matriculation (10% Weight)</li>
            <li>Intermediate (40% Weight)</li>
            <li>Entrance Test (50% Weight)</li>
          </ul>
          <p className="text-lg text-neutral-300 leading-relaxed mt-4">
            <strong>
              However, many universities set their own custom weights.
            </strong>{" "}
            That's why our tool allows you to{" "}
            <strong>set your own percentages</strong> for each category, giving
            you a perfectly tailored calculation for your specific institution.
          </p>
        </section>

        {/* --- Section 5: Call to Action (CTA) (UPDATED) --- */}
        <section className="text-center mt-20 p-8 bg-neutral-900 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Calculate?</h2>
          <p className="text-xl text-neutral-300 mb-6">
            Get your free, accurate CPN in seconds, using the standard formula
            or your own custom weights.
          </p>
          <Link
            href="/calculate"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-colors text-lg"
          >
            Calculate Your CPN Now
            <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </main>
  );
}

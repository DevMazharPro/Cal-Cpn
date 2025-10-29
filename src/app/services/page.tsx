import { Metadata } from "next";
import Link from "next/link";
import { Calculator, BookOpen, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Cal-Cpn",
  description:
    "Explore the services offered by Cal-Cpn, including our free and accurate CPN calculator, detailed informational guides, and high-performance user experience.",
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-black text-white pb-20 pt-20">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        <section className="text-center pt-12 mb-16 md:mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Our <span className="text-purple-600">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
            We are dedicated to providing the best tools for your academic
            success.
          </p>
        </section>

        <section className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 bg-neutral-900 rounded-lg">
            <div className="flex-shrink-0 p-4 bg-purple-900/50 rounded-lg">
              <Calculator size={40} className="text-purple-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Accurate CPN Calculator
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Our primary service is a free, instant, and 100% accurate CPN
                calculator. We use the official weighted formula (10% Matric,
                40% Inter, 50% Test) to ensure you get a reliable result every
                single time.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 bg-neutral-900 rounded-lg">
            <div className="flex-shrink-0 p-4 bg-purple-900/50 rounded-lg">
              <BookOpen size={40} className="text-purple-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Clear Informational Guides
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                {/* FIX: Replaced " with &quot; */}
                Understanding &quot;what&quot; CPN is and &quot;why&quot; it
                matters is just as important as calculating it. Our guides and
                &quot;About&quot; section break down complex admission topics
                into simple, easy-to-understand information.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 bg-neutral-900 rounded-lg">
            <div className="flex-shrink-0 p-4 bg-purple-900/50 rounded-lg">
              <Zap size={40} className="text-purple-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                High-Performance Experience
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed">
                {/* FIX: Replaced ' with &apos; */}
                This site is built on modern Next.js technology, meaning
                it&apos;s incredibly fast, secure, and fully responsive on all
                devices. No lag, no distracting ads, just the tools you need.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mt-20 p-8 bg-neutral-800 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Use Our Main Service?
          </h2>
          <p className="text-xl text-neutral-300 mb-6">
            Get your free, accurate CPN in seconds.
          </p>
          <Link
            href="/calculate"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-colors text-lg"
          >
            Calculate Your CPN
            <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </main>
  );
}

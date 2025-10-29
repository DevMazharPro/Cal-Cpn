import { ArrowBigRight, ArrowBigDown, Check } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage | Cal-Cpn",
};

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full md:min-h-screen flex pt-30 md:pt-0 pb-10 md:pb-0 items-center">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-5/12 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Worry About Your{" "}
              <span className="text-purple-600 text-3xl sm:text-4xl lg:text-5xl">
                CPN
              </span>{" "}
              Calculation? Let Us{" "}
              <span className="text-purple-600 text-3xl sm:text-4xl lg:text-5xl">
                Tackle
              </span>{" "}
              This.
            </h1>
          </div>
          <div className="w-full md:w-7/12 relative aspect-[4/3] sm:aspect-video md:aspect-[3/2] flex md:justify-center items-center">
            <Image
              src="/landing.png"
              alt="CPN Calculation landing page illustration"
              fill
              className="object-contain md:object-right"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="w-full py-20 border-t border-neutral-800 bg-black text-white">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="text-3xl font-bold">
            We are <span className="text-purple-600">built</span> on Next.js
            Technology!
          </h2>
          <ul className="mt-8 space-y-4 inline-flex flex-col items-start text-xl sm:text-2xl">
            <li className="flex items-center gap-3">
              <Check className="text-purple-600" size={28} />
              <span>Well-Designed UI</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-purple-600" size={28} />
              <span>No Errors</span>
            </li>
            <li className="flex items-center gap-3">
              <Check className="text-purple-600" size={28} />
              <span>Optimized Performance</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full py-20 border-t border-neutral-800 bg-black text-white">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Get Your CPN in 3 Simple Steps
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex-1 w-full rounded-lg py-10 px-6 text-center text-lg font-extrabold font-mono bg-neutral-800">
              {/* FIX: Replaced " with &quot; */}
              <p>Click The &quot;Calculate Cpn&quot; Button.</p>
            </div>
            <div className="hidden md:block">
              <ArrowBigRight size={40} className="text-purple-600" />
            </div>
            <div className="block md:hidden">
              <ArrowBigDown size={40} className="text-purple-600" />
            </div>
            <div className="flex-1 w-full rounded-lg py-10 px-6 text-center text-lg font-extrabold font-mono bg-neutral-800">
              <p>Put Your Details</p>
            </div>
            <div className="hidden md:block">
              <ArrowBigRight size={40} className="text-purple-600" />
            </div>
            <div className="block md:hidden">
              <ArrowBigDown size={40} className="text-purple-600" />
            </div>
            <div className="flex-1 w-full rounded-lg py-10 px-6 text-center text-lg font-extrabold font-mono bg-neutral-800">
              <p>Get Your Cpn In Seconds.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

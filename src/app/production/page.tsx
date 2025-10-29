import { Metadata } from "next";
import Link from "next/link";
import {
  Layers, // Next.js
  Atom, // React
  Palette, // Tailwind
  Type, // TypeScript
  Triangle, // Vercel
  Wand, // Lucide
  ArrowRight,
} from "lucide-react";

// SEO Metadata
export const metadata: Metadata = {
  title: "Production Tech | Cal-Cpn",
  description:
    "Learn about the high-performance technology stack used to build Cal-Cpn, including Next.js, React, Tailwind CSS, and Vercel.",
};

const techStack = [
  {
    name: "Next.js",
    description:
      "The core React framework providing server-side rendering, optimized routing, and a best-in-class developer experience.",
    icon: <Layers size={32} className="text-purple-400" />,
  },
  {
    name: "React",
    description:
      "The foundational UI library for building fast, component-based, and interactive user interfaces.",
    icon: <Atom size={32} className="text-purple-400" />,
  },
  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework that allows for rapid, custom UI development directly in the markup.",
    icon: <Palette size={32} className="text-purple-400" />,
  },
  {
    name: "TypeScript",
    description:
      "A static type-checker for JavaScript that helps catch errors early and improves code quality and maintainability.",
    icon: <Type size={32} className="text-purple-400" />,
  },
  {
    name: "Lucide React",
    description:
      "The clean, lightweight, and highly customizable icon library used throughout the entire website.",
    icon: <Wand size={32} className="text-purple-400" />,
  },
  {
    name: "Vercel",
    description:
      "The deployment platform (from the creators of Next.js) providing high-performance, global hosting.",
    icon: <Triangle size={32} className="text-purple-400" />,
  },
];

export default function ProductionPage() {
  return (
    // 'pt-20' is handled by your layout.tsx
    <main className="w-full bg-black text-white pb-20 pt-20">
      {/* Container for readable text width */}
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-10">
        {/* --- Section 1: Hero --- */}
        <section className="text-center pt-12 mb-16 md:mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Production <span className="text-purple-600">Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
            This site is built with a modern, high-performance tech stack.
          </p>
        </section>

        {/* --- Section 2: Tech Stack --- */}
        <section className="space-y-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              // Consistent "service card" style
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-neutral-900 rounded-lg"
            >
              <div className="flex-shrink-0 p-3 bg-purple-900/50 rounded-lg">
                {tech.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{tech.name}</h2>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* --- Section 3: Call to Action (CTA) --- */}
        <section className="text-center mt-20 p-8 bg-neutral-800 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Questions?</h2>
          <p className="text-xl text-neutral-300 mb-6">
            While you're here, why not run another calculation?
          </p>
          <Link
            href="/calculate" // Assumes this is the path to your calculator
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-colors text-lg"
          >
            Use the Calculator
            <ArrowRight size={20} />
          </Link>
        </section>
      </div>
    </main>
  );
}

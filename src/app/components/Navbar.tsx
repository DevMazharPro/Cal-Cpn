"use client";

import { CalculatorIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Array of nav links for easier mapping
  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/production", label: "Production Tech" },
    { href: "/services", label: "Services" },
  ];

  return (
    // 1. Use <nav> for semantics
    // 2. 'fixed' makes it stick to the top
    // 3. 'h-20' gives it a consistent height (5rem)
    // 4. 'z-50' keeps it on top of other content
    // 5. 'border-b' adds a nice separator
    <nav className="w-full fixed top-0 left-0 right-0 h-20 z-50 bg-black border-b border-neutral-800">
      {/* This inner container aligns the navbar's content 
        with your page's 'max-w-7xl' container.
        'justify-between' is much cleaner than 'justify-evenly'.
      */}
      <div className="w-full max-w-7xl h-full mx-auto px-6 sm:px-10 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="flex gap-2 items-center">
            {/* Styled icon with text-purple-600 to match theme */}
            <CalculatorIcon className="text-purple-600" size={32} />
            <span className="text-purple-500 text-2xl font-bold">Cal-Cpn</span>
          </Link>
        </div>

        {/* Links */}
        <nav>
          <ul className="hidden md:flex gap-6 text-lg font-mono">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-purple-400 ${
                    pathname === link.href ? "text-purple-400" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Call-to-Action Button */}
        <div>
          {/* A Link styled as a button is the correct pattern. */}
          <Link
            href="/calculate"
            className="bg-purple-700 px-4 py-2 rounded font-medium hover:bg-purple-800 transition-colors"
          >
            Calculate CPN
          </Link>
        </div>
      </div>
      {/* Add a Mobile Menu button here later */}
    </nav>
  );
};

export default Navbar;

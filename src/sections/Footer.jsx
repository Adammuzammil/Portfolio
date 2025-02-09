import { ArrowUpRight } from "lucide-react";
import React from "react";

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com",
    aria: "Visit my GitHub profile",
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
    aria: "Visit my Instagram profile",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    aria: "Visit my LinkedIn profile",
  },
  {
    title: "Twitter",
    href: "https://twitter.com",
    aria: "Visit my Twitter profile",
  },
];

const navigationLinks = [
  { title: "About", href: "/about" },
  { title: "Work", href: "/work" },
  { title: "Contact", href: "/contact" },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-lime-400 text-black px-6 py-20 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12">
          <figure className="w-full max-w-[350px] md:max-w-[150px] relative">
            <img
              src="/assets/images/interested.png"
              alt="Illustration of contact concept"
              className="w-full object-cover drop-shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:scale-105"
              loading="lazy"
              width={350}
              height={350}
            />
          </figure>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
            Great things can happen <br />
            with a simple <span className="whitespace-nowrap">"hello!"</span>
          </h2>

          <div className="flex justify-center md:justify-start">
            <a
              href="mailto:adammuzammil1998@gmail.com"
              className="flex items-center gap-2 border-2 border-black py-3 px-6 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              role="button"
              aria-label="Contact me"
            >
              Contact me <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Footer Links */}
        <nav className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black pt-8">
          <div>
            <h3 className="text-xl font-semibold">Adam</h3>
            <a
              href="mailto:adammuzammil@mail.com"
              className="mt-3 font-medium text-lg hover:underline focus:underline"
              aria-label="Send email to Adam"
            >
              adammuzammil1998@gmail.com
            </a>
          </div>

          <div className="space-y-3 text-lg">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block hover:underline focus:underline"
                aria-label={`Navigate to ${link.title} page`}
              >
                {link.title}
              </a>
            ))}
          </div>

          <div className=" space-y-3 text-lg">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center justify-between gap-1 font-medium hover:underline focus:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.aria}
              >
                {link.title}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </nav>

        {/* Copyright */}
        <div className="border-t border-black mt-8 pt-4 text-center md:text-left">
          <p className="text-lg">
            &copy; {currentYear} Adam. &nbsp; ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

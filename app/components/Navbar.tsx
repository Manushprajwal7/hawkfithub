"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = ["Services", "About Us", "Pricing", "Reviews"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        item.toLowerCase().replace(" ", "-")
      );
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-card py-4 px-6 fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" onClick={() => scrollToSection("home")}>
            <h1 className="text-2xl font-bold">The Hawk Fit Hub</h1>
          </Link>
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`hover:text-primary transition-colors ${
                activeSection === item.toLowerCase().replace(" ", "-")
                  ? "text-primary"
                  : ""
              }`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase().replace(" ", "-"));
              }}
            >
              {item}
            </motion.a>
          ))}
          <Link href="/register">
            <Button variant="secondary">Join Us</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden mt-4 space-y-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`block py-2 px-4 hover:bg-secondary transition-colors ${
                activeSection === item.toLowerCase().replace(" ", "-")
                  ? "bg-secondary"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase().replace(" ", "-"));
              }}
            >
              {item}
            </a>
          ))}
          <Link href="/register" className="block">
            <Button className="w-full" variant="secondary">
              Join Us
            </Button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

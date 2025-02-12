"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold">The Hawk Fit Hub</h3>
            <p className="text-gray-400">
              Transform Your Body, Elevate Your Mind
            </p>
          </motion.div>
          <motion.div
            className="flex space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/the_hawk_fit_hub/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center text-gray-400 text-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          &copy; {new Date().getFullYear()} The Hawk Fit Hub. All rights
          reserved.
        </motion.div>
      </div>
    </footer>
  );
}

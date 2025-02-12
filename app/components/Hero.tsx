"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <Image
        src="/gym_backdrop.webp"
        alt="Gym Background"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container mx-auto text-center relative z-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/gym_logo.jpg?height=200&width=200"
            alt="The Hawk Fit Hub Logo"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to The Hawk Fit Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transform Your Body, Elevate Your Mind
          </p>
          <Link href="/register">
            <Button size="lg" className="text-lg px-8 py-6">
              Join Us Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

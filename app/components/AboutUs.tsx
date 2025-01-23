"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About The Hawk Fit Hub
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/gym_logo.jpg?height=400&width=600"
              alt="Gym Interior"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              At The Hawk Fit Hub, we&#39;re committed to helping you achieve
              your fitness goals and lead a healthier lifestyle. Our
              state-of-the-art facility and expert trainers are here to support
              you every step of the way.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>24/7 access to our fully-equipped gym</li>
              <li>Personalized training programs</li>
              <li>Wide range of group fitness classes</li>
              <li>Supportive and motivating community</li>
              <li>Clean and safe environment</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

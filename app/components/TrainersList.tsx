"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";
import Image from "next/image";

const trainers = [
  {
    name: "Sinu Mathew",
    specialty: "Strength & Conditioning",
    bio: "Certified strength coach with 12 years of experience in powerlifting and athletic performance training. Specializes in functional movement patterns and injury prevention.",
    image: "/trainers/strength-trainer.jpg",
  },
  {
    name: "Sinu Mathew",
    specialty: "HIIT & Functional Training",
    bio: "ACE-certified trainer with expertise in high-intensity interval training and metabolic conditioning. Creates challenging yet scalable workouts for all fitness levels.",
    image: "/trainers/hiit-trainer.jpg",
  },
  {
    name: "Sinu Mathew",
    specialty: "Physiotherapy",
    bio: "Licensed physiotherapist with 8 years of clinical experience. Specializes in post-rehabilitation training, mobility improvement, and pain management techniques.",
    image: "/trainers/physio-trainer.jpg",
  },
  {
    name: "Sinu Mathew",
    specialty: "Nutrition & Wellness",
    bio: "Registered dietitian and certified nutrition specialist. Develops personalized meal plans that complement fitness goals while promoting sustainable lifestyle changes.",
    image: "/trainers/nutrition-trainer.jpg",
  },
];

export default function TrainersList() {
  return (
    <section id="trainers" className="py-10 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Trainers
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Our certified professionals bring expertise, passion, and personalized
          attention to every session.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={`${trainer.name}-${trainer.specialty}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-700 text-white h-full hover:bg-gray-600 transition-colors flex flex-col">
                <div className="relative w-full h-48">
                  <Image
                    src={trainer.image}
                    alt={`${trainer.name} - ${trainer.specialty}`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="items-center text-center px-6 pt-6 pb-2">
                  <CardTitle className="text-yellow-400 text-xl">
                    {trainer.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-semibold text-lg">
                    {trainer.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 flex-grow">
                  <p className="text-gray-300 text-center">{trainer.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

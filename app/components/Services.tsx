"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { Dumbbell, Users, Heart, Brain } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "State-of-the-Art Equipment",
    description: "Access to the latest fitness technology and equipment",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Personalized guidance from certified fitness professionals",
  },
  {
    icon: Heart,
    title: "Diverse Classes",
    description: "Wide range of group fitness classes for all levels",
  },
  {
    icon: Brain,
    title: "Wellness Programs",
    description:
      "Holistic approach to health with nutrition and mindfulness programs",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-700 text-white h-full">
                <CardHeader>
                  <service.icon className="w-12 h-12 mb-4 text-yellow-400" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

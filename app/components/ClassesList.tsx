"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";

const classes = [
  {
    name: "Zumba",
    description: "Dance your way to fitness with this fun cardio workout",
    schedule: "Sat 10:00 AM",
  },
  {
    name: "HIIT",
    description: "High-intensity interval training for maximum calorie burn",
    schedule: "Tue, Thu 6:00 PM",
  },
  {
    name: "Personal Training",
    description: "One-on-one customized workouts with certified trainers",
    schedule: "Mon, Wed, Fri 8:00 AM",
  },
  {
    name: "Strength Training",
    description: "Build muscle and increase your overall strength",
    schedule: "Mon, Wed, Fri 5:00 PM",
  },
  {
    name: "Physiotherapy",
    description:
      "Rehabilitation and injury prevention with licensed therapists",
    schedule: "Tue, Thu 7:00 AM",
  },
  {
    name: "Nutrition Coaching",
    description: "Personalized meal plans and dietary guidance",
    schedule: "Mon, Wed 7:00 PM",
  },
];

export default function ClassesList() {
  return (
    <section id="classes" className="py-15 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Classes We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-700 text-white h-full">
                <CardHeader>
                  <CardTitle className="text-yellow-400">
                    {classItem.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {classItem.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-400 font-semibold">
                    Schedule: {classItem.schedule}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    name: "Yoga",
    description: "Find your inner peace and improve flexibility",
    schedule: "Mon, Wed, Fri 8:00 AM",
  },
  {
    name: "HIIT",
    description: "High-intensity interval training for maximum calorie burn",
    schedule: "Tue, Thu 6:00 PM",
  },
  {
    name: "Strength Training",
    description: "Build muscle and increase your overall strength",
    schedule: "Mon, Wed, Fri 5:00 PM",
  },
  {
    name: "Spin Class",
    description: "Intense cardio workout on stationary bikes",
    schedule: "Tue, Thu 7:00 AM",
  },
  {
    name: "Zumba",
    description: "Dance your way to fitness with this fun cardio workout",
    schedule: "Sat 10:00 AM",
  },
  {
    name: "Pilates",
    description: "Improve your core strength and posture",
    schedule: "Mon, Wed 7:00 PM",
  },
];

export default function ClassesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {classes.map((classItem, index) => (
        <motion.div
          key={classItem.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-card text-card-foreground h-full">
            <CardHeader>
              <CardTitle>{classItem.name}</CardTitle>
              <CardDescription>{classItem.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-primary font-semibold">
                Schedule: {classItem.schedule}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

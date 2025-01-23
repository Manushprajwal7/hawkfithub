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
    name: "John Doe",
    specialty: "Strength Training",
    bio: "With 10 years of experience, John specializes in helping clients build muscle and increase overall strength.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Jane Smith",
    specialty: "Yoga and Pilates",
    bio: "Jane is a certified yoga and Pilates instructor with a passion for helping clients improve flexibility and core strength.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mike Johnson",
    specialty: "HIIT and Cardio",
    bio: "Mike is an energetic trainer who loves pushing clients to their limits with high-intensity workouts.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Brown",
    specialty: "Nutrition and Weight Loss",
    bio: "Sarah combines exercise science with nutrition expertise to help clients achieve their weight loss goals.",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function TrainersList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {trainers.map((trainer, index) => (
        <motion.div
          key={trainer.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-card text-card-foreground h-full">
            <CardHeader>
              <Image
                src={trainer.image || "/placeholder.svg"}
                alt={trainer.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4"
              />
              <CardTitle>{trainer.name}</CardTitle>
              <CardDescription className="text-primary">
                {trainer.specialty}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{trainer.bio}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

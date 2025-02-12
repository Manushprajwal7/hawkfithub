"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: " Vino Theya",
    rating: 5,
    text: "This gym has been an amazing experience for me. The trainers are approachable and genuinely care about your progress. The atmosphere is warm and inviting, making it feel less like a gym and more like a family. It’s a place where you feel motivated and supported every step of the way",
  },
  {
    name: " Sarath Ak",
    rating: 5,
    text: "This gym offers a fantastic atmosphere for achieving your fitness goals. The equipment is modern and well-maintained, making workouts enjoyable. The staff is friendly and always available to provide assistance or guidance. Cleanliness is a clear priority, ensuring a comfortable experience for all members. Overall, I highly recommend this gym for anyone seeking a positive and productive workout environment.Thanks THE HAWK FIT HUB",
  },
  {
    name: "Alan sibi",
    rating: 5,
    text: "Very nice gym for beginners and very helpful trainers and people around you. They can bring the best out of u.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What Our Members Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-700 text-white h-full">
                <CardHeader>
                  <CardTitle>{review.name}</CardTitle>
                  <CardDescription className="text-yellow-400 flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{review.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

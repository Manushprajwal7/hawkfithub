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
    name: "Abhishek .",
    rating: 5,
    text: "The Hawk Fit Hub has transformed my fitness journey. The trainers are exceptional!",
  },
  {
    name: "Rakshith R.",
    rating: 4,
    text: "Great variety of classes and top-notch equipment. Highly recommended!",
  },
  {
    name: "Joseph J Mathew .",
    rating: 5,
    text: "The community here is amazing. I've made great friends and achieved my fitness goals.",
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

"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/ui/card";
import Link from "next/link";

const plans = [
  {
    name: "3 Months + 1 Month Free",
    price: 3499,
    features: [
      "Access to gym equipment",
      "Locker room access",
      "Free weights area",
    ],
  },
  {
    name: "6 Months + 2 Months Free",
    price: 5499,
    features: [
      "All 3 Months features",
      "2 group classes per week",
      "Personalized workout plan",
    ],
  },
  {
    name: "12 Months + 3 Months Free",
    price: 6999,
    features: [
      "All 6 Months features",
      "Unlimited group classes",
      "2 personal training sessions/month",
      "Nutrition consultation",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Membership Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card text-card-foreground h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside text-muted-foreground">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={`/register?plan=${plan.name}`} className="w-full">
                    <Button className="w-full">Choose Plan</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    text: "This gym has been an amazing experience for me. The trainers are approachable and genuinely care about your progress. The atmosphere is warm and inviting, making it feel less like a gym and more like a family. It's a place where you feel motivated and supported every step of the way",
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
              <Card className="bg-gray-700 text-white h-full relative">
                {/* Google Reviews Tag */}
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                  Sourced from Google Reviews
                </div>

                <CardHeader className="pt-12">
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

      {/* Google Maps Location Section */}
      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Find Us Here</h3>
          <p className="text-gray-300 text-lg">
            Visit our gym and start your fitness journey today
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Map Container */}
          <div className="order-2 lg:order-1">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62204.778322218476!2d77.62654800471985!3d12.881297996141642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15645dbe445b%3A0xd014b25783a1e7e2!2sThe%20HAWK%20Fit%20Hub!5e0!3m2!1sen!2sin!4v1718798326123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Hawk Fit Hub Location"
                  />

                  {/* Overlay with gym name */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <p className="font-semibold text-sm">📍 The Hawk Fit Hub</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  📍 Gym Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">Address:</h4>
                  <p className="text-gray-400">
                    20th Cross Rd, 1st Block, Vishwapriya Layout, Begur
                    <br />
                    Bengluru, Karnataka - 560068
                  </p>
                </div>

                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">
                    Contact : Sinu Mathew
                  </h4>
                  <p className="text-gray-400">📞 +91 80757 19470</p>
                </div>

                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">Hours:</h4>
                  <div className="text-gray-400 space-y-1">
                    <p>🌅 Monday - Saturday: 5:00 AM - 11:00 PM IST </p>
                    <p>🌟 Sunday: 7:00 AM - 8:00 PM IST </p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://www.google.com/maps/place/The+HAWK+Fit+Hub/@12.8812985,77.6289147,17z/data=!4m6!3m5!1s0x3bae15645dbe445b:0xd014b25783a1e7e2!8m2!3d12.8812985!4d77.6314896!16s%2Fg%2F11vz3vfd7r!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    🗺️ Get Directions
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🚗</div>
                  <p className="text-white font-semibold text-sm">
                    Free Parking
                  </p>
                  <p className="text-gray-400 text-xs">Available</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🚇</div>
                  <p className="text-white font-semibold text-sm">
                    Metro Access
                  </p>
                  <p className="text-gray-400 text-xs">10 min walk</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

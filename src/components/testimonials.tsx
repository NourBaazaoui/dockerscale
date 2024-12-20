"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "DockerScale has revolutionized our deployment process. It's fast, reliable, and incredibly easy to use.",
    author: "Jane Doe",
    position: "CTO, Tech Innovators Inc.",
    avatar: "/placeholder.svg",
  },
  {
    quote:
      "The live execution logs have been a game-changer for our team. We can troubleshoot issues in real-time.",
    author: "John Smith",
    position: "Lead Developer, Future Systems",
    avatar: "/placeholder.svg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full shadow-md mr-4"
                />
                <div>
                  <p className="text-lg font-bold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

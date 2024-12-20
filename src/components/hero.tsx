"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-blue-500 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/30 to-transparent"></div>
      <div className="container mx-auto text-center relative z-10">
        {/* Titre principal */}
        <motion.h1
          className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Effortless Docker Execution at Scale
        </motion.h1>

        {/* Paragraphe descriptif */}
        <motion.p
          className="text-xl mb-8 text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Run, Monitor, and Scale Dockerized workloads with our platform integrated with AWS ECS.
        </motion.p>

        {/* Boutons avec animations */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold transition-transform transform hover:scale-105"
          >
            Request Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-700 transition-transform transform hover:scale-105"
          >
            Sign Up
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

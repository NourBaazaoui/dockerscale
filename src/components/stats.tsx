"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Functions Executed Daily" },
  { value: "99.99%", label: "Uptime" },
  { value: "500+", label: "Satisfied Enterprises" },
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Section Background avec effet radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4f94d4,_transparent)] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-lg hover:scale-105 transition-transform transform border border-white/20"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Valeur principale */}
              <div className="text-5xl font-extrabold text-yellow-400 mb-2 drop-shadow-lg">
                {stat.value}
              </div>
              {/* Texte descriptif */}
              <div className="text-lg font-medium text-gray-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

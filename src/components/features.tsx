"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, BarChart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Function Deployment",
    description: "Deploy your Docker functions with enterprise-grade security.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Terminal,
    title: "Live Execution Logs",
    description: "Monitor your functions in real-time with detailed logs.",
    color: "from-green-500 to-green-700",
  },
  {
    icon: BarChart,
    title: "AWS Resource Optimization",
    description: "Optimize your AWS resources for cost-effective scaling.",
    color: "from-yellow-500 to-yellow-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Key Features</h2>

        {/* Grid des Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icone avec dégradé */}
              <div
                className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-md`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

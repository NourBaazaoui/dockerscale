"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Gem, Star, Briefcase } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    icon: Star,
    color: "bg-blue-500", // Bleu vif
    gradient: "from-blue-500 to-blue-700",
    features: ["100 Function Executions/month", "Basic Monitoring", "Community Support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$99/month",
    icon: Gem,
    color: "bg-purple-500", // Violet
    gradient: "from-purple-500 to-purple-700",
    features: ["Unlimited Function Executions", "Advanced Monitoring", "Priority Support", "Custom Integrations"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    icon: Briefcase,
    color: "bg-orange-500", // Orange vif
    gradient: "from-orange-500 to-orange-700",
    features: ["Unlimited Everything", "Dedicated Support", "On-Premise Deployment", "SLA Guarantee"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Secure Function Deployment</h2>
        <p className="text-lg text-gray-600 mb-12">Choose the right plan for your needs</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-xl shadow-lg bg-gradient-to-br ${plan.gradient} text-white`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Plan Header */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full ${plan.color} shadow-lg`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-6 mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-300 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-2 font-semibold hover:scale-105 transition-transform ${
                  plan.name === "Pro" ? "bg-white text-purple-500" : "bg-white text-gray-800"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

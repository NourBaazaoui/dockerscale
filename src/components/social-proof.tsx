'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Company 1', logo: '/placeholder.svg' },
  { name: 'Company 2', logo: '/placeholder.svg' },
  { name: 'Company 3', logo: '/placeholder.svg' },
  { name: 'Company 4', logo: '/placeholder.svg' },
]

export default function SocialProof() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Trusted by <span className="text-blue-600">Industry Leaders</span>
        </h2>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={70}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { BarChart3, Settings, Award } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: "Foster Ideas",
    description: "T-TARGET, AGS-MINI, NIGHTINAGLE, YOGA-NIDRA, I-CODE, BLUE–CLOUD",
  },
  {
    icon: Settings,
    title: "Developed Ideas",
    description: "AGP-PLUS, Sanjivani",
  },
  {
    icon: Award,
    title: "Grants",
    description: "NIDHIPRAYAS, Startup Odisha, BIG ( BIRAC )",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

const shakeAnimation: Variants = {
  hover: {
    x: [0, -3, 3, -3, 3, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
};

export function FeaturesSection() {
  return (
    <section className="relative bg-[#1d417b]">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -z-10">
        <svg
          className="relative block w-full h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1d417b"
            fillOpacity="0.2"
            d="M0,256L48,245.3C96,235,192,213,288,224C384,235,480,277,576,293.3C672,309,768,299,864,293.3C960,288,1056,288,1152,288C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path
            fill="#1d417b"
            fillOpacity="0.4"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-24">
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-24 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          Innovate. Develop. Achieve.
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 relative mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col items-center ${index === 1 ? 'md:-mt-16' : ''}`}
              variants={itemVariants}
            >
              <motion.div 
                className="w-64 h-64 rounded-full bg-white flex flex-col items-center justify-center shadow-lg group relative overflow-hidden cursor-pointer mb-8"
                whileHover="hover"
                variants={shakeAnimation}
              >
                <feature.icon className="h-20 w-20 text-[#1d417b] group-hover:text-yellow-400 transition-colors duration-300" />
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-200 text-center tracking-wider leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden -z-10">
        <svg
          className="relative block w-full h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1d417b"
            fillOpacity="0.2"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path
            fill="#1d417b"
            fillOpacity="0.4"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

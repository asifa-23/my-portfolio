'use client'
import { motion } from 'framer-motion'
import { FiCode, FiUsers, FiAward } from 'react-icons/fi'

export default function About() {
  const stats = [
    { icon: <FiCode />, value: '2+', label: 'Projects Completed' },
    { icon: <FiUsers />, value: '2', label: 'Internships' },
    { icon: <FiAward />, value: '8.7', label: 'CGPA' },
  ]

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-6xl font-bold">
              PHOTO
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm a Java Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a recent B.Tech graduate in Artificial Intelligence and Data Science from 
              Annamacharya Institute of Technology & Sciences with a strong foundation in Java 
              full stack development. I've completed professional internships at Wipro TalentNext 
              and have hands-on experience building secure, scalable web applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I love working with Java, Spring Boot, React, Node.js, and databases like MySQL 
              and MongoDB. I've successfully deployed applications on AWS and implemented secure 
              authentication systems. Currently seeking opportunities to contribute to innovative 
              projects and grow as a developer.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                >
                  <div className="text-3xl text-blue-600 dark:text-blue-400 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker,
  FaAws, FaFigma, FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql,
  SiTypescript, SiExpress, SiRedis, SiGraphql
} from 'react-icons/si'
import { FaJava, FaAngular } from 'react-icons/fa'
import {
  SiMysql, SiSpringboot, SiHibernate, SiPostman,
  SiEclipseide, SiJupyter
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
        { name: 'Angular', icon: <FaAngular />, color: 'text-red-600' },
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-600' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'java', icon: <FaJava />, color: 'text-red-600' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-600' },
        { name: 'Hibernate/JPA', icon: <SiHibernate />, color: 'text-brown-600' },
        { name: 'REST APIs', icon: <SiPostman />, color: 'text-orange-500' },
        { name: 'Microservices', icon: <FaDocker />, color: 'text-blue-600' },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
        { name: 'AWS EC2', icon: <FaAws />, color: 'text-orange-500' },
        { name: 'AWS RDS', icon: <FaAws />, color: 'text-orange-400' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
        { name: 'Eclipse', icon: <SiEclipseide />, color: 'text-purple-600' },
        { name: 'VS Code', icon: <VscCode/>, color: 'text-blue-500' },
      { name: 'Jupyter', icon: <SiJupyter />, color: 'text-orange-500' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

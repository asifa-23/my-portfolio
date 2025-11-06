'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
    title: 'PayGo - Mobile Prepaid Services',
    description: 'Full-stack web application for prepaid mobile recharge services with secure payment processing, role-based access control, and real-time transaction handling.',
    image: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=PayGo+App',
    tags: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'JWT', 'AWS EC2'],
    github: 'https://github.com/yourusername/paygo', // Add your actual link
    live: '#', // Add if deployed
    highlights: [
      '30% improved query performance with Hibernate/JPA optimization',
      'Supports 1,000+ concurrent users with sub-200ms response time',
      'Deployed on AWS EC2 with RDS for scalability'
    ]
  },
  
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Project+1',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.vercel.app',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Project+2',
      tags: ['React', 'Firebase', 'Tailwind', 'Redux'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.vercel.app',
    },
    
    
  ]

  return (
    <section id="projects" className="section-container bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <FiGithub size={24} className="text-gray-900" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <FiExternalLink size={24} className="text-gray-900" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

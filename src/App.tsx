import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layout,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Globe,
  Briefcase,
  Award,
  Download,
  Heart,
} from "lucide-react";
import Navbar from "./components/Navbar";
import { useInView } from "react-intersection-observer";


  const handleDownload = () => {
    const resumeUrl = "/Resume.pdf"; // Path to the file in the public folder
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Muhammad_Adeel_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
function App() {
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [techRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [footerRef, footerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden px-6 "
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10">
          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-6xl font-bold mb-6 mt-20 md:mt-0 lg:mt-0">Muhammad Adeel</h1>
            <h2 className="text-3xl text-gray-300 mb-8">
              Full Stack Web Developer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12">
              Crafting exceptional digital experiences with React, Next.js, and
              Node.js
            </p>
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <a
                href="https://github.com/adeelsarwar1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:adeel2694551@gmail.com"
                className="text-white hover:text-gray-300"
              >
                <Mail size={24} />
              </a>
            </div>
            <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center mx-auto lg:mx-0 hover:bg-gray-200 transition-colors"
      onClick={handleDownload}
    >
      <Download className="mr-2" size={20} />
      Download Resume
    </motion.button>
          </motion.div>
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/dev.png"
              alt="Muhammad Adeel"
              className="w-96 h-96 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50" />
      </section>

      {/* Tech Stack Section */}
      <section id="skills" ref={techRef} className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={techInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Tech Stack
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "React",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                color: "#61DAFB",
              },
              {
                name: "Next.js",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
                color: "#000000",
              },
              {
                name: "Node.js",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
                color: "#339933",
              },
              {
                name: "TypeScript",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                color: "#3178C6",
              },
              {
                name: "MongoDB",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
                color: "#47A248",
              },
              {
                name: "PostgreSQL",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
                color: "#336791",
              },
              {
                name: "Docker",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
                color: "#2496ED",
              },
              {
                name: "AWS",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
                color: "#FF9900",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={techInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-black/95">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={skillsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Skills & Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 mb-4" />,
                title: "Web Development",
                skills: [
                  "Custom Web Applications",
                  "Responsive Design",
                  "Performance Optimization",
                ],
              },
              {
                icon: <Server className="w-12 h-12 mb-4" />,
                title: "Backend Solutions",
                skills: [
                  "API Development",
                  "Database Design",
                  "Server Management",
                ],
              },
              {
                icon: <Briefcase className="w-12 h-12 mb-4" />,
                title: "Consulting",
                skills: ["Code Review", "Best Practices", "Team Training"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-lg text-center hover:bg-gray-800 transition-colors"
              >
                {category.icon}
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-400">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={experienceInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                title: "Web Developer",
                company: "Dopment Pvt Ltd",
                period: "2023 - 2024",
                description:
                  "Led development of enterprise web applications using React and Node.js. Implemented microservices architecture and improved application performance by 40%.",
                achievements: [
                  "Led a team of 3 developers",
                  "Contributed in 2 Projects in Organization",
                ],
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-2">
                  {experience.title}
                </h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <span>{experience.company}</span>
                  <span className="mx-2">•</span>
                  <span>{experience.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{experience.description}</p>
                <div className="space-y-2">
                  {experience.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-gray-400">
                      <Award className="w-4 h-4 mr-2 text-purple-400" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" ref={footerRef} className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-8">
              <blockquote className="text-2xl font-light italic text-gray-300 max-w-3xl mx-auto">
                "Every great developer you know got there by solving problems
                they were unqualified to solve until they actually did it."
              </blockquote>
              <p className="text-gray-400 mt-4">- Patrick McKenzie</p>
            </div>

            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="https://github.com/adeelsarwar1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:adeel2694551@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={28} />
              </a>
            </div>

            <div className="flex items-center justify-center text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500" />
              <span>by Muhammad Adeel</span>
            </div>

            <p className="text-gray-500 mt-4">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  TestTube,
  BookOpen,
  Award,
  Target,
  Users,
  Lightbulb,
} from "lucide-react";

const About: React.FC = () => {
  const skills = [
    { icon: <Code size={24} />, name: "Frontend Development", level: 75 },
    { icon: <Database size={24} />, name: "Backend Development", level: 65 },
    { icon: <TestTube size={24} />, name: "Quality Assurance", level: 70 },
    { icon: <BookOpen size={24} />, name: "Information Systems", level: 85 },
    { icon: <Award size={24} />, name: "Accounting Principles", level: 80 },
    { icon: <Target size={24} />, name: "Project Management", level: 70 },
  ];

  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description:
        "Constantly seeking creative solutions to complex problems and staying updated with latest technologies.",
    },
    {
      icon: <Target size={32} />,
      title: "Quality Focus",
      description:
        "Committed to delivering high-quality work with attention to detail in both development and testing.",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description:
        "Strong believer in teamwork and effective communication to achieve common goals.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate student combining academic excellence with practical
            skills to build a career in technology and quality assurance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                I'm currently pursuing my BSc Hons in Information Systems at
                Sabaragamuwa University of Sri Lanka, where I'm in my 2nd year.
                My academic journey has given me a strong foundation in systems
                analysis, database management, and software development
                principles.
              </p>
              <p className="mb-4">
                Alongside my university studies, I'm also pursuing Chartered
                Accountancy at CA Sri Lanka, which has enhanced my analytical
                thinking and attention to detail - skills that are invaluable in
                both development and quality assurance roles.
              </p>
              <p>
                My goal is to become a skilled full-stack developer and QA
                engineer, combining technical expertise with business acumen to
                create solutions that are not only functional but also
                strategically sound.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-primary-600 flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

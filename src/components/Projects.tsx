import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Shinee Beauty Website",
      description:
        "A modern and responsive makeup brand website designed to showcase beauty products, tutorials, and trends. Features a clean UI for exploring brands and learning makeup techniques.",
      image: "/HomePage.png", // Main image, can be changed
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      date: "2025",
      features: [
        "Responsive product brand showcases",
        "Makeup looks gallery & inspiration",
        "Expert tips & tricks tutorials",
        "Clean and accessible user interface"
      ],
      gallery: [
        "/HomePage.png",
        "/MakeupLooks.png",
        "/Tutorials.png",
        "/Products.png"
      ],
      githubUrl: "https://github.com/PraneepaTharushini/Shinee-Website", // Add link if available
      liveUrl: "#", // Add link if available
      status: "Completed",
    },
    // {
    //   id: 2,
    //   title: "E-Commerce Platform",
    //   description:
    //     "A full-stack e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, and payment integration.",
    //   image: "/api/placeholder/600/400",
    //   technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    //   category: "Full Stack",
    //   date: "2024",
    //   features: [
    //     "User authentication and authorization",
    //     "Product catalog with search and filtering",
    //     "Shopping cart and checkout process",
    //     "Payment integration with Stripe",
    //     "Admin dashboard for inventory management",
    //     "Responsive design for all devices",
    //   ],
    //   githubUrl: "#",
    //   liveUrl: "#",
    //   status: "Completed",
    // },
    // {
    //   id: 3,
    //   title: "Task Management System",
    //   description:
    //     "A collaborative task management application designed for team productivity. Includes project tracking, task assignment, and progress monitoring features.",
    //   image: "/api/placeholder/600/400",
    //   technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    //   category: "Frontend",
    //   date: "2024",
    //   features: [
    //     "Real-time collaboration features",
    //     "Task creation and assignment",
    //     "Project timeline and milestones",
    //     "Team member management",
    //     "Progress tracking and analytics",
    //     "Notifications and reminders",
    //   ],
    //   githubUrl: "#",
    //   liveUrl: "#",
    //   status: "In Progress",
    // },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "QA Testing"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing my development journey through practical projects that
            demonstrate my skills in full-stack development and quality
            assurance.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image or Gallery */}
              {project.gallery ? (
                <div className="grid grid-cols-2 gap-2 bg-gradient-to-br from-primary-100 to-secondary-100 p-4">
                  {project.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="object-cover rounded-lg w-full h-40 border"
                    />
                  ))}
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-gray-600">Project Screenshot</p>
                    <p className="text-sm text-gray-500 mt-2">{project.title}</p>
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {project.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag size={16} />
                        {project.category}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to see more projects or collaborate on something new?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'NeonFlow Platform',
    image: '/cases/neonflow.jpg',
    techStack: 'React, Node.js, Tailwind',
    service: 'Web App Development',
    link: '/case-studies/neonflow'
  },
  {
    title: 'Aura Mobile App',
    image: '/cases/aura.jpg',
    techStack: 'Flutter, Firebase',
    service: 'Mobile App Development',
    link: '/case-studies/aura'
  },
  {
    title: '3D Product Viewer',
    image: '/cases/3dviewer.jpg',
    techStack: 'Spline, React',
    service: '3D Interaction Design',
    link: '/case-studies/3dviewer'
  }
];

export default function CaseStudies() {
  return (
    <section className="w-full py-24 px-6 md:px-16 relative">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured <span className="text-[#e6002e]">Case Studies</span>
      </motion.h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {caseStudies.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-10`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 rounded-xl shadow-lg border border-white/10"
            />

            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">Tech Stack: <span className="text-white">{project.techStack}</span></p>
              <p className="text-sm text-gray-400">Service: <span className="text-white">{project.service}</span></p>
              <a
                href={project.link}
                className="inline-block mt-4 px-6 py-2 rounded-full bg-[#e6002e] text-white font-medium hover:scale-105 transition-transform shadow-[0_0_20px_#e6002e55]"
              >
                View Case Study
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

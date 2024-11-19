import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
}

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

const cardVariants = {
  hidden: (index) => ({ 
    x: index % 2 === 0 ? -100 : 100, 
    opacity: 0,
    rotateX: 30
  }),
  visible: {
    x: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "easeOut",
      duration: 0.8
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const Experience = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="border-b border-neutral-900 pb-4"
    >
        <motion.h2 
          variants={headerVariants}
          className="my-20 text-center text-4xl"
        >
          Experience
        </motion.h2>
        <motion.div>
            {EXPERIENCES.map((experience, index) => (
                <motion.div 
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                  key={index} 
                  className="mb-8 flex flex-wrap lg:justify-center"
                >
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience.role} -{" "}
                            <span className="text-sm text-purple-100">
                                {experience.company}
                            </span>
                        </h6>
                        <p className="mb-4 text-neutral-400">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Experience
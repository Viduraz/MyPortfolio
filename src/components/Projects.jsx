import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
      when: "beforeChildren"
    }
  }
}

const headerVariants = {
  hidden: { y: -100, opacity: 0, scale: 0.8 },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12,
      duration: 0.8
    }
  }
}

const cardVariants = {
  hidden: { 
    x: -100, 
    opacity: 0,
    rotateY: -20,
    scale: 0.8
  },
  visible: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.03,
    rotateY: 5,
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const imageVariants = {
  hover: {
    scale: 1.1,
    rotate: 3,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
}

const techBadgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  hover: {
    scale: 1.1,
    y: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
}

const Projects = () => {
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
          Projects
        </motion.h2>
        <motion.div>
            {PROJECTS.map((project, index) => (
                <motion.div 
                  variants={cardVariants}
                  whileHover="hover"
                  key={index} 
                  className="mb-8 flex flex-wrap lg:justify-center p-4 rounded-lg"
                >
                    <div className="w-full lg:w-1/4">
                        <motion.img
                            variants={imageVariants}
                            whileHover="hover"
                            src={project.image}
                            width={150}
                            height={150}
                            alt={project.title}
                            className="mb-6 rounded"
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <motion.span 
                                variants={techBadgeVariants}
                                whileHover="hover"
                                key={index}
                                className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 inline-block"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Projects
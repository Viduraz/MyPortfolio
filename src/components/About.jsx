import { motion } from "framer-motion";
import aboutImg from "../assets/about2.webp"
import { ABOUT_TEXT } from "../constants";

const About = () => {
  // Animation variants for text reveal
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Split text into array of letters for animation
  const titleText = "About Me".split("");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h1 
        className="my-20 text-center text-4xl flex justify-center space-x-2"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {titleText.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={letter === " " ? "text-neutral-500" : ""}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <div className="flex flex-wrap">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.2 
          }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <motion.img 
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  transition: {
                    duration: 0.5
                  }
                }}
                className="rounded-2xl shadow-lg"
                src={aboutImg}
                alt="about"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.4 
          }}
          className="w-full lg:w-1/2"
        >
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.p 
              className="my-2 max-w-xl py-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {ABOUT_TEXT}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;

import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { SiPhp, SiMysql, SiKotlin, SiJavascript } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { motion } from "framer-motion"

const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-4xl">Technologies</h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <RiReactjsLine className="text-7xl text-cyan-400"/>
      </motion.div>
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <TbBrandNextjs className="text-7xl"/>
      </motion.div>
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <SiMongodb className="text-7xl text-green-500"/>
      </motion.div>
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <DiRedis className="text-7xl text-red-700"/>
      </motion.div>
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <FaNodeJs className="text-7xl text-green-500"/>
      </motion.div>
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 3.0,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <SiPhp className="text-7xl text-purple-600"/>
      </motion.div>
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <AiFillHtml5 className="text-7xl text-orange-500"/>
      </motion.div>
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <SiMysql className="text-7xl text-blue-500"/>
      </motion.div>
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <SiKotlin className="text-7xl text-orange-600"/>
      </motion.div>
      <motion.div 
        className="rounded-2xl border-4 border-neutral-800 p-4"
        whileHover={{ scale: 1.1 }}
        animate={{ 
          y: [0, -10, 0],
          transition: {
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <SiJavascript className="text-7xl text-yellow-400"/>
      </motion.div>
    </div>
  </div>
}

export default Technologies
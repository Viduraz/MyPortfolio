import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NavBar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo"/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <motion.a 
          href="https://www.linkedin.com/in/vidurarathnayaka/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/Viduraz"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://facebook.com/vidura.ruwantha/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebook />
        </motion.a>

        <motion.a
          href="https://instagram.com/vidura_ruwantha/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaInstagram />
        </motion.a>
    </div>
 </nav>
};

export default NavBar
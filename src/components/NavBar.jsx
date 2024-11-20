import logo from '../assets/v1n.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NavBar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo"/>
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

        <motion.a
          href="https://mysliit-my.sharepoint.com/:b:/g/personal/it22075208_my_sliit_lk/ERDdk2G5hkdHpCtnJcO84CYBigg2m6pLOJzZHn15Hy3FZA?e=Mx9nst"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFileDownload />
          <span className="text-sm">Download CV</span>
        </motion.a>
    </div>
 </nav>
};

export default NavBar
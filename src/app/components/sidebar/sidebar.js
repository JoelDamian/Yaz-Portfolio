import { motion } from 'framer-motion';
import { MenuItem } from '../menu-item/menuItem';
import './sidebar.css';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Sidebar = ({ links }) => (
  <motion.ul variants={variants} className='container-sidebar'>
    {links.map((item, index) => (
      <MenuItem link={item} key={index} />
    ))}
  </motion.ul>
);

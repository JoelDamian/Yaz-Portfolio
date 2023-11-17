import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ link }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ listStyle: 'none' }}
    >
      <Link style={{ textDecoration: 'none' }} href={link.href}><p style={{ fontSize: '5vw', textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>{link.text}</p></Link>
    </motion.li>
  );
};

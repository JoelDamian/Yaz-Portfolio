'use client';
import { useRef } from 'react';
import { useCycle, motion } from 'framer-motion';
import Image from 'next/image';
import { MenuToggle } from '../menu-toggle/menuToggle';
import { useDimensions } from '@/app/hooks/useDimensions';
import { Sidebar } from '../sidebar/sidebar';
import './navbar.css';

const links = [
  { href: '/', text: 'Inicio' },
  { href: '/', text: 'Trabajos' },
  { href: '/', text: 'Contacto' }
];

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(1px at 1px 1px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <header>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className='navigator'
      >
        <div>
          <Image
            alt='logo'
            src={'/headerName.png'}
            width={80}
            height={50}
          ></Image>
        </div>
        <motion.div className='background' variants={sidebar} />
        <Sidebar links={links} />
        <div className='container-toggle'>
          <MenuToggle toggle={() => toggleOpen()} />
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;

'use client';
import { useState } from 'react';
import './carousel.css';
import Image from 'next/image';
import ArrowLeft from '../Icons/arrow-left/arrowLeft';
import ArrowRight from '../Icons/arrow-right/arrowRight';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const images = ['/pinkHouse.jpg', '/pinkFlowers.jpg', '/homeImage.jpg'];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div
      className='carousel-container'
      style={{ backgroundImage: "url('/homeBackground.jpg')" }}
    >
      <div>
        <div className='carousel-word '>
          <Image
            alt='image'
            className='carousel-image'
            src={'/logoYaz.png'}
            width={250}
            height={250}
          ></Image>
        </div>
        <div className='carousel-secondary-text-container'>
          <h6 className='carousle-secondary-text'>
            Yazita hace tu casita, con los mejores estilos
          </h6>
        </div>
      </div>
      <div className='container'>
        <motion.div
          className='box'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <button
            className='icon-button arrow-left'
            onClick={() => paginate(-1)}
          >
            <ArrowLeft />
          </button>
        </motion.div>
        <div className='container-slider'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              width={250}
              height={470}
              className='image-slider'
            />
          </AnimatePresence>
          <Image
            alt='image'
            className='carousel-image'
            src={'/mobBack.png'}
            width={250}
            height={470}
          ></Image>
        </div>
        <motion.div
          className='box'
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <button
            className='icon-button arrow-rigth'
            onClick={() => paginate(1)}
          >
            <ArrowRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

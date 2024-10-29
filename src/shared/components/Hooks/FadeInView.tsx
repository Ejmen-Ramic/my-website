import { motion } from 'framer-motion';
import React from 'react';

type FadeInViewProps = {
  children: React.ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  threshold?: number;
  duration?: number;
  delay?: number;
  easing?: [number, number, number, number];
  scale?: number;
  rotate?: number;
};

const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  direction = 'bottom',
  threshold = 0.2,
  duration = 0.3,
  delay = 0,
  easing = [0.42, 0, 0.58, 1],
  scale = 1,
  rotate = 0,
}) => {
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'top' ? -20 : direction === 'bottom' ? 20 : 0,
      x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      initial='hidden'
      variants={fadeInVariants}
      viewport={{
        once: true,
        amount: threshold,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale,
        rotate,
        transition: { duration, delay, ease: easing },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;

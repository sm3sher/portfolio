'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

type Star = {
  left: number;
  size: number;
  delay: number;
};

export default function Stars() {
  const [starCount, setStarCount] = useState<number>(0);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setStarCount(100);
      } else if (window.innerWidth >= 768) {
        setStarCount(50);
      } else {
        setStarCount(20);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const generatedStars = Array.from({ length: starCount }, () => ({
      left: Math.random() * 100,
      size: Math.random() * 12 + 10,
      delay: Math.random() * 10,
    }));
    setStars(generatedStars);
  }, [starCount]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          className="absolute top-0 rounded-full bg-[--secondary] opacity-50"
          key={index}
          initial={{ y: '-22px' }}
          animate={{ y: '100vh' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: star.delay,
          }}
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
}

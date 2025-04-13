'use client';

import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const AnimatedSparkles = ({
  className = '',
  size = 'h-4 w-4',
  color = 'text-purple-500',
}) => {
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  const getRandomRotation = () => {
    const rotations = [0, 90, 180, 270];
    return rotations[Math.floor(Math.random() * rotations.length)];
  };

  useEffect(() => {
    if (!isAnimating) return;

    const opacityInterval = setInterval(() => {
      setOpacity(prevOpacity => {
        return prevOpacity === 1 ? 0 : 1;
      });
    }, 1500);

    const rotationInterval = setInterval(() => {
      if (opacity < 0.1) {
        setRotation(getRandomRotation());
      }
    }, 100);

    return () => {
      clearInterval(opacityInterval);
      clearInterval(rotationInterval);
    };
  }, [isAnimating, opacity]);

  return (
    <div
      className={`transition-opacity duration-1500 ${className}`}
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
        transition: 'opacity 1.5s ease-in-out, transform 0.3s ease-in-out',
      }}
      onMouseEnter={() => setIsAnimating(false)}
      onMouseLeave={() => setIsAnimating(true)}
    >
      <Sparkles className={`${size} ${color}`} />
    </div>
  );
};

export { AnimatedSparkles };

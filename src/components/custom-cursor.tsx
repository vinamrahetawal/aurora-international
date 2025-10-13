'use client';

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  angle: number;
  travelX: number;
  travelY: number;
  duration: number;
}

export function CustomCursor() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 50; // Create star every 50ms

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      if (currentTime - lastTime >= throttleDelay) {
        const angle = 45 + (Math.random() - 0.5) * 30; // Random angle around 45 degrees
        const distance = 40 + Math.random() * 30;
        const angleRad = (angle * Math.PI) / 180;
        
        const newStar: Star = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          angle: angle,
          travelX: Math.cos(angleRad) * distance,
          travelY: Math.sin(angleRad) * distance,
          duration: 0.6 + Math.random() * 0.4,
        };
        
        setStars(prevStars => {
          // Keep only the last 20 stars
          return [...prevStars.slice(-19), newStar];
        });
        
        lastTime = currentTime;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            '--angle': `${star.angle}deg`,
            '--travel-x': `${star.travelX}px`,
            '--travel-y': `${star.travelY}px`,
            '--animation-duration': `${star.duration}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

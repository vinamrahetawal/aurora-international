'use client';

import { useEffect, useState } from 'react';

export function AuroraBackground() {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const [stars2, setStars2] = useState<JSX.Element[]>([]);
  const [stars3, setStars3] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateStars = (count: number, keyPrefix: string) => {
      const newStars = [];
      for (let i = 0; i < count; i++) {
        const style = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
        };
        newStars.push(<div key={`${keyPrefix}-${i}`} className="star" style={style}></div>);
      }
      return newStars;
    };
    
    setStars(generateStars(50, 's1'));
    setStars2(generateStars(30, 's2'));
    setStars3(generateStars(15, 's3'));

  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div className="stars">{stars}</div>
      <div className="stars2">{stars2}</div>
      <div className="stars3">{stars3}</div>
      <div className="aurora">
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
        <div className="aurora__item"></div>
      </div>
    </div>
  );
}

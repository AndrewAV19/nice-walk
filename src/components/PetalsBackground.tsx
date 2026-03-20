// components/PetalsBackground.tsx
import React, { useEffect, useRef } from 'react';

const PetalsBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const petals = ['🌸', '🌷', '✿'];
    let i = 0;

    intervalRef.current = setInterval(() => {
      if (containerRef.current) {
        const p = document.createElement('div');
        const dur = 5 + Math.random() * 7;
        p.style.cssText = `position:fixed;font-size:11px;left:${Math.random() * 100}%;top:-20px;pointer-events:none;z-index:0;animation:petalFall ${dur}s ${Math.random() * 2}s linear forwards;opacity:.7;`;
        p.textContent = petals[i % petals.length];
        containerRef.current.appendChild(p);
        i++;
        setTimeout(() => p.remove(), (dur + 3) * 1000);
      }
    }, 2800);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <div id="petals" ref={containerRef}></div>;
};

export default PetalsBackground;
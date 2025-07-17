// components/AnimatedBackground.js
'use client';
import { useState, useEffect } from 'react';

export default function AnimatedBackground({ children }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 100; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 4,
          duration: Math.random() * 3 + 2
        });
      }
      setStars(starArray);
    };
    generateStars();
  }, []);

  return (
    <>
      {/* Animated Star Background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="fixed inset-0 z-0">
        <div className="shooting-star"></div>
        <div className="shooting-star" style={{ animationDelay: '3s', top: '20%' }}></div>
        <div className="shooting-star" style={{ animationDelay: '6s', top: '60%' }}></div>
      </div>

      {children}

      {/* Shooting Star Styles */}
      <style jsx global>{`
        .shooting-star {
          position: absolute;
          left: 50%;
          top: 0;
          height: 2px;
          background: linear-gradient(-45deg, rgba(95, 39, 205, 0), #5f27cd, rgba(95, 39, 205, 0));
          border-radius: 999px;
          filter: drop-shadow(0 0 6px #5f27cd);
          animation: tail 3s ease-in-out infinite, shooting 3s ease-in-out infinite;
        }

        .shooting-star:before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 30px;
          height: 5px;
          background: linear-gradient(-45deg, rgba(95, 39, 205, 0), #5f27cd, rgba(95, 39, 205, 0));
          transform: translateY(-50%) rotateZ(-45deg);
          border-radius: 100%;
          animation: shining 3s ease-in-out infinite;
        }

        .shooting-star:after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 5px;
          height: 5px;
          background: #5f27cd;
          border-radius: 50%;
          filter: drop-shadow(0 0 6px #5f27cd);
          transform: translateY(-50%);
        }

        @keyframes tail {
          0% { width: 0; }
          30% { width: 100px; }
          100% { width: 0; }
        }

        @keyframes shooting {
          0% { transform: translateX(0); }
          100% { transform: translateX(300px); }
        }

        @keyframes shining {
          0% { width: 0; }
          50% { width: 30px; }
          100% { width: 0; }
        }

        body {
          overflow-x: hidden;
          overflow-y: auto;
        }

        .navbar-backdrop {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  );
}
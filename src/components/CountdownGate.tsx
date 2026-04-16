import React, { useEffect, useState } from 'react';

interface Props {
  targetDate: Date;
  onUnlock: () => void;
}

const CountdownGate: React.FC<Props> = ({ targetDate, onUnlock }) => {
  const [timeLeft, setTimeLeft] = useState<number>(
    targetDate.getTime() - new Date().getTime()
  );
  const [showSparkles, setShowSparkles] = useState(false);
 
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDate.getTime() - new Date().getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setShowSparkles(true);
        setTimeout(() => onUnlock(), 2000);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onUnlock]);

  const format = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const d = Math.floor(totalSeconds / (3600 * 24));
    const h = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    return { d, h, m, s };
  };

  const { d, h, m, s } = format(timeLeft);

  return (
    <>
      <div className="countdown-screen">
        {showSparkles && <div className="sparkle-overlay" />}
      
        <div className="countdown-card">
          <div className="countdown-heart">
            <div className="heart-beat">💗</div>
            <div className="heart-glow"></div>
            <div className="heart-pulse-ring"></div>
          </div>

          <div className="romantic-message">
            <span className="stars">✨🌟✨</span>
            <h1>
              <span className="gradient-text">Mi corazón cuenta los latidos</span>
              <br />
              <span className="subtitle">hasta que vuelva a verte</span>
            </h1>
            <span className="stars">✨🌟✨</span>
          </div>

          <p className="romantic-quote">
            "Cada segundo que pasa me acerca más a tu sonrisa..."
          </p>

          <div className="countdown-time">
            <div className="time-unit">
              <span className="time-number">{d}</span>
              <small>días</small>
              <div className="time-decoration">🌸</div>
            </div>
            <div className="time-unit">
              <span className="time-number">{h}</span>
              <small>horas</small>
              <div className="time-decoration">⭐</div>
            </div>
            <div className="time-unit">
              <span className="time-number">{m}</span>
              <small>minutos</small>
              <div className="time-decoration">💫</div>
            </div>
            <div className="time-unit">
              <span className="time-number">{s}</span>
              <small>segundos</small>
              <div className="time-decoration">💗</div>
            </div>
          </div>

          <div className="date-container">
            <div className="date-decoration-line"></div>
            <p className="countdown-date">
              📍 <strong>Nuestro momento especial</strong>
              <br />
              18 de abril · 1:00 PM
              <br />
              <span className="date-emoji">💖✨🌸✨💖</span>
            </p>
            <div className="date-decoration-line"></div>
          </div>

          <div className="waiting-message">
            <span>💝</span>
            <p>El amor está en el aire... muy pronto algo mágico sucederá</p>
            <span>💝</span>
          </div>

          <div className="love-note">
            <p>Mientras tanto, guardo cada latido para ti</p>
            <div className="mini-hearts">❤️ 💖 💗 💕</div>
          </div>
        </div>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1.15); }
          75% { transform: scale(1.1); }
        }

        @keyframes glow {
          0%, 100% { 
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .countdown-screen {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffdde1 100%);
          position: relative;
          overflow-x: hidden;
          overflow-y: auto;
          padding: 16px;
          font-family: 'Segoe UI', 'Playfair Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
        }

        .countdown-card {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          border-radius: clamp(40px, 8vw, 80px) clamp(40px, 8vw, 80px) clamp(30px, 6vw, 60px) clamp(30px, 6vw, 60px);
          padding: clamp(30px, 6vw, 50px) clamp(20px, 5vw, 40px);
          max-width: 550px;
          width: 100%;
          position: relative;
          z-index: 2;
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.3),
                      0 0 0 2px rgba(255, 255, 255, 0.8),
                      0 0 0 5px rgba(255, 107, 157, 0.3);
          animation: fadeSlide 0.8s ease;
        }

        .countdown-heart {
          position: relative;
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .heart-beat {
          font-size: clamp(50px, 12vw, 70px);
          animation: heartbeat 1.5s ease-in-out infinite;
          cursor: pointer;
          filter: drop-shadow(0 0 15px rgba(255, 107, 157, 0.6));
          position: relative;
          z-index: 2;
        }

        .heart-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(80px, 18vw, 100px);
          height: clamp(80px, 18vw, 100px);
          background: radial-gradient(circle, rgba(255,107,157,0.4) 0%, rgba(255,107,157,0) 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: glow 2s ease-in-out infinite;
        }

        .heart-pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(50px, 12vw, 70px);
          height: clamp(50px, 12vw, 70px);
          border: 2px solid rgba(255, 107, 157, 0.6);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulseRing 1.5s ease-out infinite;
        }

        .romantic-message {
          margin: 20px 0;
          text-align: center;
        }

        .stars {
          font-size: clamp(18px, 5vw, 24px);
          color: #ffd700;
          margin: 0 5px;
          display: inline-block;
          animation: sparkle 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ff6b9d 0%, #ff9a9e 50%, #fecfef 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: clamp(20px, 6vw, 32px);
          font-weight: bold;
          display: inline-block;
        }

        .subtitle {
          font-size: clamp(14px, 4vw, 20px);
          color: #764ba2;
          font-weight: 500;
        }

        h1 {
          font-size: clamp(20px, 5vw, 28px);
          margin: 15px 0;
          color: #2d3748;
          line-height: 1.3;
        }

        .romantic-quote {
          font-size: clamp(12px, 3.5vw, 18px);
          color: #718096;
          font-style: italic;
          margin: 20px 0 30px 0;
          font-family: 'Playfair Display', serif;
          text-align: center;
          border-top: 1px solid rgba(255, 107, 157, 0.2);
          border-bottom: 1px solid rgba(255, 107, 157, 0.2);
          padding: clamp(10px, 3vw, 15px) 0;
        }

        .countdown-time {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(8px, 3vw, 15px);
          margin: 35px 0;
        }

        .time-unit {
          background: linear-gradient(135deg, #fff5f7 0%, #ffe4e9 100%);
          border-radius: clamp(15px, 4vw, 25px);
          padding: clamp(12px, 3vw, 20px) clamp(6px, 2vw, 10px);
          text-align: center;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(255, 107, 157, 0.15);
          border: 1px solid rgba(255, 107, 157, 0.2);
        }

        .time-unit:active {
          transform: scale(0.98);
        }

        .time-number {
          font-size: clamp(24px, 7vw, 38px);
          font-weight: bold;
          background: linear-gradient(135deg, #ff6b9d 0%, #ff9a9e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          font-family: 'Segoe UI', monospace;
          letter-spacing: 1px;
          line-height: 1;
          margin-bottom: 5px;
        }

        .time-unit small {
          font-size: clamp(8px, 2.5vw, 12px);
          color: #ff6b9d;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          display: block;
        }

        .time-decoration {
          font-size: clamp(10px, 3vw, 14px);
          margin-top: 6px;
        }

        .date-container {
          margin: 30px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .date-decoration-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff6b9d, #ff9a9e, transparent);
          min-width: 30px;
        }

        .countdown-date {
          font-size: clamp(12px, 3.5vw, 16px);
          font-weight: 600;
          color: #4a5568;
          text-align: center;
          line-height: 1.4;
          margin: 0;
        }

        .countdown-date strong {
          color: #ff6b9d;
          font-size: clamp(14px, 4vw, 18px);
        }

        .date-emoji {
          font-size: clamp(12px, 3.5vw, 16px);
          letter-spacing: 4px;
        }

        .waiting-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 25px;
          padding: 12px 16px;
          background: linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(255, 154, 158, 0.1) 100%);
          border-radius: 60px;
          border: 1px solid rgba(255, 107, 157, 0.3);
          flex-wrap: wrap;
        }

        .waiting-message p {
          margin: 0;
          font-size: clamp(11px, 3vw, 14px);
          color: #4a5568;
          font-weight: 500;
          text-align: center;
          flex: 1;
        }

        .waiting-message span {
          font-size: clamp(16px, 4vw, 20px);
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .love-note {
          text-align: center;
          margin-top: 25px;
          padding-top: 15px;
        }

        .love-note p {
          font-size: clamp(10px, 2.8vw, 13px);
          color: #a0aec0;
          font-style: italic;
          margin: 0 0 8px 0;
        }

        .mini-hearts {
          font-size: clamp(12px, 3.5vw, 14px);
          letter-spacing: 3px;
          color: #ff6b9d;
          word-break: keep-all;
        }

        .sparkle-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,215,0,0) 100%);
          pointer-events: none;
          z-index: 999;
          animation: sparkle 2s ease-out;
        }

        /* Media Queries específicas para iPhone 13 y dispositivos móviles */
        @media (max-width: 768px) {
          .countdown-screen {
            padding: 12px;
            align-items: flex-start;
            padding-top: 20px;
            padding-bottom: 20px;
          }

          .countdown-card {
            margin: auto;
          }

          .countdown-time {
            gap: 8px;
          }

          .date-container {
            gap: 8px;
          }
        }

        /* Para pantallas muy pequeñas (iPhone SE, etc) */
        @media (max-width: 480px) {
          .countdown-card {
            padding: 25px 18px;
          }

          .countdown-time {
            gap: 6px;
          }

          .waiting-message {
            padding: 10px 12px;
          }
        }

        /* Para iPhone 13 específico (390px de ancho) */
        @media (width: 390px) and (height: 844px) {
          .countdown-screen {
            padding: 12px;
          }

          .countdown-card {
            padding: 30px 22px;
          }

          .time-number {
            font-size: 30px;
          }
        }

        /* Mejoras de rendimiento y experiencia táctil */
        @media (hover: hover) {
          .time-unit:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255, 107, 157, 0.25);
          }
        }

        /* Ajustes para orientación landscape en móviles */
        @media (max-width: 896px) and (orientation: landscape) {
          .countdown-screen {
            padding: 20px;
            align-items: center;
          }

          .countdown-card {
            padding: 20px 30px;
          }

          .countdown-time {
            gap: 12px;
            margin: 20px 0;
          }

          .time-unit {
            padding: 10px 8px;
          }

          .time-number {
            font-size: 28px;
          }

          .romantic-quote {
            margin: 15px 0 20px 0;
          }
        }

        /* Soporte para notch y áreas seguras en iOS */
        @supports (padding: max(0px)) {
          .countdown-screen {
            padding-left: max(12px, env(safe-area-inset-left));
            padding-right: max(12px, env(safe-area-inset-right));
            padding-top: max(12px, env(safe-area-inset-top));
            padding-bottom: max(12px, env(safe-area-inset-bottom));
          }
        }

        /* Mejora de scroll en iOS */
        .countdown-screen {
          -webkit-overflow-scrolling: touch;
        }

        /* Evita que los elementos se seleccionen al hacer tap */
        .time-unit, .heart-beat, .waiting-message span {
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  );
};

export default CountdownGate;

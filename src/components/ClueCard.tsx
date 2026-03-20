// components/ClueCard.tsx
import React, { useState } from 'react';
import type { Stop } from '../data/stops';

interface ClueCardProps {
  stop: Stop;
  index: number;
  isUnlocked: boolean;
  isArrived: boolean;
  choices: Record<number, number>;
  riddleDone: boolean;
  onMakeChoice: (stopIndex: number, choiceIndex: number) => void;
  onCheckRiddle: (index: number, answer: string) => boolean;
  onArrive: (index: number) => void;
}

const ClueCard: React.FC<ClueCardProps> = ({
  stop,
  index,
  isUnlocked,
  isArrived,
  choices,
  riddleDone,
  onMakeChoice,
  onCheckRiddle,
  onArrive,
}) => {
  const [showHint, setShowHint] = useState(false);
  const [riddleAnswer, setRiddleAnswer] = useState('');
  const [riddleFeedback, setRiddleFeedback] = useState('');
  const [showRiddleFeedback, setShowRiddleFeedback] = useState(false);

  const isActive = isUnlocked && !isArrived;
  const isLocked = !isUnlocked;
  const isCompleted = isArrived;

  const numLabel = isCompleted ? '✓' : stop.id;
  const numBg = isCompleted ? '#6aaa6a' : '#c97b6e';

  const handleToggleHint = () => {
    setShowHint(!showHint);
  };

  const handleCheckRiddle = () => {
    const success = onCheckRiddle(index, riddleAnswer);
    if (success) {
      setRiddleFeedback(stop.successMsg || '¡Correcto! ✿');
      setShowRiddleFeedback(true);
      setTimeout(() => {
        setShowRiddleFeedback(false);
      }, 1200);
    } else {
      setRiddleFeedback('🌸 Mmm... piensa en esa bebida favorita que siempre pides fría...');
      setShowRiddleFeedback(true);
      setTimeout(() => {
        setShowRiddleFeedback(false);
      }, 2500);
    }
  };

  const renderActions = () => {
    if (isLocked) {
      return (
        <span className="lock-msg">🔒 Sigue la pista anterior para revelar este lugar</span>
      );
    }

    if (isCompleted) {
      return (
        <span className="done-msg">✿ ¡Ya estuviste aquí! Momento para siempre ♡</span>
      );
    }

    if (stop.type === 'choice') {
      const chosen = choices[index];
      if (chosen !== undefined) {
        return (
          <div style={{ width: '100%' }}>
            <span className="done-msg">
              Elegiste: {stop.choices?.[chosen]} ♡
            </span>
            <br />
            <span className="choice-result vis" style={{ marginTop: '6px' }}>
              {stop.choiceResponses?.[chosen]}
            </span>
            <button 
              className="btn-arrived" 
              onClick={() => onArrive(index)} 
              style={{ marginTop: '10px' }}
            >
              ¡Llegué aquí! ♡
            </button>
          </div>
        );
      }
      return (
        <div style={{ width: '100%' }}>
          <div style={{ fontSize: '13px', fontStyle: 'italic', color: '#7a5a54', marginBottom: '8px' }}>
            {stop.choiceQ}
          </div>
          <div className="choice-section">
            {stop.choices?.map((choice, ci) => (
              <button 
                key={ci} 
                className="choice-btn" 
                onClick={() => onMakeChoice(index, ci)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (stop.type === 'riddle') {
      if (riddleDone) {
        return (
          <>
            <span className="done-msg">☕ ¡Adivinaste! El frappé te espera ♡</span>
            <button className="btn-arrived" onClick={() => onArrive(index)}>
              ¡Llegué aquí! ♡
            </button>
          </>
        );
      }
      return (
        <div style={{ width: '100%' }} id={`riddle-wrap-${index}`}>
          <input 
            className="riddle-input" 
            placeholder={stop.riddleHint}
            value={riddleAnswer}
            onChange={(e) => setRiddleAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCheckRiddle()}
          />
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <button className="btn-hint" onClick={handleToggleHint}>
              Ver pista 🌿
            </button>
            <button className="riddle-btn" onClick={handleCheckRiddle}>
              ¡Es esa! ☕
            </button>
          </div>
          <div className={`riddle-feedback ${showRiddleFeedback ? 'vis' : ''}`}>
            {riddleFeedback}
          </div>
        </div>
      );
    }

    return (
      <>
        <button className="btn-hint" onClick={handleToggleHint}>
          Ver pista 🌿
        </button>
        <button className="btn-arrived" onClick={() => onArrive(index)}>
          ¡Llegué aquí! ♡
        </button>
      </>
    );
  };

  return (
    <div 
      className={`clue-card ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}
      style={{ animationDelay: `${0.15 + index * 0.1}s` }}
    >
      <div className="card-inner">
        <div className="step-icon">
          {isCompleted ? '✿' : stop.icon}
          <div className="step-num" style={{ background: numBg }}>{numLabel}</div>
        </div>
        <div className="card-content">
          <div className="card-location">
            {isLocked ? '🔒 Lugar bloqueado' : stop.location}
          </div>
          <div className="card-clue">
            {isLocked ? 'Esta pista se revelará cuando llegues al lugar anterior...' : stop.clue}
          </div>
          <div className={`card-hint ${showHint ? 'vis' : ''}`}>
            💌 {stop.hint}
          </div>
          <div className="card-actions">
            {renderActions()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClueCard;
// App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { STOPS } from './data/stops';
import Header from './components/Header';
import AdminPanel from './components/AdminPanel';
import ProgressSection from './components/ProgressSection';
import CluesContainer from './components/CluesContainer';
import PetalsBackground from './components/PetalsBackground';
import { loadState, saveState } from './utils/storage';

const App: React.FC = () => {
  const [unlocked, setUnlocked] = useState<boolean[]>(() => loadState('unlocked', [true, false, false, false, false]));
  const [arrived, setArrived] = useState<number[]>(() => loadState('arrived', []));
  const [choices, setChoices] = useState<Record<number, number>>(() => loadState('choices', {}));
  const [riddleDone, setRiddleDone] = useState<boolean>(() => loadState('riddle', false));
  const [adminOpen, setAdminOpen] = useState<boolean>(false);

  useEffect(() => {
    saveState('unlocked', unlocked);
  }, [unlocked]);

  useEffect(() => {
    saveState('arrived', arrived);
  }, [arrived]);

  useEffect(() => {
    saveState('choices', choices);
  }, [choices]);

  useEffect(() => {
    saveState('riddle', riddleDone);
  }, [riddleDone]);

  const toggleStop = (index: number, value: boolean) => {
    const newUnlocked = [...unlocked];
    newUnlocked[index] = value;
    setUnlocked(newUnlocked);
  };

  const doArrive = (index: number) => {
    if (!arrived.includes(index)) {
      setArrived([...arrived, index]);
      burstPetals();
    }
  };

  const makeChoice = (stopIndex: number, choiceIndex: number) => {
    setChoices({ ...choices, [stopIndex]: choiceIndex });
    burstPetals();
  };

  const checkRiddle = (index: number, answer: string): boolean => {
    const stop = STOPS[index];
    if (!stop || stop.type !== 'riddle') return false;

    const normalizedAnswer = answer.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    
    const normalizedAnswers = (stop.answers ?? []).map(a => 
      a.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    );

    if (normalizedAnswers.some(a => normalizedAnswer.includes(a))) {
      setRiddleDone(true);
      burstPetals();
      return true;
    }
    return false;
  };

  const burstPetals = () => {
    const petals = ['🌸', '🌹', '✿', '🌺', '🌷', '💕', '✨'];
    for (let j = 0; j < 8; j++) {
      setTimeout(() => {
        const p = document.createElement('div');
        p.style.cssText = `position:fixed;font-size:${14 + Math.random() * 14}px;left:${10 + Math.random() * 80}%;top:-20px;pointer-events:none;z-index:999;animation:petalFall ${1.5 + Math.random() * 1.5}s ease forwards;`;
        p.textContent = petals[Math.floor(Math.random() * petals.length)];
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 3500);
      }, j * 90);
    }
  };

  const showHearts = () => {
    for (let i = 0; i < 24; i++) {
      setTimeout(() => {
        const h = document.createElement('div');
        h.style.cssText = `position:fixed;font-size:${12 + Math.random() * 22}px;left:${Math.random() * 100}%;top:-30px;pointer-events:none;z-index:999;animation:petalFall ${2 + Math.random() * 3}s ease forwards;`;
        h.textContent = ['🌹', '💕', '🌸', '♡', '✨', '💍'][Math.floor(Math.random() * 6)];
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 5000);
      }, i * 120);
    }
  };

  useEffect(() => {
    if (arrived.length === STOPS.length) {
      setTimeout(() => showHearts(), 400);
    }
  }, [arrived]);

  return (
    <>
      <PetalsBackground />
      <div className="wrapper">
        <Header />
        <AdminPanel 
          adminOpen={adminOpen}
          setAdminOpen={setAdminOpen}
          unlocked={unlocked}
          onToggleStop={toggleStop}
        />
        <ProgressSection 
          arrivedCount={arrived.length}
          totalStops={STOPS.length}
        />
        <CluesContainer
          stops={STOPS}
          unlocked={unlocked}
          arrived={arrived}
          choices={choices}
          riddleDone={riddleDone}
          onToggleHint={() => {}}
          onMakeChoice={makeChoice}
          onCheckRiddle={checkRiddle}
          onArrive={doArrive}
        />
     
      </div>
    </>
  );
};

export default App;
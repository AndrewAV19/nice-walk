// components/CluesContainer.tsx
import React from 'react';
import type{ Stop } from '../data/stops';
import ClueCard from './ClueCard';

interface CluesContainerProps {
  stops: Stop[];
  unlocked: boolean[];
  arrived: number[];
  choices: Record<number, number>;
  riddleDone: boolean;
  onToggleHint: (index: number) => void;
  onMakeChoice: (stopIndex: number, choiceIndex: number) => void;
  onCheckRiddle: (index: number, answer: string) => boolean;
  onArrive: (index: number) => void;
}

const CluesContainer: React.FC<CluesContainerProps> = ({
  stops,
  unlocked,
  arrived,
  choices,
  riddleDone,
  onMakeChoice,
  onCheckRiddle,
  onArrive,
}) => {
  return (
    <div className="map-area">
      {stops.map((stop, i) => (
        <React.Fragment key={stop.id}>
          {i > 0 && (
            <div className="connector">
              <div className="conn-dot"></div>
              <div className="conn-dot"></div>
              <div className="conn-dot"></div>
            </div>
          )}
          <ClueCard
            stop={stop}
            index={i}
            isUnlocked={unlocked[i]}
            isArrived={arrived.includes(i)}
            choices={choices}
            riddleDone={riddleDone}
            onMakeChoice={onMakeChoice}
            onCheckRiddle={onCheckRiddle}
            onArrive={onArrive}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CluesContainer;
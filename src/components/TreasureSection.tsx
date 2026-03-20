// components/TreasureSection.tsx
import React from 'react';

interface TreasureSectionProps {
  lastUnlocked: boolean;
  allDone: boolean;
}

const TreasureSection: React.FC<TreasureSectionProps> = ({ lastUnlocked, allDone }) => {
  if (!lastUnlocked) return null;

  return (
    <div className="treasure-section" style={{ display: 'block' }}>
      <div className="treasure-inner">
        <span className="treasure-rose">💍</span>
        <div className="treasure-title">
          {allDone ? 'El Tesoro es Real 💍' : 'El Tesoro Final'}
        </div>
        {!allDone && (
          <div className="treasure-locked-msg">
            Completa todas las paradas para revelar el tesoro...
          </div>
        )}
        <div className={`treasure-content ${allDone ? 'vis' : ''}`}>
          <div className="treasure-msg">
            Has seguido cada pista, has caminado cada paso...<br />
            Y aquí estás. En el lugar que más amo,<br />porque es donde más me acerco a Dios<br />y a ti.
          </div>
          <div className="treasure-box">
            <div className="proposal-text">
              Desde aquella plaza, desde aquel restaurante que encontramos sin buscarlo,<br />
              desde el frappé y las Sabritas que no te guardé...<br /><br />
              He sabido que quiero que cada momento de mi vida sea contigo.<br /><br />
              ¿Quieres casarte conmigo? 💍
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureSection;
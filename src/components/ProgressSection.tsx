// components/ProgressSection.tsx
import React from 'react';

interface ProgressSectionProps {
  arrivedCount: number;
  totalStops: number;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ arrivedCount, totalStops }) => {
  const percentage = Math.round((arrivedCount / totalStops) * 100);

  return (
    <div className="progress-section">
      <div className="progress-label">
        <span>Tu aventura de amor</span>
        <span>{arrivedCount} de {totalStops} lugares</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressSection;
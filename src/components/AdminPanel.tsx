// components/AdminPanel.tsx
import React from 'react';
import { STOPS } from '../data/stops';

interface AdminPanelProps {
  adminOpen: boolean;
  setAdminOpen: (open: boolean) => void;
  unlocked: boolean[];
  onToggleStop: (index: number, value: boolean) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  adminOpen,
  setAdminOpen,
  unlocked,
  onToggleStop,
}) => {
  return (
    <>
      <div className="admin-toggle">
        <button className="admin-btn" onClick={() => setAdminOpen(!adminOpen)}>
          ⚙ Panel de control
        </button>
      </div>

      <div className={`admin-panel ${adminOpen ? 'open' : ''}`}>
        <div className="admin-title">Panel de Control — Desbloquear paradas</div>
        <div className="admin-rows">
          {STOPS.map((stop, i) => (
            <div key={stop.id} className="admin-row">
              <span className="admin-label">
                {stop.id}. {stop.location}
              </span>
              <label className="toggle-wrap">
                <input
                  type="checkbox"
                  checked={unlocked[i]}
                  onChange={(e) => onToggleStop(i, e.target.checked)}
                />
                <div className="toggle-track"></div>
                <div className="toggle-thumb"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
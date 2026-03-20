// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="stamp">
        <span>🌸</span>Mapa<br />del<br />Amor
      </div>
      <div className="header-deco">
        <span className="floral-line"></span>
        <span style={{ color: '#c97b6e', fontSize: '18px' }}>✿</span>
        <span className="floral-line r"></span>
      </div>
      <div className="header-sub">Una aventura solo para ti</div>
      <h1 className="header-title">
        El <em>Mapa del Tesoro</em><br />más especial del mundo
      </h1>
      <p className="header-desc">
        Sigue las pistas con calma, con el corazón abierto.<br />
        Cada lugar guarda un pedacito de nuestra historia 🌸
      </p>
      <div className="heart-hero">♡</div>
    </div>
  );
};

export default Header;
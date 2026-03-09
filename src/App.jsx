import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { universities } from './data/universities';
import { X, GraduationCap, MapPin, Info } from 'lucide-react';

// Custom Marker Icon Generator
const createUniversityIcon = (color) => new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div class="custom-marker" style="color: ${color}"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

function ScholarshipDrawer({ selectedUniv, setOpen }) {
  if (!selectedUniv) return null;

  return (
    <div className={`drawer ${selectedUniv ? 'open' : ''}`}>
      <div className="drawer-header">
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '4px' }}>
            {selectedUniv.name}
          </h2>
          <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem' }}>
            <MapPin size={14} /> United Kingdom
          </p>
        </div>
        <button
          onClick={() => setOpen(null)}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
        >
          <X size={24} />
        </button>
      </div>

      <div style={{ marginBottom: '20px', fontSize: '0.95rem', lineHeight: '1.6' }}>
        <p>{selectedUniv.description}</p>
      </div>

      <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <GraduationCap size={20} color="var(--primary)" /> Available Scholarships
      </h3>

      <div className="scholarship-list">
        {selectedUniv.scholarships.map(scholarship => (
          <div key={scholarship.id} className="scholarship-card">
            <h4 style={{ marginBottom: '4px' }}>{scholarship.title}</h4>
            <p className="price-tag">{scholarship.amount}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              {scholarship.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Center map component
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function App() {
  const [selectedUniv, setSelectedUniv] = useState(null);

  return (
    <div style={{ position: 'relative' }}>
      {/* Search Overlay Style Header */}
      <header className="header-container">
        <div className="logo-section">
          <div className="logo-wrapper">
            <GraduationCap size={24} color="var(--primary)" />
          </div>
          <h1 className="brand-name">
            Scholarship <span className="brand-accent">Koi</span>
          </h1>
        </div>

        <nav className="nav-menu">
          <a href="#" className="nav-link">Universities</a>
          <a href="#" className="nav-link">Scholarships</a>
          <a href="#" className="nav-link">About</a>
        </nav>

        <div className="header-actions">
          <div className="stats-badge">
            <span className="badge-dot"></span>
            <strong>{universities.length}</strong>
            <span className="badge-text">Institutions</span>
          </div>
        </div>
      </header>

      <MapContainer
        center={[54.5, -3.0]}
        zoom={6}
        className="map-container"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          noWrap={true}
        />

        {universities.map(univ => (
          <Marker
            key={univ.id}
            position={univ.location}
            icon={createUniversityIcon(univ.color)}
            eventHandlers={{
              click: () => setSelectedUniv(univ),
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
              <span style={{ fontWeight: 600 }}>{univ.name}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      <ScholarshipDrawer selectedUniv={selectedUniv} setOpen={setSelectedUniv} />

      {/* Decorative Branding */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        zIndex: 100,
        color: 'var(--text-muted)',
        fontSize: '0.8rem',
        textAlign: 'right'
      }}>
        <p>Premium Education Portal</p>
        <p>© 2026 Scholarship Koi</p>
      </div>
    </div>
  );
}

export default App;

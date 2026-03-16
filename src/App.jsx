import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { universities } from './data/universities';
import { X, GraduationCap, MapPin } from 'lucide-react';
import { supabase } from './lib/supabaseClient';

// Get a short scholarship summary for display on the map (e.g. "£1,000 - £26,000")
const getScholarshipSummary = (scholarships) => {
  if (!scholarships?.length) return 'View details';
  const amounts = scholarships
    .map((s) => s.amount?.match(/£[\d,]+(?: - £[\d,]+)?/g))
    .flat()
    .filter(Boolean);
  if (amounts.length === 0) {
    const first = scholarships[0]?.amount;
    if (first?.includes('Full') || first?.includes('100%')) return 'Full funding';
    if (first?.match(/\d+%/)) return first;
    return first || 'Scholarships';
  }
  const allNums = amounts.flatMap((a) => (a.match(/£[\d,]+/g) || []).map((m) => parseInt(m.replace(/[£,]/g, ''), 10)));
  if (allNums.length === 0) return amounts[0];
  const min = Math.min(...allNums);
  const max = Math.max(...allNums);
  return min === max ? `£${min.toLocaleString()}` : `£${min.toLocaleString()} - £${max.toLocaleString()}`;
};

// Custom Marker Icon Generator - shows dot + scholarship badge
const createUniversityIcon = (color, scholarshipText) => new L.DivIcon({
  className: 'custom-div-icon',
  html: `
    <div class="marker-with-badge">
      <div class="custom-marker" style="background-color: ${color}; border-color: ${color}"></div>
      <div class="marker-scholarship-badge">${scholarshipText}</div>
    </div>
  `,
  iconSize: [80, 36],
  iconAnchor: [40, 36],
});

function WelcomePopup({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [educationQualification, setEducationQualification] = useState('');
  const [interestedCourses, setInterestedCourses] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await onSubmit?.({ name, email, phone, educationQualification, interestedCourses });
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to save. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-modal">
        <button
          type="button"
          className="popup-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <h2 className="popup-title">Welcome to Scholarship Koi</h2>
        <p className="popup-subtitle">Please share your details to explore UK scholarships</p>
        <form onSubmit={handleSubmit} className="popup-form">
          <div className="popup-field">
            <label htmlFor="popup-name">Name</label>
            <input
              id="popup-name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="popup-field">
            <label htmlFor="popup-email">Email</label>
            <input
              id="popup-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="popup-field">
            <label htmlFor="popup-phone">Phone Number</label>
            <input
              id="popup-phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="popup-field">
            <label htmlFor="popup-education">Education Qualification</label>
            <select
              id="popup-education"
              value={educationQualification}
              onChange={(e) => setEducationQualification(e.target.value)}
              required
            >
              <option value="">Select your qualification</option>
              <option value="High School">High School</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="popup-field">
            <label htmlFor="popup-courses">Interested Courses</label>
            <select
              id="popup-courses"
              value={interestedCourses}
              onChange={(e) => setInterestedCourses(e.target.value)}
              required
            >
              <option value="">Select course interest</option>
              <option value="Business & Management">Business & Management</option>
              <option value="Engineering">Engineering</option>
              <option value="Computer Science & IT">Computer Science & IT</option>
              <option value="Medicine & Health">Medicine & Health</option>
              <option value="Law">Law</option>
              <option value="Arts & Humanities">Arts & Humanities</option>
              <option value="Science">Science</option>
              <option value="Education">Education</option>
              <option value="Social Sciences">Social Sciences</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {error && (
            <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '-8px' }}>{error}</p>
          )}
          <button type="submit" className="popup-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}

function ScholarshipDrawer({ selectedUniv, setOpen, onApplyNow }) {
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

      {/* Tuition Fees & USP */}
      {(selectedUniv.usp || selectedUniv.tuitionFees) && (
        <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: 'rgba(201, 162, 39, 0.08)', borderRadius: '12px', border: '1px solid rgba(201, 162, 39, 0.2)' }}>
          {selectedUniv.usp && (
            <div style={{ marginBottom: selectedUniv.tuitionFees ? '12px' : '0' }}>
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '4px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Why choose this university?</strong>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>{selectedUniv.usp}</p>
            </div>
          )}
          {selectedUniv.tuitionFees && (
            <div>
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '4px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tuition Fees</strong>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '500' }}>{selectedUniv.tuitionFees}</p>
            </div>
          )}
        </div>
      )}

      <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <GraduationCap size={20} color="var(--primary)" /> Available Scholarships
      </h3>

      <div className="scholarship-list">
        {(selectedUniv.scholarships || []).length > 0 ? selectedUniv.scholarships.map(scholarship => (
          <div key={scholarship.id} className="scholarship-card">
            <h4 style={{ marginBottom: '4px' }}>{scholarship.title}</h4>
            <p className="price-tag">{scholarship.amount}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              {scholarship.type}
            </p>
          </div>
        )) : (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Contact university for scholarship details.</p>
        )}
      </div>

      <button className="drawer-apply-btn" onClick={onApplyNow}>
        Apply Now
      </button>
    </div>
  );
}

function App() {
  const [selectedUniv, setSelectedUniv] = useState(null);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  const handleWelcomeClose = () => {
    setShowWelcomePopup(false);
  };

  const handleWelcomeSubmit = async (data) => {
    setUserEmail(data.email);
    if (supabase) {
      const { error } = await supabase.from('user_registrations').insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        education_qualification: data.educationQualification,
        interested_courses: data.interestedCourses,
      });
      if (error) throw new Error(error.message);
    } else {
      console.warn('Supabase not configured - add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local');
    }
  };

  const handleApplyNow = async () => {
    if (!selectedUniv) return;
    if (supabase && userEmail) {
      try {
        const { error } = await supabase.from('scholarship_applications').insert({
          user_email: userEmail,
          university_id: selectedUniv.id,
          university_name: selectedUniv.name,
        });
        if (error) throw error;
        setSelectedUniv(null);
      } catch (err) {
        console.error('Failed to save application:', err);
      }
    } else {
      setSelectedUniv(null);
    }
  };

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
          <a href="#" className="nav-link">Tuition Fees</a>
          <a href="#" className="nav-link">Scholarship</a>
          <a href="#" className="nav-link">Ranking</a>
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
        minZoom={5}
        maxZoom={14}
        className="map-container"
        zoomControl={false}
        maxBounds={[[49.5, -8.5], [61, 2]]}
        maxBoundsViscosity={1}
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
            icon={createUniversityIcon(univ.color, getScholarshipSummary(univ.scholarships))}
            eventHandlers={{
              click: () => setSelectedUniv(univ),
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false} className="marker-tooltip">
              <div style={{ fontWeight: 600, marginBottom: '2px' }}>{univ.name}</div>
              <div style={{ color: 'var(--primary)', fontSize: '0.9em', fontWeight: 600 }}>
                {getScholarshipSummary(univ.scholarships)}
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      <ScholarshipDrawer selectedUniv={selectedUniv} setOpen={setSelectedUniv} onApplyNow={handleApplyNow} />

      <WelcomePopup
        isOpen={showWelcomePopup}
        onClose={handleWelcomeClose}
        onSubmit={handleWelcomeSubmit}
      />

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

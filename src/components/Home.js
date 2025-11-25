import React from 'react';

export default function Home() {
  return (
    <section className="home-page">
      <div
        className="hero-image"
        style={{ backgroundImage: 'url("/images/2.JPG")' }}
      >
        <div className="hero-overlay">
          <p className="hero-intro">Welcome to my muse</p>
          <h1 className="hero-name">Pierre Ramos</h1>
          <p className="hero-tagline">Fashion model based in Paris.</p>

          <div className="hero-icons">
            {/* Remplace par tes vrais liens */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              ⓘ
            </a>
            <a href="mailto:booking@example.com">✉️</a>
          </div>
        </div>
      </div>
    </section>
  );
}

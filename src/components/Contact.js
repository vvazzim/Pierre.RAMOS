import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Message envoyé ! (Tu pourras connecter ça plus tard à EmailJS, Formspree ou un backend.)"
    );
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-page">
      <div
        className="hero-image"
        style={{
            backgroundImage: 'url("/images/7.JPG")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            width: '100%',
          }}
    >
        <div className="hero-overlay contact-overlay">
          <h1 className="contact-heading">Contact</h1>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label>Your name</label>
              <input
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-field">
              <label>Your email</label>
              <input
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contact-field">
              <label>Your message</label>
              <textarea
                value={form.message}
                onChange={handleChange('message')}
                placeholder="Tell me about your project, dates, location…"
                required
              />
            </div>

            <div className="contact-submit">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

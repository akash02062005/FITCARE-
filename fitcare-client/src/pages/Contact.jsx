import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import '../pages/Contact.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('✅ Message sent & confirmation email delivered!', {
          position: 'top-center'
        });
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error('❌ Failed: ' + data.error, { position: 'top-center' });
      }
    } catch (err) {
      toast.error('❌ Server error', { position: 'top-center' });
    }
  };

  return (
    <PageWrapper>
      <div className="contact-page container fade-in">
        <ToastContainer />
        <div className="contact-heading mt-5">
          <h2 className="contact-title">📞 Contact FitCare Support</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info shadow">
            <h4>📧 Email</h4>
            <p>support@fitcare.ai</p>
            <h4>📱 Phone</h4>
            <p>+91 90000 12345</p>
            <h4>📍 Location</h4>
            <p>Chennai, India</p>
          </div>

          <form className="contact-form shadow" onSubmit={handleSubmit}>
            <h4>Send Us a Message</h4>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="map-container mt-5">
          <iframe
            title="FitCare Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.923564416417!2d80.20947561482307!3d13.058063490796623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266fa3b5f5f6d%3A0x7c2642fd76a536b9!2sChennai%2C%20India!5e0!3m2!1sen!2sin!4v1629383347586!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="text-center mt-5">
          <button className="home-btn" onClick={() => navigate('/')}>⬅️ Back to Home</button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;


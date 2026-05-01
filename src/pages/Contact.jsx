import { useState } from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

export default function Contact() {
  const [form, setForm] = useState({ 
    name: '', 
    phone: '', 
    service: '', 
    message: '' 
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Phone number validation regex
  const phoneRegex = /^[6-9]\d{9}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    
    // Typing pannum pothu error-ai remove seiya
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    if (!form.service) newErrors.service = "Please select a service";
    
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        
        // Form reset
        setForm({ name: '', phone: '', service: '', message: '' });
        setErrors({});
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Server error. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <PageHero
        bgImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        breadcrumb="Contact"
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />

      <div className="conpage">
        <div className="congrid">

          {/* LEFT: Info Section */}
          <div>
            <div className="slbl" style={{ color: 'var(--gold)' }}>Get In Touch</div>
            <h2 className="stitle" style={{ color: '#fff' }}>Visit or Call Us</h2>
            <div className="gline" />
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: '2rem', lineHeight: 1.8 }}>
              Come visit our tailoring studio at Eraniel or reach us by phone or WhatsApp anytime.
            </p>

            <div className="cii">
              <div className="cbox">📍</div>
              <div>
                <div className="clbl">Address</div>
                <div className="cval">
                  16/114-A Gomathy manthiram<br />
                  Melparai road Kandanvilai,<br />
                  Nagercoil - 629810, Tamil Nadu, India
                </div>
              </div>
            </div>

            <div className="cii">
              <div className="cbox">📞</div>
              <div>
                <div className="clbl">Phone</div>
                <div className="cval">
                  <a href="tel:9445535457">9445535457</a><br />
                  <a href="tel:8848507556">8848507556</a>
                </div>
              </div>
            </div>

            <div className="cii">
              <div className="cbox">📧</div>
              <div>
                <div className="clbl">Email</div>
                <div className="cval">
                  <a href="mailto:rgviyer@gmail.com">rgviyer@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="cii">
              <div className="cbox">⏰</div>
              <div>
                <div className="clbl">Timings</div>
                <div className="cval">
                  Mon – Sat: 9:00 AM – 7:00 PM<br />
                  Sunday: By Appointment
                </div>
              </div>
            </div>

            <a href="https://wa.me/919445535457" className="wa-btn" style={{ marginTop: '0.5rem' }}>
              💬 WhatsApp: 9445535457
            </a>
          </div>

          {/* RIGHT: Form Section */}
          <div>
            <div className="slbl" style={{ color: 'var(--gold)' }}>Send a Message</div>
            <h2 className="stitle" style={{ color: '#fff' }}>Book Appointment</h2>
            <div className="gline" />

            <form onSubmit={handleSubmit}>
              <div className="fg2">
                <label className="flbl">YOUR NAME</label>
                <input
                  className="finp"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <small style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</small>}
              </div>

              <div className="fg2">
                <label className="flbl">PHONE NUMBER</label>
                <input
                  className="finp"
                  name="phone"
                  placeholder="Your WhatsApp number"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.phone}</small>}
              </div>

              <div className="fg2">
                <label className="flbl">SERVICE REQUIRED</label>
                <select
                  className="finp"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option>Ladies Tailoring</option>
                  <option>Aari Work</option>
                  <option>Hand Embroidery</option>
                  <option>Fabric Painting</option>
                  <option>Custom Design</option>
                  <option>Alteration</option>
                  <option>Handmade Accessories</option>
                  <option>Bridal Blouse</option>
                  <option>Gents Tailoring</option>
                  <option>Tailoring Classes (Online & Offline)</option>
                </select>
                {errors.service && <small style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.service}</small>}
              </div>

              <div className="fg2">
                <label className="flbl">MESSAGE / DESIGN DETAILS</label>
                <textarea
                  className="finp"
                  name="message"
                  placeholder="Describe your design or requirements..."
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                />
                {errors.message && <small style={{ color: '#ff6b6b', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.message}</small>}
              </div>

              <button
                type="submit"
                className="fsub"
                disabled={loading}
                style={{ 
                  opacity: loading ? 0.7 : 1, 
                  cursor: loading ? 'not-allowed' : 'pointer',
                  marginTop: '1rem',
                  width: '100%'
                }}
              >
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
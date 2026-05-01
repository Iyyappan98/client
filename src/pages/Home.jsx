import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">

      {/* HERO */}
      <div className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url(/images/BG_img.jpeg)" }}
        />
        <div className="hero-ov" />
        <div className="hero-cnt">
          <div className="h-badge">✦ Est. in Eraniel, Nagercoil ✦</div>
          <h1>
            Stitch Your <span>Dream</span><br />Into Reality
          </h1>
          <p className="hero-sub">
            Where tradition meets modern elegance
          </p>
          <p className="hero-loc">📍 Eraniel, Nagercoil, Kanyakumari</p>
          <div className="hero-btns">
            <button className="btn-gold" onClick={() => navigate('/contact')}>
              Book Appointment
            </button>
            <button className="btn-out" onClick={() => navigate('/gallery')}>
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stat">
          <div className="stat-n">16+</div>
          <div className="stat-l">Years Experience</div>
        </div>
        <div className="stat">
          <div className="stat-n">1500+</div>
          <div className="stat-l">Happy Clients</div>
        </div>
        <div className="stat">
          <div className="stat-n">500+</div>
          <div className="stat-l">Bridal Blouses</div>
        </div>
        <div className="stat">
          <div className="stat-n">10</div>
          <div className="stat-l">Specializations</div>
        </div>
      </div>

      {/* ABOUT SNIPPET */}
      <div className="about-sec">
        <div className="img-wrap">
          <div className="img-frame" />
          <img
            className="about-img"
            src="/images/WhatsApp_Image.jpeg"
            alt="Uma Tailoring Workspace"
          />
          <div className="a-badge">
            <div className="a-badge-n">16+</div>
            <div className="a-badge-t">Yrs of Trust</div>
          </div>
        </div>
        <div>
          <div className="slbl">Our Story</div>
          <h2 className="stitle">Tailoring with Passion &amp; Precision</h2>
          <div className="gline" />
          <p className="a-text">
            Uma Tailoring at Eraniel brings you decades of craftsmanship in women's fashion.
            Specializing in custom blouses, aari work, hand embroidery, and fabric painting —
            every piece made with care and love.
          </p>
          <div className="feats">
            <div className="feat">
              <div className="ficon">✨</div>
              <div>
                <div className="ftitle">Aari &amp; Embroidery Specialists</div>
                <div className="fdesc">Intricate aari work with stones, beads, and threadwork for bridal and festive wear.</div>
              </div>
            </div>
            <div className="feat">
              <div className="ficon">👗</div>
              <div>
                <div className="ftitle">Perfect Custom Fit</div>
                <div className="fdesc">Every garment stitched to your exact measurements for a perfect fit.</div>
              </div>
            </div>
            <div className="feat">
              <div className="ficon">🎨</div>
              <div>
                <div className="ftitle">Fabric Painting &amp; Design</div>
                <div className="fdesc">Unique fabric painting and handmade accessories crafted with artistic vision.</div>
              </div>
            </div>
          </div>
          <button className="btn-gold" onClick={() => navigate('/about')}>
            Know More About Us
          </button>
        </div>
      </div>

      {/* SERVICES */}
      <div className="svc-sec">
        <div className="sec-head">
          <div className="slbl">What We Offer</div>
          <h2 className="stitle">Our Services</h2>
          <div className="gline" style={{ margin: '0.8rem auto' }} />
          <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)' }}>
            From traditional blouses to modern fashion — we stitch your dreams into reality.
          </p>
        </div>
        <div className="svc-grid">
          {[
            { n: '01', i: '👗', t: 'Ladies Tailoring', d: 'Custom stitching for blouses, churidars, saree falls and all women\'s garments.' },
            { n: '02', i: '✨', t: 'Aari Works', d: 'Traditional aari embroidery with stones, beads and intricate threadwork.' },
            { n: '03', i: '🪡', t: 'Hand Embroidery', d: 'Delicate hand-embroidered designs using silk, zari and cotton threads.' },
            { n: '04', i: '🎨', t: 'Fabric Painting', d: 'Artistic fabric painting — floral, peacock, traditional motifs on blouses.' },
            { n: '05', i: '💎', t: 'Custom Designs', d: 'Bring your dream design — we\'ll sketch, plan and stitch it perfectly.' },
            { n: '06', i: '✂️', t: 'Alterations', d: 'Expert fitting alterations and resizing of existing garments.' },
            { n: '07', i: '🎀', t: 'Handmade Accessories', d: 'Handcrafted hair accessories, cloth earrings and decorative items.' },
            { n: '08', i: '🌸', t: 'Bridal Blouses', d: 'Exclusive bridal blouse stitching with heavy aari, stonework and embroidery.' },
            { n: '09', i: '👔', t: 'Gents Tailoring', d: 'Professional stitching for men\'s wear including shirts, pants, uniforms and custom fittings with perfect measurements.' },
            { n: '10', i: '🎓', t: 'Tailoring Classes (Online & Offline)', d: 'Online & offline classes in Eraniel for tailoring, aari, embroidery, fabric painting & fashion design — from basic to advanced.' }
          ].map(s => (
            <div className="sc" key={s.n}>
              <div className="scn">{s.n}</div>
              <div className="sci">{s.i}</div>
              <div className="sct">{s.t}</div>
              <div className="scd">{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY PREVIEW */}
      <div className="gal-prev">
        <div className="sec-head">
          <div className="slbl" style={{ color: 'var(--gold)' }}>Our Work</div>
          <h2 className="stitle" style={{ color: '#fff' }}>Design Gallery</h2>
          <div className="gline" style={{ margin: '0.8rem auto' }} />
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)' }}>
            A glimpse of our finest blouse neck designs, aari works and embroidery pieces.
          </p>
        </div>
        <div className="gal-grid">
          {[
            { src: '/images/aari-work-blouse.jpeg', label: 'Aari Work Blouse' },
            { src: '/images/blouse-neck-design.jpeg', label: 'Neck Design' },
            { src: '/images/stone_work.jpeg', label: 'Stone Work' },
            { src: '/images/fabric-painting.jfif', label: 'Fabric Painting' },
            { src: '/images/bridal-blouse-collections.jpeg', label: 'Bridal Collection' },
          ].map((img, i) => (
            <div className="gi" key={i} onClick={() => navigate('/gallery')}>
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="giov">
                <div className="giov-t">{img.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            className="btn-out"
            onClick={() => navigate('/gallery')}
            style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
          >
            View Full Gallery
          </button>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="tests">
        <div className="sec-head">
          <div className="slbl">Client Love</div>
          <h2 className="stitle">What Our Clients Say</h2>
          <div className="gline" style={{ margin: '0.8rem auto' }} />
        </div>
        <div className="test-grid">
          {[
            { initials: 'PR', name: 'Priya Rajan', place: 'Nagercoil', text: "Uma akka's aari work on my wedding blouse was absolutely stunning! Every stone placed perfectly. All my relatives were asking who stitched it!" },
            { initials: 'LK', name: 'Lakshmi K.', place: 'Eraniel', text: 'The peacock fabric painting with gold accents — it looked like a designer piece. Very affordable and timely delivery!' },
            { initials: 'MV', name: 'Meena Vijay', place: 'Kanyakumari', text: '5 years regular customer! Unique neck designs, perfect fitting every time. My family\'s go-to for all occasions!' },
          ].map((t, i) => (
            <div className="tc" key={i}>
              <div className="qbig">"</div>
              <div className="stars">★★★★★</div>
              <p className="tt">{t.text}</p>
              <div className="ta">
                <div className="tav">{t.initials}</div>
                <div>
                  <div className="tn">{t.name}</div>
                  <div className="tp">{t.place}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-sec">
        <h2 className="cta-t">Ready for Your Dream Blouse?</h2>
        <p className="cta-s">
          Book an appointment today and let us create something beautiful just for you.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-gold" onClick={() => navigate('/contact')}>Book Now</button>
          <a href="https://wa.me/919445535457" className="wa-btn">💬 WhatsApp Us</a>
        </div>
        <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.83rem' }}>
          📞 9445535457 &nbsp;|&nbsp; 8848507556
        </p>
      </div>

      <Footer />
    </div>
  );
}

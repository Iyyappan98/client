import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <PageHero
        bgImage="/images/about-us-bg.jfif"
        breadcrumb="About Us"
        title="About Uma Tailoring"
        subtitle="Our story, our craft, our passion"
      />

      <div className="abpage">
        <div className="abgrid">
          <img
            className="abimg"
            src="/images/about-us.jpeg"
            alt="Tailoring workspace"
            loading="lazy"
          />
          <div>
            <div className="slbl">Who We Are</div>
            <h2 className="stitle">Years of Craftsmanship, One Stitch at a Time</h2>
            <div className="gline" />
            <div className="abqb">
              <p className="abqt">
                "Fashion is not just about clothes. It's about creating confidence, celebrating culture,
                and expressing individuality through every thread."
              </p>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.9 }}>
              Uma Tailoring, located in Eraniel, Nagercoil, has been serving women across Kanyakumari
              district for over a decade — a trusted name for bridal blouses, aari works, fabric painting,
              and all ladies garment stitching.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <div className="slbl">Our Values</div>
          <h2 className="stitle">What Drives Us</h2>
          <div className="gline" style={{ margin: '0.8rem auto 0' }} />
        </div>
        <div className="vgrid">
          <div className="vc">
            <div className="vi">🎯</div>
            <div className="vt">Precision</div>
            <div className="vd">Every stitch taken with utmost care for a perfect fit every time.</div>
          </div>
          <div className="vc">
            <div className="vi">❤️</div>
            <div className="vt">Passion</div>
            <div className="vd">Tailoring is our art, our calling, serving clients with love.</div>
          </div>
          <div className="vc">
            <div className="vi">🌿</div>
            <div className="vt">Quality</div>
            <div className="vd">Finest threads and quality materials for lasting beauty.</div>
          </div>
          <div className="vc">
            <div className="vi">⏰</div>
            <div className="vt">Timeliness</div>
            <div className="vd">Always deliver on the promised date without compromise.</div>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--beige)', padding: '4rem 1rem', textAlign: 'center' }}>
        <div className="slbl">Visit Us</div>
        <h2 className="stitle">Find Us at Eraniel</h2>
        <div className="gline" style={{ margin: '0.8rem auto 0' }} />
        <div className="cib">
          <div className="cit">Uma Tailoring</div>
          <div className="cir">
            <span>📍</span>
            <div className="civ">Eraniel, Nagercoil, Kanyakumari District</div>
          </div>
          <div className="cir">
            <span>📞</span>
            <div className="civ">9445535457 | 8848507556</div>
          </div>
          <div className="cir">
            <span>⏰</span>
            <div className="civ">Mon–Sat: 9:00 AM – 7:00 PM</div>
          </div>
          <a
            href="https://wa.me/919445535457"
            className="wa-btn"
            style={{ marginTop: '1.2rem', display: 'inline-flex' }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

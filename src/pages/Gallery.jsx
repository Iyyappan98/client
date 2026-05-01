import { useState } from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';

const galleryItems = [
  { src: '/images/aari-work-blouse.jpeg', alt: 'Aari Blouse', cats: ['aari', 'bridal'], title: 'Aari Work Blouse', sub: 'Bridal Collection' },
  { src: '/images/blouse-neck-design.jpeg', alt: 'Neck Design', cats: ['neck'], title: 'Custom Neck Design', sub: 'Ladies Tailoring' },
  { src: '/images/stone-embroidary.jpg', alt: 'Embroidery', cats: ['emb', 'aari'], title: 'Stone & Embroidery', sub: 'Festive Wear' },
  { src: '/images/fabric-painting.jfif', alt: 'Fabric Paint', cats: ['paint'], title: 'Fabric Painting', sub: 'Peacock Motif' },
  { src: '/images/bridal-blouse-collections.jpeg', alt: 'Bridal', cats: ['bridal', 'aari'], title: 'Bridal Blouse', sub: 'Wedding Special' },
  { src: '/images/hand-embroidary.jpeg', alt: 'Hand Emb', cats: ['emb', 'neck'], title: 'Hand Embroidery', sub: 'Silk Thread Work' },
  { src: '/images/aari-neck-design.jpeg', alt: 'Aari Neck', cats: ['aari', 'neck'], title: 'Aari Neck Design', sub: 'Custom Blouse' },
  { src: '/images/fabric-art.jpeg', alt: 'Designer', cats: ['paint', 'emb'], title: 'Designer Blouse', sub: 'Fabric Art' },
  { src: '/images/wedding-blouse-heavy-stone-work.jpeg', alt: 'Wedding', cats: ['bridal', 'neck'], title: 'Wedding Blouse', sub: 'Heavy Stonework' },
];

const categories = [
  { key: 'all', label: 'All Works' },
  { key: 'aari', label: 'Aari Work' },
  { key: 'neck', label: 'Neck Designs' },
  { key: 'paint', label: 'Fabric Painting' },
  { key: 'bridal', label: 'Bridal' },
  { key: 'emb', label: 'Embroidery' },
];

export default function Gallery() {
  const [active, setActive] = useState('all');

  const filtered = galleryItems.filter(
    item => active === 'all' || item.cats.includes(active)
  );

  return (
    <div className="page-wrapper">
      <PageHero
        bgImage="/images/gallery-bg.jpg"
        breadcrumb="Gallery"
        title="Design Gallery"
        subtitle="Our finest works — blouses, aari, embroidery & more"
      />

      <div className="galpage">
        <div className="cats">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`cb ${active === cat.key ? 'active' : ''}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="galmason">
          {filtered.map((item, i) => (
            <div className="gmi" key={i}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gmov">
                <div className="gmot">{item.title}</div>
                <div className="gmos">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

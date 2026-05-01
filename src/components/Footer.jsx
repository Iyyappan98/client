import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="fg">
        <div>
          <div className="fl">✂ Uma Tailoring</div>
          <p className="ft">
            Crafting elegance with every stitch. Specialists in ladies tailoring, aari work,
            hand embroidery and custom bridal blouses at Eraniel, Nagercoil.
          </p>
        </div>
        <div>
          <div className="fh">Quick Links</div>
          <ul className="flinks">
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/about')}>About Us</li>
            <li onClick={() => navigate('/gallery')}>Gallery</li>
            <li onClick={() => navigate('/contact')}>Contact</li>
          </ul>
        </div>
        <div>
          <div className="fh">Services</div>
          <ul className="flinks">
            <li>Ladies Tailoring</li>
            <li>Aari Works</li>
            <li>Hand Embroidery</li>
            <li>Fabric Painting</li>
            <li>Custom Designs</li>
            <li>Alterations</li>
            <li>Handmade Accessories</li>
            <li>Bridal Blouses</li>
            <li>Gents Tailoring</li>
            <li>Tailoring Classes (Online & Offline)</li>
          </ul>
        </div>
      </div>
      <div className="fbot">
        <div className="fcopy">© 2024 Uma Tailoring, Eraniel. All rights reserved.</div>
        <div className="fcopy">Designed with ♥</div>
      </div>
    </footer>
  );
}

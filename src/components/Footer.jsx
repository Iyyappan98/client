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
          <div className='icon__wrap '>
            <a href='https://www.instagram.com/vighneswary.vijay?utm_source=qr&igsh=cmw1MHppdnM2N2ti' target="_blank"><img src="/images/instagram.png" alt='instagramicon' /></a>
            <a href='https://www.facebook.com/profile.php?id=61556777591041&rdid=rofC2VpJAFsx1kIx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1H9T7t9pJc%2F#' target="_blank"><img src="/images/facebook.png" alt='facebookicon' /></a>
            <a href='https://www.youtube.com/@urfashioncreatives-tamil' target="_blank"><img src="/images/youtube.png" alt='youtubeicon' /></a>
          </div>
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

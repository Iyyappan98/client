import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact', cta: true },
  ];

  return (
    <>
      <nav>
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <div className="logo-c">✂</div>
          Uma Tailoring
        </NavLink>

        <ul className="nav-links">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  [isActive ? 'active' : '', link.cta ? 'cta-link' : ''].join(' ').trim()
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mob-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={closeMenu}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}

import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/certification', label: 'Certifications' },
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Guruprasad H D home">
        <img src="/logo.png" alt="" className="logo-img" />
        <span>Guruprasad H D</span>
      </Link>
      <nav aria-label="Main navigation">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

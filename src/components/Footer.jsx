const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=100017229039133',
    label: 'Facebook',
    icon: 'fa-facebook-f',
  },
  {
    href: 'https://x.com/GURUPRASAD1780',
    label: 'X',
    icon: 'fa-x-twitter',
  },
  {
    href: 'https://www.linkedin.com/in/guruprasad-h-d-3770b518b',
    label: 'LinkedIn',
    icon: 'fa-linkedin-in',
  },
  {
    href: 'https://github.com/GURUPRASAD178',
    label: 'GitHub',
    icon: 'fa-github',
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-media" aria-label="Social profiles">
        {socialLinks.map(({ href, label, icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <i className={`fab ${icon}`} aria-hidden="true" />
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Guruprasad H D</p>
    </footer>
  );
}

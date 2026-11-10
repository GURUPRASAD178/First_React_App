const certifications = [
  { title: 'Java', issuer: 'Teragon' },
  { title: 'Entrepreneurship', issuer: 'Seventh Sense' },
  { title: 'Internet of Things', issuer: 'GTTC' },
];

export default function Certifications() {
  return (
    <section className="page-section">
      <p className="eyebrow">Learning and growth</p>
      <h1>Certifications</h1>
      <ul className="certification-list">
        {certifications.map(({ title, issuer }) => (
          <li className="certification-card panel" key={title}>
            <i className="fas fa-award" aria-hidden="true" />
            <div>
              <h2>{title}</h2>
              <p>Issued by {issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

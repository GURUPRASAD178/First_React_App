const projects = [
  {
    title: 'Fire Alarm System using IoT',
    description: 'An IoT-based project focused on fire detection and alerts.',
    image: '/images/pr1.jpg',
  },
  {
    title: 'Shopping Management System',
    description: 'A project exploring software solutions for shopping workflows.',
  },
  {
    title: 'Tipping Application',
    description: 'An application concept for sharing tips and recommendations.',
  },
];

export default function Projects() {
  return (
    <section className="page-section">
      <p className="eyebrow">Selected work</p>
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map(({ title, description, image }) => (
          <article className="project-card panel" key={title}>
            {image ? (
              <img src={image} alt="" className="project-img" />
            ) : (
              <div className="project-placeholder" aria-hidden="true">
                <i className="fas fa-code" />
              </div>
            )}
            <div className="project-copy">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

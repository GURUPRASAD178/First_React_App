export default function About() {
  return (
    <section className="page-section">
      <p className="eyebrow">A little about me</p>
      <h1>About Me</h1>
      <div className="about-content panel">
        <img src="/images/profile.jpeg" alt="Guruprasad H D" className="profile-pic" />
        <div>
          <p>
            Hi, I’m Guruprasad H D, a Computer Science student at University Visvesvaraya College of
            Engineering, Bengaluru, Karnataka, India. I’m passionate about
            software development, web design, and technology projects.
          </p>
          <dl className="about-details">
            <div>
              <dt>Name</dt>
              <dd>Guruprasad H D</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Bengaluru, Karnataka, India</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>M.Tech in Computer Science</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>Student with project experience in software development</dd>
            </div>
          </dl>
          <p>
            I studied at Government Engineering College, Sujala Pre University
            College, and Venkateshwara High School in Hassan.
          </p>
        </div>
      </div>
    </section>
  );
}

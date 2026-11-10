export default function Contact() {
  return (
    <section className="page-section">
      <p className="eyebrow">Get in touch</p>
      <h1>Contact Me</h1>
      <form className="contact-form panel" onSubmit={(event) => event.preventDefault()}>
        <label>
          Name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit">Send</button>
        <p className="form-note">
          This form needs a contact service or backend to deliver messages.
        </p>
      </form>
    </section>
  );
}

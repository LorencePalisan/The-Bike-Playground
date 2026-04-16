import { useState, type FormEvent } from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import "./Contact.css";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const subjects = [
  "General Inquiry",
  "Private Booking",
  "Event / Shoot",
  "FLY Racing Starter Pack",
  "Lesson Booking",
  "Other",
];

export default function Contact() {
  usePageTitle("Contact");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, wire this to a backend or form service (e.g. Formspree)
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero page-hero--contact">
        <div className="container page-hero__inner">
          <p className="section-label">Reach Out</p>
          <h1>Get in Touch</h1>
          <p>
            Have a question, want to book a session, or planning an event? We'd
            love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-main__inner">
          {/* Info */}
          <aside className="contact-info">
            <div className="contact-info__block">
              <p className="section-label">Phone</p>
              <a href="tel:+639171242787" className="contact-info__link">
                0917-124-2787
              </a>
            </div>
            <div className="contact-info__block">
              <p className="section-label">Email</p>
              <a
                href="mailto:thebikeplayground@gmail.com"
                className="contact-info__link"
              >
                thebikeplayground@gmail.com
              </a>
            </div>
            <div className="contact-info__block">
              <p className="section-label">Private Bookings</p>
              <p className="contact-info__note">
                For exclusive track access, group events, and photo/video shoots
                — send us a message or call directly. Starts at{" "}
                <strong>P2,500</strong>.
              </p>
            </div>
            <div className="contact-info__block">
              <p className="section-label">Hours</p>
              <p className="contact-info__note">
                Mon – Fri: 9:00 AM – 8:00 PM
                <br />
                Sat – Sun: 7:00 AM – 9:00 PM
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success__icon" aria-hidden="true">
                  ✓
                </span>
                <h2>Message Sent!</h2>
                <p>
                  We'll get back to you as soon as possible. Thanks for reaching
                  out!
                </p>
                <button
                  className="btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      subject: subjects[0],
                      message: "",
                    });
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h2 className="contact-form__heading">Send a Message</h2>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="name" className="contact-form__label">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="contact-form__input"
                      placeholder="Juan dela Cruz"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="email" className="contact-form__label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="contact-form__input"
                      placeholder="juan@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="subject" className="contact-form__label">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="contact-form__input contact-form__select"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message" className="contact-form__label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact-form__input contact-form__textarea"
                    placeholder="Tell us what you're looking for..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary contact-form__submit"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

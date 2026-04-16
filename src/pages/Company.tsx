import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";
import "./Company.css";

const pillars = [
  {
    label: "Our Mission",
    heading: "Grow the Sport",
    body: "We exist to make pump track riding and action sports accessible to every rider — regardless of age, skill, or budget. Affordable rates, quality gear, and a welcoming track are our promise.",
  },
  {
    label: "Our Vision",
    heading: "A Thriving Riding Culture",
    body: "We envision a community where riding is a lifestyle — where kids learn, teens compete, and adults rediscover the freedom of two wheels.",
  },
];

const flyFeatures = [
  "Official FLY Racing 2026 gear distributor",
  "Exclusive Starter Packs curated for our riders",
  "Jerseys, shorts, and protective apparel",
  "Trusted by motocross and BMX athletes worldwide",
];

const highlights = [
  { stat: "FLY Racing", label: "Official Partner" },
  { stat: "P150", label: "Starting Rate" },
  { stat: "3", label: "Starter Pack Options" },
  { stat: "24/7", label: "Booking Inquiries" },
];

export default function Company() {
  usePageTitle("Company");

  return (
    <>
      <section className="page-hero page-hero--company">
        <div className="container page-hero__inner">
          <p className="section-label">Who We Are</p>
          <h1>Our Company</h1>
          <p>
            A brand built on two wheels, a love for the sport, and a commitment
            to community.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="company-highlights">
        <div className="container">
          <ul className="company-highlights__grid">
            {highlights.map((h) => (
              <li key={h.label} className="company-highlight">
                <span className="company-highlight__stat">{h.stat}</span>
                <span className="company-highlight__label">{h.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="company-pillars">
        <div className="container company-pillars__grid">
          {pillars.map((p) => (
            <article key={p.label} className="pillar-card">
              <p className="section-label">{p.label}</p>
              <h2 className="pillar-card__heading">{p.heading}</h2>
              <p className="pillar-card__body">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FLY Racing Partnership */}
      <section className="company-fly">
        <div className="container company-fly__inner">
          <div className="company-fly__content">
            <p className="section-label">Official Partnership</p>
            <h2>FLY Racing 2026</h2>
            <p>
              We are proud to carry FLY Racing gear — one of the most respected
              brands in motocross, BMX, and action sports. Our 2026 Starter
              Packs are designed to get riders fully geared up at an unbeatable
              price.
            </p>
            <ul className="company-fly__features">
              {flyFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link to="/products" className="btn-primary">
              Shop FLY Racing Gear
            </Link>
          </div>
          <div className="company-fly__emblem" aria-hidden="true">
            <span className="company-fly__year">2026</span>
            <span className="company-fly__brand">FLY</span>
            <span className="company-fly__sub">Racing</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="company-cta">
        <div className="container company-cta__inner">
          <h2>Ready to Ride with Us?</h2>
          <p>
            Join the community — book a session, grab a package, or get in touch
            for private events.
          </p>
          <div className="company-cta__btns">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/products" className="btn-outline">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import { Bike, BookOpen, CircleParking, Shield } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import "./Home.css";

const stats = [
  { number: "P150", label: "Track Pass / hr" },
  { number: "3+", label: "Ride Packages" },
  { number: "100%", label: "Helmet Safety" },
  { number: "1", label: "Epic Community" },
];

const sessions = [
  {
    icon: Bike,
    title: "Pump Track Pass",
    price: "P150",
    unit: "/ hour",
    desc: "Full access to the pump track. Feel every berm and roller.",
  },
  {
    icon: Shield,
    title: "Helmet Rental",
    price: "P100",
    unit: "/ session",
    desc: "Certified safety helmets available for all head sizes.",
  },
  {
    icon: CircleParking,
    title: "Bike Rental",
    price: "P300",
    unit: "/ session",
    desc: "Track-ready bikes for beginners and casual riders.",
  },
  {
    icon: BookOpen,
    title: "Basic Bike Lesson",
    price: "P1,000",
    unit: "/ session",
    desc: "One-on-one coaching for first-timers. Learn the fundamentals.",
  },
];

export default function Home() {
  usePageTitle("Home");

  return (
    <>
      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="home-hero__bg" aria-hidden="true" />
        <div className="home-hero__glow" aria-hidden="true" />
        <div className="home-hero__orb" aria-hidden="true" />
        <div className="container home-hero__inner">
          <p className="section-label">The Bike Playground</p>
          <h1 className="home-hero__headline">
            Ride Bold.
            <br />
            <span className="home-hero__accent">Play Hard.</span>
          </h1>
          <p className="home-hero__sub">
            The premier pump track and action sports hub. Whether you're a
            first-timer or a seasoned shredder — this is your playground.
          </p>
          <div className="home-hero__cta">
            <Link to="/contact" className="btn-primary">
              Book a Session
            </Link>
            <Link to="/products" className="btn-outline">
              View Packages
            </Link>
          </div>
        </div>
        {/* <div className="home-hero__stripe" aria-hidden="true" />
        <div className="home-hero__scroll" aria-hidden="true">
          <span className="home-hero__scroll-label">Scroll</span>
          <span className="home-hero__scroll-line" />
        </div> */}
      </section>

      {/* ── Stats ── */}
      <section className="home-stats">
        <div className="container">
          <ul className="home-stats__grid">
            {stats.map((s) => (
              <li key={s.label} className="home-stat">
                <span className="home-stat__number">{s.number}</span>
                <span className="home-stat__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Sessions ── */}
      <section className="home-sessions">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h2 className="home-sessions__heading">Sessions & Rates</h2>
          <div className="home-sessions__grid">
            {sessions.map((s) => (
              <article key={s.title} className="session-card">
                <span className="session-card__icon" aria-hidden="true">
                  <s.icon size={30} strokeWidth={2.1} />
                </span>
                <h3 className="session-card__title">{s.title}</h3>
                <p className="session-card__desc">{s.desc}</p>
                <p className="session-card__price">
                  {s.price}
                  <span className="session-card__unit">{s.unit}</span>
                </p>
              </article>
            ))}
          </div>
          <div className="home-sessions__more">
            <Link to="/products" className="btn-outline">
              See All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FLY Racing banner ── */}
      <section className="home-fly">
        <div className="container home-fly__inner">
          <div className="home-fly__content">
            <p className="section-label">FLY Racing 2026</p>
            <h2>Starter Packs Now Available</h2>
            <p>
              Three exclusive 2026 Starter Packs at <strong>P2,026</strong> each
              — track passes, jerseys, shorts, and more. Limited stock.
            </p>
            <Link to="/products" className="btn-primary">
              Shop Starter Packs
            </Link>
          </div>
          <div className="home-fly__badge" aria-hidden="true">
            <span>P2,026</span>
            <span>Starter Pack</span>
          </div>
        </div>
      </section>

      {/* ── Private booking CTA ── */}
      <section className="home-private">
        <div className="container home-private__inner">
          <div>
            <h2>Private Bookings & Events</h2>
            <p>
              Exclusive track access for groups, events, and photo shoots
              starting at P2,500.
            </p>
          </div>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

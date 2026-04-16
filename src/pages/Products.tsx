import { Link } from "react-router-dom";
import { Bike, Building2, Flag, Shield, UserRoundPen } from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import "./Products.css";

const rates = [
  {
    icon: Flag,
    title: "Pump Track Pass",
    price: "P150",
    unit: "/ hour",
    desc: "Full track access, any day.",
  },
  {
    icon: Shield,
    title: "Helmet Rental",
    price: "P100",
    unit: "/ session",
    desc: "Certified safety gear for all sizes.",
  },
  {
    icon: Bike,
    title: "Bike Rental",
    price: "P300",
    unit: "/ session",
    desc: "Track-ready rides, no bike? No problem.",
  },
  {
    icon: Building2,
    title: "Private Booking",
    price: "P2,500",
    unit: "/ booking",
    desc: "Exclusive track for your group or event.",
  },
  {
    icon: UserRoundPen,
    title: "Basic Bike Lesson",
    price: "P1,000",
    unit: "/ session",
    desc: "One-on-one coaching for beginners.",
  },
];

const packages = [
  {
    name: "Pump Max",
    price: "P2,500",
    tagline: "Monthly Unlimited Access",
    highlight: true,
    features: [
      "Unlimited pump track visits",
      "Valid for one calendar month",
      "Best value for regulars",
    ],
  },
  {
    name: "Pump X",
    price: "P1,350",
    tagline: "10 Visits for the Price of 9",
    highlight: false,
    features: [
      "10 track pass credits",
      "Use anytime — no expiry rush",
      "Share with a friend",
    ],
  },
];

const starterPacks = [
  {
    name: "Starter Pack 1",
    price: "P2,026",
    items: ["Pump X (10 Visits)", "FLY Racing Short Sleeve Jersey"],
  },
  {
    name: "Starter Pack 2",
    price: "P2,026",
    items: ["1 Pump Track Pass", "2 FLY Racing Short Sleeve Jersey"],
  },
  {
    name: "Starter Pack 3",
    price: "P2,026",
    items: ["1 Pump Track Pass", "1 FLY Racing Shorts"],
  },
];

export default function Products() {
  usePageTitle("Products");

  return (
    <>
      <section className="page-hero page-hero--products">
        <div className="container page-hero__inner">
          <p className="section-label">Gear &amp; Sessions</p>
          <h1>Products &amp; Rates</h1>
          <p>
            Everything you need to ride — from daily passes to full FLY Racing
            starter kits.
          </p>
        </div>
      </section>

      {/* Rates */}
      <section className="prod-rates">
        <div className="container">
          <p className="section-label">Daily Rates</p>
          <h2 className="prod-section-heading">Sessions &amp; Rentals</h2>
          <div className="prod-rates__grid">
            {rates.map((r) => (
              <article key={r.title} className="rate-card">
                <span className="rate-card__icon" aria-hidden="true">
                  <r.icon size={30} strokeWidth={2.1} />
                </span>
                <div className="rate-card__body">
                  <h3 className="rate-card__title">{r.title}</h3>
                  <p className="rate-card__desc">{r.desc}</p>
                </div>
                <p className="rate-card__price">
                  {r.price}
                  <span className="rate-card__unit">{r.unit}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="prod-packages">
        <div className="container">
          <p className="section-label">Value Packages</p>
          <h2 className="prod-section-heading">Ride More, Pay Less</h2>
          <div className="prod-packages__grid">
            {packages.map((p) => (
              <article
                key={p.name}
                className={`pkg-card${p.highlight ? " pkg-card--highlight" : ""}`}
              >
                {p.highlight && (
                  <span className="pkg-card__badge">Best Value</span>
                )}
                <h3 className="pkg-card__name">{p.name}</h3>
                <p className="pkg-card__tagline">{p.tagline}</p>
                <p className="pkg-card__price">{p.price}</p>
                <ul className="pkg-card__features">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={p.highlight ? "btn-primary" : "btn-outline"}
                >
                  Get This Package
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLY Racing Starter Packs */}
      <section className="prod-starter">
        <div className="container">
          <p className="section-label">FLY Racing 2026</p>
          <h2 className="prod-section-heading">Starter Packs — P2,026 Each</h2>
          <p className="prod-starter__sub">
            Ride in style with official FLY Racing gear. Three packs, all at the
            same unbeatable price.
          </p>
          <div className="prod-starter__grid">
            {starterPacks.map((sp) => (
              <article key={sp.name} className="starter-card">
                <div className="starter-card__header">
                  <h3 className="starter-card__name">{sp.name}</h3>
                  <span className="starter-card__price">{sp.price}</span>
                </div>
                <ul className="starter-card__items">
                  {sp.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline starter-card__cta">
                  Order Now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

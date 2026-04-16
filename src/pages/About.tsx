import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Handshake,
  ShieldCheck,
  TrendingUp,
  X,
} from "lucide-react";
import { usePageTitle } from "../hooks/usePageTitle";
import "./About.css";

import gallery01 from "../assets/gallery/01185_Red_Bull_Pump_Track_World_Championship_Manila_Philippines_20180407_Random_Plonsracing.jpg";
import gallery02 from "../assets/gallery/494572830_1161905232375187_4739485918148012357_n.jpg";
import gallery03 from "../assets/gallery/494573605_1623809241622333_8925443810936470934_n.jpg";
import gallery04 from "../assets/gallery/494579724_1377025270274441_8355923547576169642_n.jpg";
import gallery05 from "../assets/gallery/540933309_1348864896805894_6804314902802275695_n.jpg";
import gallery06 from "../assets/gallery/553547576_695422126907465_6749655652419548853_n.jpg";
import gallery07 from "../assets/gallery/563379944_1126806612852921_8815410444553323936_n.jpg";
import gallery08 from "../assets/gallery/566593276_1631454937832947_8304741248327771180_n.jpg";
import gallery09 from "../assets/gallery/609259407_3984799551819825_6129614940122663527_n.jpg";
import gallery10 from "../assets/gallery/629988145_889195853979596_9118900651088428819_n.jpg";
import gallery11 from "../assets/gallery/631910110_1972631513599252_4458429673798573246_n.jpg";
import gallery12 from "../assets/gallery/blades.jpeg";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Every rider gets geared up. Helmets are non-negotiable — we provide rentals if you need one.",
  },
  {
    icon: Flame,
    title: "Passion for Riding",
    desc: "We live and breathe two-wheel culture. This playground was built by riders, for riders.",
  },
  {
    icon: Handshake,
    title: "Community",
    desc: "From beginners to pros, everyone belongs here. We celebrate every rider at every level.",
  },
  {
    icon: TrendingUp,
    title: "Always Progressing",
    desc: "We evolve our track, our gear, and our lessons to keep pace with the sport.",
  },
];

const offers = [
  {
    title: "Pump Track",
    desc: "A sculpted loop of berms and rollers engineered for maximum flow and speed.",
  },
  {
    title: "Gear Rentals",
    desc: "Bikes and helmets available so you can show up and ride without the hassle.",
  },
  {
    title: "Bike Lessons",
    desc: "One-on-one coaching from experienced riders. Perfect for first-timers.",
  },
  {
    title: "Private Bookings",
    desc: "Exclusive track sessions for groups, events, and photo/video shoots.",
  },
];

const galleryImages = [
  {
    src: gallery02,
    alt: "Young rider cornering through the pump track.",
  },
  {
    src: gallery03,
    alt: "Roller skater balancing across the center humps.",
  },
  {
    src: gallery04,
    alt: "Rider carving a red bike across a tight berm.",
  },
  {
    src: gallery07,
    alt: "MTB rider gliding through a smooth bowl section.",
  },
  {
    src: gallery06,
    alt: "Rider leaning hard inside a bowl turn.",
  },
  {
    src: gallery08,
    alt: "Skateboarder popping above the rolling track.",
  },
  {
    src: gallery09,
    alt: "Young BMX rider entering a banked section.",
  },
  {
    src: gallery10,
    alt: "Roller skater in protective gear cruising the track.",
  },
  {
    src: gallery11,
    alt: "Skateboarder lifting over the wave-like humps.",
  },
  {
    src: gallery12,
    alt: "Young rider in full protection rolling inside a bowl.",
  },
  {
    src: gallery05,
    alt: "Crowd-packed race day moment inside the venue.",
  },
  {
    src: gallery01,
    alt: "Red Bull pump track championship action shot.",
  },
];

const visibleGalleryLimit = 6;

export default function About() {
  usePageTitle("About");

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);

  const isLightboxOpen = activeIndex !== null;

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setDragOffset(0);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    setDragOffset(0);
    dragStartX.current = null;
  };

  const showNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) {
        return prev;
      }
      return (prev + 1) % galleryImages.length;
    });
    setDragOffset(0);
  };

  const showPrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) {
        return prev;
      }
      return (prev - 1 + galleryImages.length) % galleryImages.length;
    });
    setDragOffset(0);
  };

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
      if (event.key === "ArrowLeft") {
        showPrev();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isLightboxOpen]);

  const activeImage = activeIndex !== null ? galleryImages[activeIndex] : null;
  const visibleImages = galleryImages.slice(0, visibleGalleryLimit);
  const remainingImageCount = galleryImages.length - visibleImages.length;

  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container page-hero__inner">
          <p className="section-label">Our Story</p>
          <h1>About Us</h1>
          <p>
            Born from a love of riding — built for everyone who feels alive on
            two wheels.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="about-story">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <p className="section-label">The Playground</p>
            <h2>Where the Track Becomes Your World</h2>
            <p>
              The Bike Playground started as a dream — a space where riders of
              all ages and skill levels could push their limits, learn new
              tricks, and connect with a community that shares the same passion.
              Today, it's the go-to destination for pump track riding in the
              area.
            </p>
            <p>
              Our pump track is meticulously designed to challenge beginners
              while keeping seasoned riders engaged. Every berm, roller, and
              rhythm section is crafted to maximize flow, fun, and progression.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
              style={{ marginTop: "8px", display: "inline-flex" }}
            >
              Visit Us Today
            </Link>
          </div>
          <div className="about-story__visual" aria-hidden="true">
            <div className="about-story__block">
              <span>EST.</span>
              <span>The Bike</span>
              <span className="about-story__block-accent">Playground</span>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="about-offers">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h2 className="about-offers__heading">Everything You Need to Ride</h2>
          <div className="about-offers__grid">
            {offers.map((o) => (
              <article key={o.title} className="offer-card">
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <p className="section-label">Our Values</p>
          <h2 className="about-values__heading">What Drives Us</h2>
          <div className="about-values__grid">
            {values.map((v) => (
              <article key={v.title} className="value-card">
                <span className="value-card__icon" aria-hidden="true">
                  <v.icon size={30} strokeWidth={2.1} />
                </span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="about-gallery">
        <div className="container">
          <p className="section-label">Gallery</p>
          <h2 className="about-gallery__heading">Track Moments</h2>
          <p className="about-gallery__lead">
            Real riders, real speed, real progression. Tap any image to open the
            full-screen gallery.
          </p>

          <div className="about-gallery__grid">
            {visibleImages.map((image, index) => {
              const isLastVisible = index === visibleImages.length - 1;
              const moreImageLabel =
                isLastVisible && remainingImageCount > 0
                  ? `+${remainingImageCount} more images`
                  : "View";

              return (
                <button
                  key={image.src}
                  type="button"
                  className={`about-gallery__item${
                    isLastVisible && remainingImageCount > 0
                      ? " about-gallery__item--more"
                      : ""
                  }`}
                  onClick={() => openLightbox(index)}
                  aria-label={`Open image ${index + 1} of ${galleryImages.length}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="about-gallery__img"
                    loading="lazy"
                  />
                  <span className="about-gallery__overlay">
                    {moreImageLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {isLightboxOpen && activeImage && (
        <div
          className="about-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery popup"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="about-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={20} strokeWidth={2.5} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="about-lightbox__nav about-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
          </button>

          <figure
            className="about-lightbox__figure"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="about-lightbox__stage"
              style={{ transform: `translateX(${dragOffset}px)` }}
              onPointerDown={(event) => {
                dragStartX.current = event.clientX;
              }}
              onPointerMove={(event) => {
                if (dragStartX.current === null) {
                  return;
                }
                setDragOffset(event.clientX - dragStartX.current);
              }}
              onPointerUp={() => {
                if (dragOffset < -80) {
                  showNext();
                } else if (dragOffset > 80) {
                  showPrev();
                }
                dragStartX.current = null;
                setDragOffset(0);
              }}
              onPointerCancel={() => {
                dragStartX.current = null;
                setDragOffset(0);
              }}
              onPointerLeave={() => {
                if (dragStartX.current === null) {
                  return;
                }
                dragStartX.current = null;
                setDragOffset(0);
              }}
            >
              <img src={activeImage.src} alt={activeImage.alt} />
            </div>
            <figcaption className="about-lightbox__caption">
              {activeIndex + 1} / {galleryImages.length}
            </figcaption>
          </figure>

          <button
            type="button"
            className="about-lightbox__nav about-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}

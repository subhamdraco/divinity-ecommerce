import React from "react";
import { Link } from "react-router-dom";
import aboutHeroBanner from "../../assets/images/visionary/about-hero-context.jpg";
import aboutVisionaryImage from "../../assets/images/visionary/about-image.jpg";
import aboutAyanangshuImage from "../../assets/images/visionary/about-ayanangshu-chowdhury.png";
import brandCardReshuNaomi from "../../assets/images/visionary/brand-reshu-naomi.jpg";
import brandCardBonjourEspecial from "../../assets/images/visionary/brand-bonjour-especial.jpg";
import brandCardTitanRuvo from "../../assets/images/visionary/brand-titan-ruvo.jpg";
import "./Index.css";

/** ISO 3166-1 alpha-2 codes for flagcdn.com. Africa uses illustrative regional flags. */
const hubs = [
  {
    title: "China",
    desc: "Advanced manufacturing capabilities and high-tech sourcing solutions.",
    flags: ["cn"],
  },
  {
    title: "India",
    desc: "Premium raw materials, R&D and formulation expertise.",
    flags: ["in"],
  },
  {
    title: "Turkey",
    desc: "Premium personal care manufacturing aligned with international standards.",
    flags: ["tr"],
  },
  {
    title: "Africa",
    desc: "Strong distribution networks and market understanding.",
    flags: ["ng", "za", "ke"],
  },
  {
    title: "UAE",
    desc: "Strategic headquarters and global logistics gateway.",
    flags: ["ae"],
  },
];

const brands = [
  {
    name: "Reshu & Naomi",
    type: "Personal Care & Beauty",
    image: brandCardReshuNaomi,
  },
  {
    name: "Bonjour & Especial",
    type: "Fragrance & Hygiene",
    image: brandCardBonjourEspecial,
  },
  {
    name: "Titan Core & Ruvo",
    type: "Sports Nutrition & Wellness",
    image: brandCardTitanRuvo,
  },
];

export default function About() {
  return (
    <div className="about-page container-fluid">
      <section className="about-page__hero" aria-labelledby="about-hero-title">
        <div
          className="about-page__hero-bg"
          style={{ "--about-hero-img": `url(${aboutHeroBanner})` }}
          aria-hidden="true"
        />
        <div className="about-page__hero-overlay" aria-hidden="true" />
        <div className="about-page__hero-inner">
          <p className="about-page__eyebrow">Global FMCG &amp; healthcare nutrition</p>
          <h1 id="about-hero-title" className="about-page__hero-title">
            Divinity Impex
          </h1>
          <p className="about-page__hero-lead">
            Manufacturing, sourcing &amp; brand development—built for modern
            consumers worldwide.
          </p>
          <div className="about-page__hero-actions">
            <a href="#about-story" className="about-page__btn about-page__btn--primary">
              Explore our story
            </a>
            <Link to="/contact" className="about-page__btn about-page__btn--ghost">
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      <main className="about-page__main">
        <section
          id="about-story"
          className="about-page__section about-page__section--surface"
        >
          <div className="about-page__container">
            <h2 className="about-page__title">About Divinity Impex</h2>
            <p className="about-page__prose">
              Founded with a vision to redefine excellence in the FMCG &amp;
              Healthcare industry, Divinity Impex has emerged as a trusted
              international manufacturing, sourcing, and brand development
              powerhouse. With a strong global footprint and a commitment to
              innovation, quality, and strategic growth, the company specializes
              in developing high-performance personal care, healthcare, hygiene,
              fragrance, nutrition, and FMCG products tailored for modern consumers
              worldwide.
            </p>
            <p className="about-page__prose">
              At Divinity Impex, we believe that successful brands are built
              through a perfect combination of market intelligence, world-class
              manufacturing, premium ingredients, and consumer trust. Our approach
              is driven by innovation, efficiency, and long-term value creation,
              enabling us to deliver products that meet international standards
              while remaining competitively priced for global markets.
            </p>
          </div>
        </section>

        <section className="about-page__stats" aria-label="Company highlights">
          <div className="about-page__container about-page__stats-grid">
            <div className="about-page__stat">
              <span className="about-page__stat-value">5+</span>
              <span className="about-page__stat-label">Global hubs</span>
            </div>
            <div className="about-page__stat">
              <span className="about-page__stat-value">100+</span>
              <span className="about-page__stat-label">Partners</span>
            </div>
            <div className="about-page__stat">
              <span className="about-page__stat-value">Multi</span>
              <span className="about-page__stat-label">Continent presence</span>
            </div>
            <div className="about-page__stat">
              <span className="about-page__stat-value">24/7</span>
              <span className="about-page__stat-label">Global operations</span>
            </div>
          </div>
        </section>

        <section className="about-page__section">
          <div className="about-page__container">
            <h2 className="about-page__title">Our global vision</h2>
            <p className="about-page__prose">
              Divinity Impex operates at the forefront of the global FMCG &amp;
              Healthcare Nutrition ecosystem, developing and manufacturing products
              that resonate with consumers across multiple continents. Our mission is
              to create high-quality, accessible, and market-leading solutions that
              combine advanced research, strategic sourcing, and operational
              excellence.
            </p>
            <p className="about-page__prose">
              From concept development to final production, every product under our
              umbrella reflects our dedication to safety, innovation, quality
              assurance, and customer satisfaction. Our integrated global network
              enables us to respond quickly to evolving market trends while
              maintaining uncompromising product standards.
            </p>
          </div>
        </section>

        <section className="about-page__section about-page__section--surface">
          <div className="about-page__container">
            <h2 className="about-page__title">
              International presence &amp; procurement
            </h2>
            <p className="about-page__prose">
              Our international business infrastructure spans across America,
              Africa, Asia Pacific, Europe, and the Middle East, allowing us to
              efficiently manage sourcing, production, logistics, and distribution
              on a global scale.
            </p>
            <h3 className="about-page__subtitle">Strategic global hubs</h3>
            <div className="about-page__grid">
              {hubs.map(({ title, desc, flags }) => (
                <article className="about-page__card" key={title}>
                  <div
                    className={
                      flags.length > 1
                        ? "about-page__card-media about-page__card-media--hub about-page__card-media--hub-multi"
                        : "about-page__card-media about-page__card-media--hub"
                    }
                  >
                    {flags.map((code) => (
                      <img
                        key={code}
                        className="about-page__hub-flag"
                        src={`https://flagcdn.com/w160/${code}.png`}
                        srcSet={`https://flagcdn.com/w320/${code}.png 2x`}
                        alt=""
                        loading="lazy"
                        width={160}
                        height={107}
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="about-page__card-body">
                    <h4 className="about-page__card-title">{title}</h4>
                    <p className="about-page__card-text">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="about-page__prose about-page__prose--tight-top">
              This global procurement ecosystem enables Divinity Impex to maintain
              exceptional product quality while optimizing costs and supply chain
              performance.
            </p>
          </div>
        </section>

        <section className="about-page__section">
          <div className="about-page__container">
            <h2 className="about-page__title">Our trusted brands</h2>
            <p className="about-page__prose">
              Over the years, Divinity Impex has developed and expanded a diverse
              portfolio of successful in-house brands designed to meet the evolving
              demands of consumers worldwide.
            </p>
            <div className="about-page__grid">
              {brands.map(({ name, type, image }) => (
                <article className="about-page__card about-page__card--brand" key={name}>
                  <div className="about-page__card-media">
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      width={640}
                      height={384}
                    />
                  </div>
                  <div className="about-page__card-body">
                    <h4 className="about-page__card-title">{name}</h4>
                    <p className="about-page__card-text">{type}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="about-page__prose about-page__prose--tight-top">
              In addition to these flagship brands, Divinity Impex continuously
              develops innovative FMCG, Healthcare and personal care product lines
              tailored for emerging global opportunities.
            </p>
          </div>
        </section>

        <section className="about-page__section about-page__section--surface">
          <div className="about-page__container">
            <h2 className="about-page__title">Data-driven product development</h2>
            <p className="about-page__prose">
              At Divinity Impex, every successful product begins with extensive
              market intelligence and strategic research.
            </p>
            <ul className="about-page__feature-list">
              <li>Category size and growth analysis</li>
              <li>Consumer behavior research</li>
              <li>Pricing strategy and benchmarking</li>
              <li>Competitor brand analysis</li>
              <li>Product trend forecasting</li>
              <li>Market demand evaluation</li>
            </ul>
            <p className="about-page__prose about-page__prose--tight-top">
              This data-driven methodology allows us to identify high-potential
              product categories and create solutions that deliver real market
              value.
            </p>
          </div>
        </section>

        <section className="about-page__section">
          <div className="about-page__container">
            <h2 className="about-page__title">
              Strategic sourcing &amp; manufacturing excellence
            </h2>
            <p className="about-page__prose">
              Our global sourcing strategy focuses on securing premium-quality raw
              materials at highly competitive price points through an extensive
              international supplier network.
            </p>
            <h3 className="about-page__subtitle">What sets our manufacturing apart?</h3>
            <div className="about-page__grid">
              <article className="about-page__card about-page__card--text">
                <h4 className="about-page__card-title">Global sourcing expertise</h4>
                <p className="about-page__card-text">
                  We identify and procure the finest ingredients and materials from
                  trusted suppliers worldwide.
                </p>
              </article>
              <article className="about-page__card about-page__card--text">
                <h4 className="about-page__card-title">Partner manufacturing facilities</h4>
                <p className="about-page__card-text">
                  Through strategic partnerships with high-output production
                  facilities, we ensure scalable and seamless manufacturing
                  capabilities.
                </p>
              </article>
              <article className="about-page__card about-page__card--text">
                <h4 className="about-page__card-title">Quality assurance</h4>
                <p className="about-page__card-text">
                  Every product undergoes rigorous multi-stage testing and compliance
                  verification to meet international safety and quality certifications.
                </p>
              </article>
            </div>
            <blockquote className="about-page__pullquote">
              Our manufacturing philosophy is centered around consistency, efficiency,
              reliability, and innovation.
            </blockquote>
          </div>
        </section>

        <section className="about-page__section about-page__section--accent">
          <div className="about-page__container about-page__container--narrow">
            <h2 className="about-page__title about-page__title--on-dark">
              The Divinity Impex volume advantage
            </h2>
            <p className="about-page__prose about-page__prose--on-dark">
              Our large-scale procurement capability enables premium quality
              products at highly competitive pricing, helping distributors,
              retailers and partners achieve stronger margins.
            </p>
            <p className="about-page__prose about-page__prose--on-dark">
              This volume advantage enables us to manufacture premium-quality products
              at disruptive price points, creating exceptional value for distributors,
              retailers, and business partners.
            </p>
            <p className="about-page__prose about-page__prose--on-dark">
              By optimizing operational efficiency and procurement economics, we pass
              these benefits directly to our partners, helping them achieve stronger
              margins and long-term profitability.
            </p>
          </div>
        </section>

        <section className="about-page__section about-page__section--surface">
          <div className="about-page__container">
            <h2 className="about-page__title">
              A legacy built on confidence &amp; experience
            </h2>
            <p className="about-page__prose">
              With decades of combined industry expertise and strong wholesale
              distribution foundations, Divinity Impex continues to drive sustainable
              growth across international markets.
            </p>
          </div>
        </section>

        <section
          className="about-page__section about-page__section--vision"
          aria-labelledby="about-vision-title"
        >
          <div className="about-page__container about-page__container--vision">
            <header className="about-page__vision-header">
              <p className="about-page__vision-eyebrow">People behind the vision</p>
              <h2 id="about-vision-title" className="about-page__title">
                Visionary leadership
              </h2>
              <p className="about-page__vision-lead">
                Founders, advisors, and strategists shaping how Divinity Impex serves partners
                and communities worldwide.
              </p>
            </header>

            <article className="about-page__vision-spotlight">
              <div className="about-page__vision-spotlight-media">
                <img
                  src={aboutVisionaryImage}
                  alt="Rizwan Adatia, founder and visionary behind Divinity Impex"
                  loading="lazy"
                />
                <div className="about-page__vision-spotlight-media-cap" aria-hidden="true">
                  <span className="about-page__vision-spotlight-media-cap-line" />
                </div>
              </div>
              <div className="about-page__vision-spotlight-body">
                <div className="about-page__vision-spotlight-head">
                  <h3 className="about-page__vision-name">Rizwan Adatia</h3>
                  <ul className="about-page__vision-tags" aria-label="Roles and titles">
                    <li>Chairman – COGEF Group</li>
                    <li>Chairman – RAF Global</li>
                    <li>Vision Exports UAE</li>
                    <li>Motivational speaker</li>
                  </ul>
                </div>
                <div className="about-page__vision-bio">
                  <p>
                    The man behind us, the founder of our company and our Managing Director.
                  </p>
                  <p>
                    He is a visionary entrepreneur, philanthropist, and advocate for positive
                    change — a motivational speaker and businessman who shares his life
                    experience and helps others grow through positive influence.
                  </p>
                  <p>
                    From humble beginnings in Porbandar, Gujarat to a thriving network of
                    businesses across 10+ African countries — a story worth telling. He is
                    also the Director of{" "}
                    <a
                      href="https://www.cogefgroup.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-page__vision-inline-link"
                    >
                      COGEF Group
                    </a>
                    .
                  </p>
                  <p>
                    His vision enabled robust ecosystems irrespective of challenges. His
                    personal philanthropy inspired{" "}
                    <a
                      href="https://rafglobal.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-page__vision-inline-link"
                    >
                      RAF Global
                    </a>
                    , an international NGO supporting communities across India and Africa in
                    food, health, and education.
                  </p>
                  <p>
                    He is co-owner of Vision Exports &amp;{" "}
                    <a
                      href="https://www.ayulinternational.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-page__vision-inline-link"
                    >
                      Ayul International
                    </a>{" "}
                    in the UAE, and owner of{" "}
                    <a
                      href="https://www.divinityimpex.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-page__vision-inline-link"
                    >
                      Divinity Impex
                    </a>{" "}
                    in the UAE. He leads a team of more than 3,000+ professionals.
                  </p>
                </div>
                <div className="about-page__vision-actions">
                  <span className="about-page__vision-actions-label">Official links</span>
                  <div className="about-page__vision-actions-row">
                    <a
                      href="https://www.rizwanadatia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-page__vision-pill"
                    >
                      rizwanadatia.com
                    </a>
                    <a
                      href="https://www.facebook.com/iamrizwanadatia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-page__vision-pill about-page__vision-pill--ghost"
                    >
                      Facebook — view more
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="about-page__vision-spotlight about-page__vision-spotlight--follow">
              <div className="about-page__vision-spotlight-media">
                <img
                  src={aboutAyanangshuImage}
                  alt="Ayanangshu A. Chowdhury, strategy consultant at Divinity Impex LLC"
                  loading="lazy"
                />
                <div className="about-page__vision-spotlight-media-cap" aria-hidden="true">
                  <span className="about-page__vision-spotlight-media-cap-line" />
                </div>
              </div>
              <div className="about-page__vision-spotlight-body">
                <div className="about-page__vision-spotlight-head">
                  <h3 className="about-page__vision-name">Ayanangshu A. Chowdhury</h3>
                  <ul className="about-page__vision-tags" aria-label="Roles and titles">
                    <li>Strategy consultant</li>
                    <li>Divinity Impex LLC</li>
                    <li>FMCG &amp; brand strategy</li>
                  </ul>
                </div>
                <div className="about-page__vision-bio">
                  <p>
                    The strategy consultant at Divinity Impex LLC, with extensive experience
                    working alongside leading FMCG companies. He brings a strong strategic
                    mindset backed by practical industry exposure, helping brands navigate
                    competitive markets and accelerate sustainable growth.
                  </p>
                  <p>
                    With expertise in FMCG brand strategy, market expansion, portfolio
                    planning, and go-to-market execution, he plays a critical role in shaping
                    business direction and long-term growth strategies at Divinity Impex. His
                    approach combines market intelligence, consumer insights, and data-driven
                    analysis to build scalable and resilient brands.
                  </p>
                  <p>
                    At Divinity Impex LLC, he contributes to strategic planning, brand
                    positioning, pricing strategy, and channel development, ensuring alignment
                    between business objectives and market opportunities. He supports the
                    company&apos;s vision of building trusted, high-performance consumer brands
                    across regional and international markets.
                  </p>
                </div>
              </div>
            </article>

            <p className="about-page__vision-footnote">
              Beyond business growth, the company remains focused on creating meaningful value
              for communities, partners, and consumers worldwide.
            </p>
          </div>
        </section>

        <section className="about-page__section about-page__section--surface">
          <div className="about-page__container">
            <h2 className="about-page__title">Why choose Divinity Impex</h2>
            <div className="about-page__pill-grid">
              {[
                "Global FMCG & Healthcare Nutrition expertise",
                "International sourcing network",
                "High-quality manufacturing standards",
                "Strong distribution infrastructure",
                "Competitive pricing advantages",
                "Market-driven product innovation",
                "Reliable global partnerships",
                "Premium personal care & nutrition brands",
                "Efficient logistics and operational systems",
                "Long-term business growth focus"
              ].map((label) => (
                <div className="about-page__pill" key={label}>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__cta" aria-labelledby="about-cta-title">
          <div className="about-page__cta-bg" aria-hidden="true" />
          <div className="about-page__container about-page__container--narrow about-page__cta-inner">
            <h2 id="about-cta-title" className="about-page__cta-title">
              Let&apos;s build the future of FMCG &amp; healthcare nutrition together
            </h2>
            <p className="about-page__cta-lead">
              At Divinity Impex, we are more than manufacturers — we are strategic growth partners committed to building powerful brands, delivering innovative products, and creating sustainable business success worldwide.
            </p>
            <p className="about-page__cta-lead">
              Whether you are a distributor, retailer, private label partner, or international business collaborator, Divinity Impex offers the expertise, infrastructure, and vision to help you grow in today’s competitive global marketplace.
            </p>
            <Link to="/contact" className="about-page__btn about-page__btn--primary about-page__btn--lg">
              Contact us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

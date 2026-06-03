import React from "react";
import "./Index.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
};

const hubs = [
  [
    "China",
    "Advanced manufacturing capabilities and high-tech sourcing solutions.",
  ],
  ["India", "Premium raw materials, R&D and formulation expertise."],
  [
    "Turkey",
    "Premium personal care manufacturing aligned with international standards.",
  ],
  ["Africa", "Strong distribution networks and market understanding."],
  ["UAE", "Strategic headquarters and global logistics gateway."],
];

const brands = [
  ["Reshu & Naomi", "Personal Care & Beauty"],
  ["Bonjour & Especial", "Fragrance & Hygiene"],
  ["Titan Core & Ruvo", "Sports Nutrition & Wellness"],
];

export default function About() {
  return (
    <div className="about-page container-fluid">
      <section className="hero">
        <div className="overlay" />
        <div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Divinity Impex</h1>
          <p>
            Global FMCG & Healthcare Nutrition Manufacturing & Brand Development
            Partner
          </p>
          <a href="#vision" className="btn">
            Explore Our Story
          </a>
        </div>
      </section>

      <section
        id="vision"
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="whileInView"
      >
        <h2 className="section-title">About Divinity Impex</h2>
        <p>
          Founded with a vision to redefine excellence in the FMCG & Healthcare
          industry, Divinity Impex has emerged as a trusted international
          manufacturing, sourcing, and brand development powerhouse. With a
          strong global footprint and a commitment to innovation, quality, and
          strategic growth, the company specializes in developing
          high-performance personal care, healthcare, hygiene, fragrance,
          nutrition, and FMCG products tailored for modern consumers worldwide.<br/><br/>
          At Divinity Impex, we believe that successful brands are built through
          a perfect combination of market intelligence, world-class
          manufacturing, premium ingredients, and consumer trust. Our approach
          is driven by innovation, efficiency, and long-term value creation,
          enabling us to deliver products that meet international standards
          while remaining competitively priced for global markets.
        </p>
      </section>

      <section className="stats">
        <div>
          <h3>5+</h3>
          <span>Global Hubs</span>
        </div>
        <div>
          <h3>100+</h3>
          <span>Partners</span>
        </div>
        <div>
          <h3>Multi-Continent</h3>
          <span>Presence</span>
        </div>
        <div>
          <h3>24/7</h3>
          <span>Global Operations</span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Global Vision</h2>
        <p>
         Divinity Impex operates at the forefront of the global FMCG & Healthcare Nutrition ecosystem, developing and manufacturing products that resonate with consumers across multiple continents. Our mission is to create high-quality, accessible, and market-leading solutions that combine advanced research, strategic sourcing, and operational excellence.
        </p>
        <p>
          From concept development to final production, every product under our umbrella reflects our dedication to safety, innovation, quality assurance, and customer satisfaction. Our integrated global network enables us to respond quickly to evolving market trends while maintaining uncompromising product standards.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">
          International Presence & Procurement Network
        </h2>
        <p>
          Our international business infrastructure spans across America,
          Africa, Asia Pacific, Europe, and the Middle East, allowing us to
          efficiently manage sourcing, production, logistics, and distribution
          on a global scale.{" "}
        </p>
        <h2>Strategic Global Hubs</h2>
        <div className="grid">
          {hubs.map(([title, desc]) => (
            <div whileHover={{ y: -8 }} className="card" key={title}>
              <img
                src={`https://picsum.photos/600/400?random=${title}`}
                alt={title}
              />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <p>This global procurement ecosystem enables Divinity Impex to maintain exceptional product quality while optimizing costs and supply chain performance.</p>
      </section>

      <section className="section">
        <h2 className="section-title">Our Trusted Brands</h2>
        <p>Over the years, Divinity Impex has developed and expanded a diverse portfolio of successful in-house brands designed to meet the evolving demands of consumers worldwide.</p>
        <div className="grid">
          {brands.map(([name, type]) => (
            <div className="brand-card" key={name}>
              <img
                src={`https://picsum.photos/500/300?random=${name}`}
                alt={name}
              />
              <h3>{name}</h3>
              <p>{type}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Data-Driven Product Development</h2>
        <ul className="feature-list">
          <li>Category size and growth analysis</li>
          <li>Consumer behavior research</li>
          <li>Pricing strategy and benchmarking</li>
          <li>Competitor brand analysis</li>
          <li>Product trend forecasting</li>
          <li>Market demand evaluation</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">
          Strategic Sourcing & Manufacturing Excellence
        </h2>
        <div className="grid">
          <div className="card">
            <h3>Global Sourcing Expertise</h3>
          </div>
          <div className="card">
            <h3>Partner Manufacturing Facilities</h3>
          </div>
          <div className="card">
            <h3>Quality Assurance</h3>
          </div>
        </div>
      </section>

      <section className="section dark">
        <h2 className="section-title">The Divinity Impex Volume Advantage</h2>
        <p>
          Our large-scale procurement capability enables premium quality
          products at highly competitive pricing, helping distributors,
          retailers and partners achieve stronger margins.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">
          A Legacy Built on Confidence & Experience
        </h2>
        <p>
          With decades of combined industry expertise and strong wholesale
          distribution foundations, Divinity Impex continues to drive
          sustainable growth across international markets.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Visionary Leadership</h2>
        <div className="leader">
          <img
            src="https://picsum.photos/400/500?random=rizwan"
            alt="Rizwan Adatia"
          />
          <div>
            <h3>Rizwan Adatia</h3>
            <p>
              Under the leadership of Rizwan Adatia, Divinity Impex continues to
              expand its global influence through innovation, ethical business
              practices and purpose-driven success.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Why Choose Divinity Impex</h2>
        <div className="grid">
          {[
            "Global Expertise",
            "International Sourcing",
            "Manufacturing Standards",
            "Distribution Infrastructure",
            "Competitive Pricing",
            "Product Innovation",
            "Reliable Partnerships",
            "Efficient Logistics",
          ].map((i) => (
            <div className="card" key={i}>
              {i}
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2 className="section-title">
          Let’s Build the Future of FMCG & Healthcare Nutrition Together
        </h2>
        <p>More than manufacturers — strategic growth partners.</p>
        <a className="btn" href="/contact">
          Contact Us
        </a>
      </section>
    </div>
  );
}

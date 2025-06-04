// pages/process.js
import Head from 'next/head'
import Link from 'next/link'

export default function Process() {
  return (
    <>
      <Head>
        <title>Our Process | How Portfolio Homebuyers Works</title>
        <meta name="description" content="Learn how Portfolio Homebuyers makes selling your investment properties fast, easy, and profitable. Our simple 4-step process explained." />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" rel="stylesheet" />
      </Head>

      <nav className="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo">Portfolio Homebuyers</Link>
          <div className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/process">Process</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/#offer-form" className="nav-cta">Sell Now</Link>
          </div>
        </div>
      </nav>

      <main className="page-content">
        <section className="page-hero">
          <div className="gradient-overlay"></div>
          <div className="container">
            <h1>Our <span className="gradient-text">Simple Process</span></h1>
            <p className="hero-subtitle">From first contact to cash in hand in as little as 7 days</p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <div className="process-timeline">
              <div className="timeline-item">
                <div className="timeline-number">1</div>
                <div className="timeline-content glass-card">
                  <h3>Submit Your Portfolio Information</h3>
                  <p className="timeline-time">Time: 5 minutes</p>
                  <p>Fill out our simple form with basic details about your properties. Include addresses, property types, and your timeline. No lengthy questionnaires or complicated paperwork.</p>
                  <ul>
                    <li>Property addresses and types</li>
                    <li>Current condition (we buy AS-IS)</li>
                    <li>Your preferred timeline</li>
                    <li>Any special circumstances</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-number">2</div>
                <div className="timeline-content glass-card">
                  <h3>Receive Your Cash Offers</h3>
                  <p className="timeline-time">Time: Within 24 hours</p>
                  <p>Our team analyzes each property individually using current market data, comparable sales, and our extensive experience. You'll receive fair cash offers for each property.</p>
                  <ul>
                    <li>Individual property valuations</li>
                    <li>Package deal options</li>
                    <li>Flexible terms</li>
                    <li>No obligation to accept</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-number">3</div>
                <div className="timeline-content glass-card">
                  <h3>Choose Your Exit Strategy</h3>
                  <p className="timeline-time">Time: Your decision</p>
                  <p>Review our offers at your pace. Accept all properties, select specific ones, or negotiate terms. We're flexible and work with your goals.</p>
                  <ul>
                    <li>Sell entire portfolio</li>
                    <li>Cherry-pick properties</li>
                    <li>Negotiate terms</li>
                    <li>No pressure tactics</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-number">4</div>
                <div className="timeline-content glass-card">
                  <h3>Close and Get Paid</h3>
                  <p className="timeline-time">Time: 7-30 days (your choice)</p>
                  <p>Once you accept, we handle everything. No repairs, no showings, no realtor commissions. Close on your timeline and receive your funds.</p>
                  <ul>
                    <li>We handle all paperwork</li>
                    <li>Use your title company or ours</li>
                    <li>Funds wired at closing</li>
                    <li>Done deal!</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="comparison-section">
              <h2>Traditional Sale vs. Portfolio Homebuyers</h2>
              <div className="comparison-grid">
                <div className="comparison-card traditional">
                  <h3>Traditional Sale</h3>
                  <ul className="comparison-list cons">
                    <li>List with realtor (6% commission)</li>
                    <li>Make repairs and updates</li>
                    <li>Stage and show properties</li>
                    <li>Wait 4-6 months average</li>
                    <li>Deal with buyer financing falling through</li>
                    <li>Negotiate repairs after inspection</li>
                    <li>Pay holding costs entire time</li>
                  </ul>
                </div>
                <div className="comparison-card our-way">
                  <h3>Portfolio Homebuyers</h3>
                  <ul className="comparison-list pros">
                    <li>Direct sale (0% commission)</li>
                    <li>Buy AS-IS condition</li>
                    <li>No showings needed</li>
                    <li>Close in 7-30 days</li>
                    <li>Cash offer - no financing contingency</li>
                    <li>No inspection negotiations</li>
                    <li>Stop paying holding costs fast</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cta-section glass-card">
              <h2>Ready to Get Started?</h2>
              <p>The first step takes just 5 minutes.</p>
              <Link href="/#offer-form" className="glow-button">Get Your Cash Offer →</Link>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-column">
                <h4>Portfolio Homebuyers</h4>
                <p>The fastest, most reliable way to exit your investment properties.</p>
              </div>
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/process">Our Process</Link></li>
                  <li><Link href="/reviews">Reviews</Link></li>
                  <li><Link href="/partners">Partners</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <p>1-800-XXX-XXXX</p>
                <p>info@portfoliohomebuyers.com</p>
                <p>Available 7 days a week</p>
              </div>
              <div className="footer-column">
                <h4>Get Started</h4>
                <p>Ready to sell your portfolio?</p>
                <Link href="/#offer-form" className="footer-cta">Get Cash Offer →</Link>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Portfolio Homebuyers. All rights reserved.</p>
              <div className="footer-links">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --navy: #0f172a;
          --navy-light: #1e293b;
          --emerald: #10b981;
          --emerald-dark: #059669;
          --gray: #64748b;
          --light-gray: #f1f5f9;
          --white: #ffffff;
        }

        body {
          font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: var(--navy);
          background: var(--white);
          overflow-x: hidden;
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: var(--emerald);
        }

        .nav-cta {
          background: var(--emerald);
          color: var(--white) !important;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
        }

        .nav-cta:hover {
          background: var(--emerald-dark);
          color: var(--white) !important;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .page-content {
          padding-top: 80px;
        }

        .page-hero {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .page-hero h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          position: relative;
          z-index: 1;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .content-section {
          padding: 80px 0;
          background: linear-gradient(to bottom, var(--light-gray), white);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(16, 185, 129, 0.1);
          border-radius: 16px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
        }

        .process-timeline {
          margin: 60px 0;
        }

        .timeline-item {
          display: flex;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-item:not(:last-child):after {
          content: '';
          position: absolute;
          left: 30px;
          top: 70px;
          width: 2px;
          height: calc(100% + 40px);
          background: linear-gradient(to bottom, var(--emerald), var(--emerald-dark));
          opacity: 0.3;
        }

        .timeline-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--emerald), var(--emerald-dark));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--white);
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .timeline-content {
          flex: 1;
          padding: 30px;
        }

        .timeline-content h3 {
          color: var(--navy);
          margin-bottom: 10px;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .timeline-time {
          color: var(--emerald-dark);
          font-weight: 600;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .timeline-content p {
          color: var(--gray);
          margin-bottom: 20px;
          line-height: 1.8;
        }

        .timeline-content ul {
          list-style: none;
        }

        .timeline-content li {
          padding: 8px 0;
          padding-left: 25px;
          position: relative;
          color: var(--gray);
        }

        .timeline-content li:before {
          content: "•";
          position: absolute;
          left: 10px;
          color: var(--emerald);
          font-weight: bold;
        }

        .comparison-section {
          margin: 80px 0;
        }

        .comparison-section h2 {
          text-align: center;
          margin-bottom: 50px;
          font-size: 2.5rem;
          color: var(--navy);
          font-weight: 700;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .comparison-card {
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .comparison-card.traditional {
          background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
          border: 1px solid #fecaca;
        }

        .comparison-card.our-way {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border: 1px solid #86efac;
        }

        .comparison-card h3 {
          margin-bottom: 30px;
          font-size: 1.5rem;
          text-align: center;
          color: var(--navy);
          font-weight: 700;
        }

        .comparison-list {
          list-style: none;
        }

        .comparison-list li {
          padding: 12px 0;
          padding-left: 35px;
          position: relative;
          line-height: 1.6;
        }

        .comparison-list.cons li {
          color: #7f1d1d;
        }

        .comparison-list.cons li:before {
          content: "✗";
          position: absolute;
          left: 0;
          color: #dc2626;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .comparison-list.pros li {
          color: #14532d;
        }

        .comparison-list.pros li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #16a34a;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .cta-section {
          text-align: center;
          padding: 60px;
          background: var(--navy);
          color: white;
          margin-top: 60px;
        }

        .cta-section h2 {
          margin-bottom: 20px;
          font-size: 2.5rem;
        }

        .cta-section p {
          margin-bottom: 30px;
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .glow-button {
          background: linear-gradient(135deg, var(--emerald), var(--emerald-dark));
          color: var(--white);
          padding: 16px 32px;
          border: none;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px 0 rgba(16, 185, 129, 0.4);
          font-family: 'Satoshi', sans-serif;
        }

        .glow-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px 0 rgba(16, 185, 129, 0.6);
        }

        .footer {
          background: var(--navy);
          color: white;
          padding: 60px 0 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-column h4 {
          margin-bottom: 20px;
          color: var(--emerald);
        }

        .footer-column ul {
          list-style: none;
        }

        .footer-column ul li {
          margin-bottom: 10px;
        }

        .footer-column a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: all 0.3s;
        }

        .footer-column a:hover {
          opacity: 1;
          color: var(--emerald);
        }

        .footer-cta {
          display: inline-block;
          margin-top: 15px;
          background: var(--emerald);
          color: var(--white);
          padding: 10px 25px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }

        .footer-cta:hover {
          background: var(--emerald-dark);
          transform: translateY(-2px);
        }

        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .footer-links {
          display: flex;
          gap: 30px;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.3s;
        }

        .footer-links a:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .timeline-item {
            flex-direction: column;
            gap: 20px;
          }

          .timeline-item:not(:last-child):after {
            display: none;
          }

          .comparison-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </>
  )
}

// pages/about.js
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About Portfolio Homebuyers | Cash Home Buyers for Investors</title>
        <meta name="description" content="Learn about Portfolio Homebuyers - the trusted cash buyer for real estate investors looking to exit their portfolios quickly and efficiently." />
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
            <h1>About <span className="gradient-text">Portfolio Homebuyers</span></h1>
            <p className="hero-subtitle">The investor's choice for portfolio liquidation since 2015</p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <div className="content-grid">
              <div className="content-main">
                <h2>Who We Are</h2>
                <p>Portfolio Homebuyers was founded by real estate investors, for real estate investors. We understand the unique challenges of managing investment properties because we've been there ourselves.</p>
                
                <p>Unlike traditional home buyers who focus on single-family residences, we specialize in purchasing entire portfolios, distressed properties, and complex investment situations that others won't touch.</p>

                <h2>Our Mission</h2>
                <p>To provide real estate investors with a fast, fair, and flexible exit strategy that maximizes value and minimizes hassle.</p>

                <h2>Why Investors Choose Us</h2>
                <ul className="feature-list">
                  <li><strong>Speed:</strong> Cash offers in 24 hours, close in as little as 7 days</li>
                  <li><strong>Flexibility:</strong> Buy single properties or entire portfolios</li>
                  <li><strong>Simplicity:</strong> No repairs, no showings, no commissions</li>
                  <li><strong>Expertise:</strong> We understand investment property challenges</li>
                  <li><strong>Reliability:</strong> Over $47M in properties purchased</li>
                </ul>

                <h2>Our Team</h2>
                <p>Our acquisition team consists of experienced real estate professionals who understand portfolio management, property valuation, and the unique needs of real estate investors.</p>
              </div>

              <div className="content-sidebar">
                <div className="stat-card glass-card">
                  <div className="stat-number">$47M+</div>
                  <div className="stat-label">Properties Purchased</div>
                </div>
                <div className="stat-card glass-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Investors</div>
                </div>
                <div className="stat-card glass-card">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card glass-card">
                  <div className="stat-number">19</div>
                  <div className="stat-label">Day Avg Close Time</div>
                </div>
              </div>
            </div>

            <div className="cta-section glass-card">
              <h2>Ready to Learn More?</h2>
              <p>See how our process works or get your cash offer today.</p>
              <div className="cta-buttons">
                <Link href="/process" className="glow-button">Our Process →</Link>
                <Link href="/#offer-form" className="glow-button-outline">Get Cash Offer →</Link>
              </div>
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

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .content-main h2 {
          color: var(--navy);
          margin: 40px 0 20px;
          font-size: 2rem;
          font-weight: 700;
        }

        .content-main h2:first-child {
          margin-top: 0;
        }

        .content-main p {
          margin-bottom: 20px;
          color: var(--gray);
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .feature-list {
          list-style: none;
          margin: 20px 0;
        }

        .feature-list li {
          padding: 12px 0;
          padding-left: 30px;
          position: relative;
          color: var(--gray);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .feature-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--emerald);
          font-weight: bold;
          font-size: 1.2rem;
        }

        .stat-card {
          padding: 30px;
          text-align: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--emerald-dark);
          margin-bottom: 10px;
        }

        .stat-label {
          color: var(--gray);
          font-size: 1rem;
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
          color: white;
          font-size: 2.5rem;
        }

        .cta-section p {
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
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

        .glow-button-outline {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 14px 30px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          font-family: 'Satoshi', sans-serif;
        }

        .glow-button-outline:hover {
          background: white;
          color: var(--navy);
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

          .page-hero h1 {
            font-size: 2rem;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
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

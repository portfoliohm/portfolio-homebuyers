// pages/reviews.js
import Head from 'next/head'
import Link from 'next/link'

export default function Reviews() {
  return (
    <>
      <Head>
        <title>Reviews & Testimonials | Portfolio Homebuyers Success Stories</title>
        <meta name="description" content="Read real reviews from investors who successfully sold their portfolios to Portfolio Homebuyers. See why we're the trusted choice." />
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
            <h1>Investor <span className="gradient-text">Success Stories</span></h1>
            <p className="hero-subtitle">Real reviews from real estate investors we've helped</p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <div className="reviews-grid">
              <div className="review-card featured glass-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h3>Jim K.</h3>
                    <p>Retired Landlord</p>
                  </div>
                  <div className="review-meta">
                    <span className="properties">12 Properties</span>
                    <span className="savings">Saved $74,000</span>
                  </div>
                </div>
                <p className="review-text">
                  "After 30 years as a landlord, I was ready to retire but dreaded the thought of selling 12 properties individually. Portfolio Homebuyers made it simple - one transaction, fair prices, and closed in just 21 days. The $74,000 I saved in commissions alone made this the smartest decision I could have made."
                </p>
                <div className="review-stats">
                  <div className="stat">
                    <strong>Close Time:</strong> 21 days
                  </div>
                  <div className="stat">
                    <strong>Properties:</strong> 12 rentals
                  </div>
                </div>
              </div>

              <div className="review-card glass-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h3>Sarah M.</h3>
                    <p>Active Investor</p>
                  </div>
                  <div className="review-meta">
                    <span className="properties">3 Properties</span>
                  </div>
                </div>
                <p className="review-text">
                  "I had three problem properties that were killing my returns. Portfolio Homebuyers bought all three AS-IS, which meant I didn't have to deal with $50k+ in repairs. Now I can focus on my performing properties."
                </p>
              </div>

              <div className="review-card glass-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h3>The Johnson Estate</h3>
                    <p>Estate Sale</p>
                  </div>
                  <div className="review-meta">
                    <span className="properties">8 Properties</span>
                  </div>
                </div>
                <p className="review-text">
                  "Inherited properties in three different states. The thought of managing or selling them traditionally was overwhelming. Portfolio Homebuyers handled everything remotely and we closed in 30 days."
                </p>
              </div>

              <div className="review-card glass-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h3>Michael T.</h3>
                    <p>Fix & Flip Investor</p>
                  </div>
                  <div className="review-meta">
                    <span className="properties">5 Properties</span>
                  </div>
                </div>
                <p className="review-text">
                  "Market shifted and I had 5 flips that weren't moving. Rather than hold and bleed money, I sold all 5 to Portfolio Homebuyers. They closed fast and I was able to move on to better opportunities."
                </p>
              </div>

              <div className="review-card glass-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h3>Robert & Linda P.</h3>
                    <p>Long-term Landlords</p>
                  </div>
                  <div className="review-meta">
                    <span className="properties">7 Properties</span>
                  </div>
                </div>
                <p className="review-text">
                  "We were tired of midnight maintenance calls and dealing with property management. Selling to Portfolio Homebuyers let us exit the landlord business on our terms. Professional, fast, and fair."
                </p>
              </div>

              <div className="review-card glass-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h3>David Chen</h3>
                    <p>Out-of-State Investor</p>
                  </div>
                  <div className="review-meta">
                    <span className="properties">4 Properties</span>
                  </div>
                </div>
                <p className="review-text">
                  "Managing properties from 2,000 miles away became too much. Portfolio Homebuyers gave me fair offers and handled everything remotely. No trips needed, just a smooth transaction."
                </p>
              </div>
            </div>

            <div className="stats-section">
              <h2>By The Numbers</h2>
              <div className="stats-grid">
                <div className="stat-box glass-card">
                  <div className="stat-number">96%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
                <div className="stat-box glass-card">
                  <div className="stat-number">19 Days</div>
                  <div className="stat-label">Average Close Time</div>
                </div>
                <div className="stat-box glass-card">
                  <div className="stat-number">$47M+</div>
                  <div className="stat-label">Properties Purchased</div>
                </div>
                <div className="stat-box glass-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Investors</div>
                </div>
              </div>
            </div>

            <div className="cta-section glass-card">
              <h2>Join Our Success Stories</h2>
              <p>Get your no-obligation cash offer today.</p>
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

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .review-card {
          padding: 35px;
          transition: all 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }

        .review-card.featured {
          grid-column: 1 / -1;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.02) 100%);
          border: 2px solid rgba(16, 185, 129, 0.2);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 20px;
        }

        .reviewer-info h3 {
          margin-bottom: 5px;
          color: var(--navy);
          font-size: 1.3rem;
          font-weight: 700;
        }

        .reviewer-info p {
          color: var(--gray);
          font-size: 0.95rem;
        }

        .review-meta {
          display: flex;
          gap: 15px;
        }

        .review-meta span {
          background: linear-gradient(135deg, var(--emerald), var(--emerald-dark));
          color: var(--white);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 2px 10px rgba(16, 185, 129, 0.3);
        }

        .review-text {
          color: var(--gray);
          line-height: 1.8;
          margin-bottom: 20px;
          font-style: italic;
          font-size: 1.05rem;
        }

        .review-stats {
          display: flex;
          gap: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(16, 185, 129, 0.1);
        }

        .review-stats .stat {
          color: var(--gray);
          font-size: 0.95rem;
        }

        .stats-section {
          margin: 80px 0;
          text-align: center;
        }

        .stats-section h2 {
          margin-bottom: 50px;
          font-size: 2.5rem;
          color: var(--navy);
          font-weight: 700;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .stat-box {
          background: var(--navy);
          color: white;
          padding: 50px 30px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-box:hover {
          transform: scale(1.05);
        }

        .stat-box .stat-number {
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--emerald), var(--emerald-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .stat-box .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
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

          .reviews-grid {
            grid-template-columns: 1fr;
          }

          .review-header {
            flex-direction: column;
            gap: 15px;
          }

          .review-stats {
            flex-direction: column;
            gap: 10px;
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

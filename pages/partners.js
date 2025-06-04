// pages/partners.js
import Head from 'next/head'
import Link from 'next/link'

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partner Program | Referral Opportunities for Real Estate Professionals</title>
        <meta name="description" content="Join Portfolio Homebuyers' partner program. Help your clients exit investment properties while building your reputation as a problem solver." />
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
            <h1>Partner <span className="gradient-text">Program</span></h1>
            <p className="hero-subtitle">Turn dead deals into success stories</p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <div className="partner-intro">
              <h2>For Real Estate Professionals Who Want More</h2>
              <p className="lead-text">Every professional has deals that don't fit conventional boxes. Properties that won't qualify for traditional financing. Investors who need to sell before they can buy. Now you have a solution that makes you the hero.</p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card glass-card">
                <div className="benefit-icon">💰</div>
                <h3>For Real Estate Agents</h3>
                <ul>
                  <li>Help investors when traditional buyers won't work</li>
                  <li>No MLS listings or marketing needed</li>
                  <li>We handle everything directly</li>
                  <li>Referral compensation available*</li>
                  <li>Strengthen your reputation as a problem solver</li>
                </ul>
              </div>
              <div className="benefit-card glass-card">
                <div className="benefit-icon">🏦</div>
                <h3>For Mortgage Professionals</h3>
                <ul>
                  <li>Help clients free up capital for new loans</li>
                  <li>Solve DTI issues by eliminating properties</li>
                  <li>Save deals that would normally die</li>
                  <li>Educational partnership opportunities</li>
                  <li>Become the lender who finds solutions</li>
                </ul>
              </div>
            </div>

            <div className="how-it-works-section">
              <h2>How It Works</h2>
              <div className="partner-steps">
                <div className="partner-step">
                  <div className="step-number">1</div>
                  <h3>Make the Introduction</h3>
                  <p>Simple referral form or direct phone call. Takes 30 seconds.</p>
                </div>
                <div className="partner-step">
                  <div className="step-number">2</div>
                  <h3>We Handle Everything</h3>
                  <p>You stay informed throughout the process. No work on your end.</p>
                </div>
                <div className="partner-step">
                  <div className="step-number">3</div>
                  <h3>Deal Closes Successfully</h3>
                  <p>Your client's problem solved, your reputation enhanced.</p>
                </div>
              </div>
            </div>

            <div className="partner-form-section glass-card">
              <h2>Become a Preferred Partner</h2>
              <form name="partner-application" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="partner-application" />
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="partner-name">Your Name</label>
                    <input type="text" name="partner-name" id="partner-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="partner-email">Email</label>
                    <input type="email" name="partner-email" id="partner-email" required />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="partner-phone">Phone</label>
                    <input type="tel" name="partner-phone" id="partner-phone" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="partner-company">Company</label>
                    <input type="text" name="partner-company" id="partner-company" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="partner-type">I am a:</label>
                  <select name="partner-type" id="partner-type" required>
                    <option value="">Select...</option>
                    <option value="real-estate-agent">Real Estate Agent</option>
                    <option value="real-estate-broker">Real Estate Broker</option>
                    <option value="mortgage-broker">Mortgage Broker</option>
                    <option value="mortgage-lender">Mortgage Lender</option>
                    <option value="other">Other Professional</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="partner-message">Tell us about your business and clients</label>
                  <textarea name="partner-message" id="partner-message" rows="4"></textarea>
                </div>

                <p className="disclaimer">
                  *All referral arrangements between licensed real estate professionals handled in accordance with applicable regulations.
                </p>

                <button type="submit" className="glow-button">Submit Application →</button>
              </form>
            </div>

            <div className="cta-section glass-card">
              <h2>Questions?</h2>
              <p>Call our Partner Hotline: 1-800-XXX-XXXX</p>
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

        .partner-intro {
          text-align: center;
          margin-bottom: 60px;
        }

        .partner-intro h2 {
          font-size: 2.5rem;
          color: var(--navy);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .lead-text {
          font-size: 1.3rem;
          color: var(--gray);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          margin: 60px 0;
        }

        .benefit-card {
          padding: 45px;
          transition: transform 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .benefit-card h3 {
          color: var(--navy);
          margin-bottom: 25px;
          font-size: 1.6rem;
          font-weight: 700;
        }

        .benefit-card ul {
          list-style: none;
        }

        .benefit-card li {
          padding: 12px 0;
          padding-left: 35px;
          position: relative;
          color: var(--gray);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .benefit-card li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--emerald);
          font-weight: bold;
          font-size: 1.3rem;
        }

        .how-it-works-section {
          margin: 80px 0;
          text-align: center;
        }

        .how-it-works-section h2 {
          font-size: 2.5rem;
          color: var(--navy);
          margin-bottom: 50px;
          font-weight: 700;
        }

        .partner-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .partner-step {
          text-align: center;
        }

        .partner-step .step-number {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--emerald), var(--emerald-dark));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: var(--white);
          margin: 0 auto 25px;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
        }

        .partner-step h3 {
          color: var(--navy);
          margin-bottom: 15px;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .partner-step p {
          color: var(--gray);
          font-size: 1.05rem;
        }

        .partner-form-section {
          padding: 60px;
          margin: 60px 0;
        }

        .partner-form-section h2 {
          text-align: center;
          margin-bottom: 40px;
          color: var(--navy);
          font-size: 2.2rem;
          font-weight: 700;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--navy);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: white;
          font-family: 'Satoshi', sans-serif;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--emerald);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .disclaimer {
          font-size: 0.9rem;
          color: var(--gray);
          font-style: italic;
          margin: 25px 0;
          text-align: center;
        }

        .partner-form-section .glow-button {
          width: 100%;
          margin-top: 20px;
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
          font-size: 1.3rem;
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
          grid-template-columns: repeat(

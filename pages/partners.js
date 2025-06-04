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
              <div className="benefit-card">
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
              <div className="benefit-card">
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

            <div className="partner-form-section">
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

            <div className="cta-section">
              <h2>Questions?</h2>
              <p>Call our Partner Hotline: 1-800-XXX-XXXX</p>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
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
          padding: 80px 0;
          text-align: center;
        }

        .page-hero h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .content-section {
          padding: 80px 0;
        }

        .partner-intro {
          text-align: center;
          margin-bottom: 60px;
        }

        .partner-intro h2 {
          font-size: 2.5rem;
          color: var(--navy);
          margin-bottom: 20px;
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
          background: var(--light-gray);
          padding: 40px;
          border-radius: 16px;
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .benefit-card h3 {
          color: var(--navy);
          margin-bottom: 20px;
          font-size: 1.5rem;
        }

        .benefit-card ul {
          list-style: none;
        }

        .benefit-card li {
          padding: 10px 0;
          padding-left: 30px;
          position: relative;
          color: var(--gray);
        }

        .benefit-card li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--emerald);
          font-weight: bold;
          font-size: 1.2rem;
        }

        .how-it-works-section {
          margin: 80px 0;
          text-align: center;
        }

        .how-it-works-section h2 {
          font-size: 2.5rem;
          color: var(--navy);
          margin-bottom: 40px;
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
          margin: 0 auto 20px;
        }

        .partner-step h3 {
          color: var(--navy);
          margin-bottom: 15px;
          font-size: 1.3rem;
        }

        .partner-step p {
          color: var(--gray);
        }

        .partner-form-section {
          background: var(--light-gray);
          padding: 60px;
          border-radius: 16px;
          margin: 60px 0;
        }

        .partner-form-section h2 {
          text-align: center;
          margin-bottom: 40px;
          color: var(--navy);
          font-size: 2rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--navy);
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
          min-height: 100px;
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
          margin: 20px 0;
          text-align: center;
        }

        .partner-form-section .glow-button {
          width: 100%;
          margin-top: 20px;
        }

        .cta-section {
          text-align: center;
          padding: 60px;
          background: var(--light-gray);
          border-radius: 16px;
          margin-top: 60px;
        }

        .cta-section h2 {
          margin-bottom: 20px;
          color: var(--navy);
        }

        .cta-section p {
          color: var(--gray);
          font-size: 1.2rem;
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

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .partner-steps {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .partner-form-section {
            padding: 40px 30px;
          }
        }
      `}</style>
    </>
  )
}

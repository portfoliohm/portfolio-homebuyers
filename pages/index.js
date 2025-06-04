// pages/index.js
import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [showCalculator, setShowCalculator] = useState(false)
  const [holdingCosts, setHoldingCosts] = useState({
    propertyValue: '',
    monthlyTaxes: '',
    monthlyInsurance: '',
    monthlyMaintenance: '',
    monthlyManagement: '',
    monthsToSell: '6'
  })
  const [totalCost, setTotalCost] = useState(0)

  const calculateHoldingCosts = () => {
    const monthly = 
      parseFloat(holdingCosts.monthlyTaxes || 0) +
      parseFloat(holdingCosts.monthlyInsurance || 0) +
      parseFloat(holdingCosts.monthlyMaintenance || 0) +
      parseFloat(holdingCosts.monthlyManagement || 0)
    
    const total = monthly * parseInt(holdingCosts.monthsToSell)
    setTotalCost(total)
    setShowCalculator(true)
  }

  const scrollToForm = () => {
    document.getElementById('offer-form').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Sell Investment Properties Fast | Cash Offers for Real Estate Portfolios | Portfolio Homebuyers</title>
        <meta name="description" content="Exit your investment properties on your terms. Cash offers, flexible closing, bulk deals welcome. No repairs needed. Close in 7-30 days. Get your offer today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" rel="stylesheet" />
      </Head>

      <Script src="https://va.vercel-scripts.com/v1/script.debug.js" />

      <main>
        {/* Navigation */}
        <nav className="navbar">
          <div className="container nav-container">
            <Link href="/" className="logo">
              Portfolio Homebuyers
            </Link>
            <div className="nav-links">
              <Link href="/about">About</Link>
              <Link href="/process">Process</Link>
              <Link href="/reviews">Reviews</Link>
              <Link href="/contact">Contact</Link>
              <Link href="#offer-form" className="nav-cta">Sell Now</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="house-3d"></div>
          <div className="gradient-overlay"></div>
          
          <div className="container">
            <div className="hero-content">
              <h1>Exit Your Investment Properties <span className="gradient-text">Without The Hassle</span></h1>
              <p className="hero-subtitle">
                We buy rental portfolios AS-IS. Single properties, packages, or entire portfolios. Cash offers in 24 hours.
              </p>
              
              <button className="glow-button" onClick={scrollToForm}>
                Get Your Cash Offer →
              </button>
              
              <div className="value-props">
                <div className="value-prop glass-card">
                  <div className="value-prop-icon">✓</div>
                  <h3>No Tenant Headaches</h3>
                  <p>We buy occupied or vacant</p>
                </div>
                <div className="value-prop glass-card">
                  <div className="value-prop-icon">✓</div>
                  <h3>No Repairs Needed</h3>
                  <p>Deferred maintenance? No problem</p>
                </div>
                <div className="value-prop glass-card">
                  <div className="value-prop-icon">✓</div>
                  <h3>Flexible Terms</h3>
                  <p>Close on your timeline (7-30 days)</p>
                </div>
              </div>

              <div className="value-prop-secondary glass-card">
                <div className="value-prop-icon">✓</div>
                <h3>Fair Cash Offers</h3>
                <p>Based on actual market data and current conditions</p>
              </div>
              
              <div className="trust-bar">
                <div className="trust-item">
                  <div className="trust-number">$47M+</div>
                  <div className="trust-label">Properties Purchased</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number">500+</div>
                  <div className="trust-label">Investors Served</div>
                </div>
                <div className="trust-item">
                  <div className="trust-number">19 Days</div>
                  <div className="trust-label">Average Close Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="problem-section">
          <div className="container">
            <h2 className="section-title">
              The Hidden Costs of Holding Are <span className="gradient-text">Killing Your Returns</span>
            </h2>
            
            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-stat">$1,847</div>
                <h3>Average Monthly Loss</h3>
                <p>On underperforming properties from taxes, insurance, maintenance, and vacancy</p>
              </div>
              <div className="problem-card">
                <div className="problem-stat">6%</div>
                <h3>Realtor Commissions</h3>
                <p>Plus repairs, staging, and months of showings disrupting your tenants</p>
              </div>
              <div className="problem-card">
                <div className="problem-stat">4-6</div>
                <h3>Months on Market</h3>
                <p>While you keep paying holding costs and deals fall through at closing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="solution-section">
          <div className="container">
            <h2 className="section-title">
              A Better Way to <span className="gradient-text">Exit Your Investments</span>
            </h2>
            <p className="section-subtitle">Choose the exit strategy that works for your situation</p>
            
            <div className="exit-strategies">
              <div className="strategy-card glass-card">
                <div className="strategy-number">1</div>
                <h3 className="strategy-title gradient-text">Single Property Sales</h3>
                <p>Perfect for testing the waters or offloading problem properties. Cherry-pick which to sell and keep your performers.</p>
              </div>
              <div className="strategy-card glass-card">
                <div className="strategy-number">2</div>
                <h3 className="strategy-title gradient-text">Package Deals</h3>
                <p>Ideal for strategic portfolio optimization. Bundle similar properties for better pricing and streamlined holdings.</p>
              </div>
              <div className="strategy-card glass-card">
                <div className="strategy-number">3</div>
                <h3 className="strategy-title gradient-text">Full Portfolio Exit</h3>
                <p>For complete exit or major life transitions. One transaction, significant time savings, volume pricing advantages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="gradient-overlay-light"></div>
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Simple. Fast. No obligations.
            </p>
            
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Submit Your Portfolio</h3>
                <p>Simple form. Basic property details. Takes 5 minutes.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Get Real Offers</h3>
                <p>We analyze each property individually. Cash offers within 24 hours.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Choose Your Exit</h3>
                <p>Accept all, some, or none. No obligation. No pressure.</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Close on Your Timeline</h3>
                <p>7 days? 30 days? 6 months? You decide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="solution-section">
          <div className="container">
            <h2 className="section-title">
              Investors Choose <span className="gradient-text">Portfolio Homebuyers</span>
            </h2>
            
            <div className="testimonial-card glass-card">
              <p className="testimonial-text">
                "Sold 12 rentals in one transaction. Saved $74,000 in commissions and closed in 21 days. 
                Couldn't have retired without Portfolio Homebuyers."
              </p>
              <div className="testimonial-author">- Jim K., Former Landlord</div>
            </div>
            
            <div className="testimonial-card glass-card">
              <p className="testimonial-text">
                "They bought my 3 worst performers AS-IS. I kept my best properties and eliminated 80% of my headaches."
              </p>
              <div className="testimonial-author">- Sarah M., Active Investor</div>
            </div>
            
            <div className="testimonial-card glass-card">
              <p className="testimonial-text">
                "Inherited 8 properties across 3 states. They handled everything remotely. Closed all of them in 30 days."
              </p>
              <div className="testimonial-author">- The Johnson Estate</div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="form-section" id="offer-form">
          <div className="container">
            <div className="form-container glass-card">
              <h2 className="section-title">
                Get Your <span className="gradient-text">No-Obligation Cash Offer</span>
              </h2>
              
              {/* Native HTML Form - Vercel will auto-detect and handle */}
              <form 
                name="portfolio-lead"
                method="POST"
                action="/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="portfolio-lead" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    id="name"
                    required
                  />
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      id="phone"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="properties">Number of Properties</label>
                    <select name="properties" id="properties" required>
                      <option value="">Select...</option>
                      <option value="1">1 Property</option>
                      <option value="2-5">2-5 Properties</option>
                      <option value="6-10">6-10 Properties</option>
                      <option value="10+">10+ Properties</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="timeline">Timeline to Sell</label>
                    <select name="timeline" id="timeline" required>
                      <option value="">Select...</option>
                      <option value="asap">ASAP</option>
                      <option value="30">Within 30 days</option>
                      <option value="60">Within 60 days</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Property Types (check all that apply)</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input type="checkbox" name="property-type" value="SFH" />
                      Single Family
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="property-type" value="Multi" />
                      Multi-Family
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="property-type" value="Condo" />
                      Condo/Townhome
                    </label>
                    <label className="checkbox-label">
                      <input type="checkbox" name="property-type" value="Commercial" />
                      Commercial
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="portfolio-value">Total Portfolio Asking Price (Ballpark)</label>
                  <input 
                    type="text" 
                    name="portfolio-value" 
                    id="portfolio-value"
                    placeholder="$500,000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="addresses">Property Addresses</label>
                  <textarea 
                    name="addresses" 
                    id="addresses"
                    rows="4"
                    placeholder="Enter one address per line&#10;123 Main St, City, State ZIP&#10;456 Oak Ave, City, State ZIP"
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="picture-link">
                    Link to Property Pictures 
                    <span style={{ fontWeight: 'normal', fontSize: '0.9rem', color: 'var(--gray)' }}> (Optional)</span>
                  </label>
                  <input 
                    type="url" 
                    name="picture-link"
                    id="picture-link"
                    placeholder="https://drive.google.com/your-folder-link or https://dropbox.com/your-folder"
                  />
                  <p style={{ fontSize: '0.85rem', color: 'var(--gray)', marginTop: '5px' }}>
                    Share a link to Google Drive, Dropbox, or any cloud storage with your property photos
                  </p>
                </div>

                <input type="hidden" name="source" value="main-landing" />
                <input type="hidden" name="timestamp" value={new Date().toISOString()} />
                
                <button type="submit" className="glow-button" style={{ width: '100%', marginTop: '30px' }}>
                  Get My Cash Offer →
                </button>
                
                <p style={{ textAlign: 'center', marginTop: '20px', opacity: 0.7, fontSize: '0.9rem' }}>
                  Your information is 100% secure and will never be shared. No spam, just answers.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section className="problem-section">
          <div className="container">
            <h2 className="section-title">
              Agents & Brokers: Turn <span className="gradient-text">Dead Deals Into Cash</span>
            </h2>
            <p className="section-subtitle">
              When traditional buyers won't work, we're your solution. Help your clients and build your reputation.
            </p>
            
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/partners" className="glow-button">
                Become a Preferred Partner →
              </Link>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="process-section" style={{ padding: '80px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'white' }}>
              Every Day You Wait <span className="gradient-text">Costs You Money</span>
            </h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '30px', color: 'white' }}>
              The average investor loses $61/day on underperforming properties.<br />
              That's $1,847/month. Or $22,164/year.
            </p>
            
            {!showCalculator ? (
              <>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'white' }}>
                  How much is waiting costing you?
                </h3>
                <button className="glow-button" onClick={() => setShowCalculator(true)}>
                  Calculate My Holding Costs →
                </button>
              </>
            ) : (
              <div className="calculator-container glass-card">
                <h3>Holding Cost Calculator</h3>
                <div className="calculator-grid">
                  <div className="calc-group">
                    <label>Monthly Property Taxes</label>
                    <input
                      type="number"
                      placeholder="$500"
                      value={holdingCosts.monthlyTaxes}
                      onChange={(e) => setHoldingCosts({...holdingCosts, monthlyTaxes: e.target.value})}
                    />
                  </div>
                  <div className="calc-group">
                    <label>Monthly Insurance</label>
                    <input
                      type="number"
                      placeholder="$200"
                      value={holdingCosts.monthlyInsurance}
                      onChange={(e) => setHoldingCosts({...holdingCosts, monthlyInsurance: e.target.value})}
                    />
                  </div>
                  <div className="calc-group">
                    <label>Monthly Maintenance</label>
                    <input
                      type="number"
                      placeholder="$300"
                      value={holdingCosts.monthlyMaintenance}
                      onChange={(e) => setHoldingCosts({...holdingCosts, monthlyMaintenance: e.target.value})}
                    />
                  </div>
                  <div className="calc-group">
                    <label>Property Management</label>
                    <input
                      type="number"
                      placeholder="$150"
                      value={holdingCosts.monthlyManagement}
                      onChange={(e) => setHoldingCosts({...holdingCosts, monthlyManagement: e.target.value})}
                    />
                  </div>
                </div>
                <div className="calc-group" style={{ marginTop: '20px' }}>
                  <label>Months to Sell (Traditional)</label>
                  <select
                    value={holdingCosts.monthsToSell}
                    onChange={(e) => setHoldingCosts({...holdingCosts, monthsToSell: e.target.value})}
                  >
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="9">9 months</option>
                    <option value="12">12 months</option>
                  </select>
                </div>
                <button 
                  className="glow-button" 
                  style={{ marginTop: '20px' }}
                  onClick={calculateHoldingCosts}
                >
                  Calculate Total Cost
                </button>
                
                {totalCost > 0 && (
                  <div className="calc-result">
                    <h4>Total Holding Costs:</h4>
                    <div className="calc-total">${totalCost.toLocaleString()}</div>
                    <p>That's what you'll save by selling to us!</p>
                    <button className="glow-button" onClick={scrollToForm} style={{ marginTop: '20px' }}>
                      Get My Cash Offer Now →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
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
                  <li><Link href="/contact">Contact</Link></li>
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
                <Link href="#offer-form" className="footer-cta">Get Cash Offer →</Link>
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
          --success: #10b981;
        }
        
        body {
          font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: var(--navy);
          background: var(--white);
          overflow-x: hidden;
        }

        /* Navigation */
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

        /* 3D House Background */
        .house-3d {
          position: absolute;
          width: 600px;
          height: 600px;
          right: -100px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.1;
          background: linear-gradient(135deg, var(--emerald) 0%, transparent 50%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          animation: float 20s ease-in-out infinite;
        }

        .house-3d::before {
          content: '';
          position: absolute;
          inset: 20px;
          background: linear-gradient(45deg, transparent 30%, var(--emerald) 50%, transparent 70%);
          clip-path: inherit;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
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

        .gradient-overlay-light {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px 0 rgba(16, 185, 129, 0.4);
          font-family: 'Satoshi', sans-serif;
        }
        
        .glow-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px 0 rgba(16, 185, 129, 0.6);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .hero {
          min-height: 100vh;
          padding-top: 80px;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          overflow: hidden;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
          width: 100%;
        }
        
        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          margin-bottom: 40px;
          opacity: 0.9;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .value-props {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 40px auto;
          max-width: 1000px;
        }

        .value-prop-secondary {
          max-width: 660px;
          margin: 20px auto 40px;
          padding: 25px 35px;
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .value-prop-secondary h3 {
          margin: 0;
          font-size: 1.2rem;
          color: white;
        }

        .value-prop-secondary p {
          margin: 0;
          opacity: 0.9;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
        }
        
        .value-prop {
          padding: 25px;
          text-align: left;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .value-prop:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .value-prop h3 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .value-prop p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .value-prop-icon {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, var(--emerald), var(--emerald-dark));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 24px;
          color: var(--white);
          font-weight: 700;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }
        
        .trust-bar {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-top: 60px;
          flex-wrap: wrap;
        }
        
        .trust-item {
          text-align: center;
        }
        
        .trust-number {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--emerald), var(--emerald-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .trust-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .problem-section {
          padding: 80px 0;
          background: white;
          position: relative;
        }
        
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .problem-card {
          padding: 30px;
          border-radius: 16px;
          background: var(--light-gray);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .problem-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .problem-stat {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--emerald-dark);
          margin-bottom: 10px;
        }
        
        .solution-section {
          padding: 80px 0;
          background: linear-gradient(180deg, var(--light-gray) 0%, white 100%);
        }
        
        .exit-strategies {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }
        
        .strategy-card {
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          background: white !important;
          border: 2px solid var(--light-gray);
        }
        
        .strategy-card:hover {
          transform: translateY(-10px);
          border-color: var(--emerald);
        }
        
        .strategy-number {
          font-size: 4rem;
          font-weight: 800;
          opacity: 0.1;
          position: absolute;
          top: 10px;
          right: 20px;
          color: var(--navy);
        }
        
        .strategy-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          position: relative;
        }
        
        .process-section {
          padding: 80px 0;
          background: var(--navy);
          color: white;
          position: relative;
        }
        
        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-top: 50px;
        }
        
        .step {
          text-align: center;
          position: relative;
        }
        
        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--emerald), var(--emerald-dark));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 20px;
          color: var(--white);
        }
        
        .form-section {
          padding: 80px 0;
          background: white;
          position: relative;
        }
        
        .form-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px;
          position: relative;
          background: var(--light-gray) !important;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--navy);
        }
        
        input, select, textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: white;
          font-family: 'Satoshi', sans-serif;
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--emerald);
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        .checkbox-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 10px;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        .checkbox-label input {
          width: auto;
          margin-right: 8px;
        }
        
        .testimonial-card {
          padding: 30px;
          margin: 20px 0;
          border-left: 4px solid var(--emerald);
          background: white !important;
        }
        
        .testimonial-text {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 15px;
          color: var(--gray);
        }
        
        .testimonial-author {
          font-weight: 600;
          color: var(--navy);
        }
        
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
          line-height: 1.2;
          white-space: nowrap;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          text-align: center;
          color: var(--gray);
          max-width: 800px;
          margin: 0 auto;
          white-space: nowrap;
        }

        /* Calculator Styles */
        .calculator-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px;
          background: rgba(255, 255, 255, 0.1) !important;
          text-align: left;
        }

        .calculator-container h3 {
          text-align: center;
          margin-bottom: 30px;
          color: white;
          font-size: 1.8rem;
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .calc-group {
          margin-bottom: 0;
        }

        .calc-group label {
          color: white;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }

        .calc-group input,
        .calc-group select {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 12px;
        }

        .calc-group input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .calc-result {
          text-align: center;
          margin-top: 30px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .calc-result h4 {
          color: white;
          margin-bottom: 10px;
        }

        .calc-total {
          font-size: 3rem;
          font-weight: 700;
          color: var(--emerald);
          margin-bottom: 10px;
        }

        .calc-result p {
          color: white;
          opacity: 0.9;
        }

        /* Footer */
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
        
        @keyframes float {
          0%, 100% { transform: translateY(-50%) rotate(45deg) scale(1); }
          50% { transform: translateY(-50%) rotate(45deg) scale(1.1); }
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero h1 {
            font-size: 2rem;
          }
          
          .value-props {
            grid-template-columns: 1fr;
          }

          .trust-bar {
            gap: 30px;
          }
          
          .form-container {
            padding: 40px 30px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .checkbox-group {
            grid-template-columns: 1fr;
          }

          .calculator-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
          }

          .house-3d {
            width: 400px;
            height: 400px;
            right: -200px;
          }
          
          .section-title {
            font-size: clamp(1.5rem, 3vw, 2rem);
            white-space: normal;
          }
          
          .section-subtitle {
            font-size: 1rem;
            white-space: normal;
          }
        }
      `}</style>
    </>
  )
}

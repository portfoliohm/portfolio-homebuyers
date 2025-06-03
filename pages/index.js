// pages/index.js
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
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
      </Head>

      {/* Vercel Web Analytics - Auto-installed with Vercel */}
      <Script src="https://va.vercel-scripts.com/v1/script.debug.js" />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="ai-glow"></div>
          <div className="float-1"></div>
          <div className="float-2"></div>
          
          <div className="container">
            <div className="hero-content">
              <h1>Exit Your Investment Properties <span className="gradient-text">Without The Hassle</span></h1>
              <p className="hero-subtitle">
                We buy rental portfolios, fix-and-flips, and investment properties AS-IS. 
                Single properties, packages, or entire portfolios. Cash offers in 24 hours.
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
                <div className="value-prop glass-card">
                  <div className="value-prop-icon">✓</div>
                  <h3>Fair Cash Offers</h3>
                  <p>Based on actual market data</p>
                </div>
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
                  <div className="trust-number">A+</div>
                  <div className="trust-label">BBB Rating</div>
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
          <div className="ai-glow"></div>
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

        {/* Form Section - Using Native HTML Form */}
        <section className="form-section" id="offer-form">
          <div className="container">
            <div className="form-container glass-card">
              <div className="float-3"></div>
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
                {/* Honeypot field for spam protection */}
                <input type="hidden" name="form-name" value="portfolio-lead" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>
                
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
                  <label htmlFor="portfolio-value">Total Portfolio Value (Estimate)</label>
                  <input 
                    type="text" 
                    name="portfolio-value" 
                    id="portfolio-value"
                    placeholder="$500,000"
                    required
                  />
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
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    id="name"
                    required
                  />
                </div>
                
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

                {/* Hidden fields for tracking */}
                <input type="hidden" name="source" value="main-landing" />
                <input type="hidden" name="timestamp" value={new Date().toISOString()} />
                
                <button type="submit" className="glow-button" style={{ width: '100%', marginTop: '20px' }}>
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
              <button className="glow-button" onClick={() => window.location.href='/partners'}>
                Become a Preferred Partner →
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="process-section" style={{ padding: '60px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
              Every Day You Wait <span className="gradient-text">Costs You Money</span>
            </h2>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '30px' }}>
              The average investor loses $61/day on underperforming properties.<br />
              That's $1,847/month. Or $22,164/year.
            </p>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>How much is waiting costing you?</h3>
            <button className="glow-button" onClick={scrollToForm}>
              Calculate My Holding Costs →
            </button>
          </div>
        </section>
      </main>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :root {
          --primary: #6366f1;
          --secondary: #8b5cf6;
          --accent: #ec4899;
          --dark: #0f172a;
          --light: #f8fafc;
          --gray: #64748b;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: var(--dark);
          background: var(--light);
          overflow-x: hidden;
        }
        
        .ai-glow {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%);
          background-size: 400% 400%;
          animation: gradient-shift 10s ease infinite;
          filter: blur(40px);
          opacity: 0.3;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-button {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px 0 rgba(99, 102, 241, 0.4);
        }
        
        .glow-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px 0 rgba(99, 102, 241, 0.6);
        }
        
        .glow-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .glow-button:hover::before {
          opacity: 0.6;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(180deg, var(--dark) 0%, #1e293b 100%);
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
          font-weight: 800;
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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 40px 0;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .value-prop {
          padding: 20px;
          text-align: left;
        }
        
        .value-prop-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          font-size: 20px;
        }
        
        .trust-bar {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 60px;
          flex-wrap: wrap;
        }
        
        .trust-item {
          text-align: center;
        }
        
        .trust-number {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea, #764ba2);
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
          background: #f8fafc;
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
          color: var(--accent);
          margin-bottom: 10px;
        }
        
        .solution-section {
          padding: 80px 0;
          background: linear-gradient(180deg, #f8fafc 0%, white 100%);
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
        }
        
        .strategy-card:hover {
          transform: translateY(-10px);
        }
        
        .strategy-number {
          font-size: 4rem;
          font-weight: 800;
          opacity: 0.1;
          position: absolute;
          top: 10px;
          right: 20px;
        }
        
        .strategy-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          position: relative;
        }
        
        .process-section {
          padding: 80px 0;
          background: var(--dark);
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
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 20px;
        }
        
        .form-section {
          padding: 80px 0;
          background: white;
          position: relative;
        }
        
        .form-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 50px;
          position: relative;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: var(--dark);
        }
        
        input, select {
          width: 100%;
          padding: 15px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: white;
        }
        
        input:focus, select:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
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
          border-left: 4px solid var(--primary);
        }
        
        .testimonial-text {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 15px;
          color: #475569;
        }
        
        .testimonial-author {
          font-weight: 600;
          color: var(--dark);
        }
        
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 20px;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          text-align: center;
          color: var(--gray);
          max-width: 800px;
          margin: 0 auto;
        }
        
        .float-1, .float-2, .float-3 {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }
        
        .float-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          top: -150px;
          left: -150px;
        }
        
        .float-2 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          bottom: -100px;
          right: -100px;
          animation-delay: -5s;
        }
        
        .float-3 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          top: 50%;
          left: 50%;
          animation-delay: -10s;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .trust-bar {
            gap: 20px;
          }
          
          .form-container {
            padding: 30px 20px;
          }
          
          .checkbox-group {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

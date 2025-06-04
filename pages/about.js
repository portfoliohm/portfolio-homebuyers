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
                <div className="stat-card">
                  <div className="stat-number">$47M+</div>
                  <div className="stat-label">Properties Purchased</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Investors</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">19</div>
                  <div className="stat-label">Day Avg Close Time</div>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <h2>Ready to Learn More?</h2>
              <p>See how our process works or get your cash offer today.</p>
              <div className="cta-buttons">
                <Link href="/process" className="glow-button">Our Process →</Link>
                <Link href="/#offer-form" className="glow-button-outline">Get Cash Offer →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        ${getPageStyles()}
      `}</style>
    </>
  )
}

// pages/process.js
export function Process() {
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
                <div className="timeline-content">
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
                <div className="timeline-content">
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
                <div className="timeline-content">
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
                <div className="timeline-content">
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

            <div className="cta-section">
              <h2>Ready to Get Started?</h2>
              <p>The first step takes just 5 minutes.</p>
              <Link href="/#offer-form" className="glow-button">Get Your Cash Offer →</Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        ${getPageStyles()}
        ${getProcessStyles()}
      `}</style>
    </>
  )
}

// pages/reviews.js
export function Reviews() {
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
          <div className="container">
            <h1>Investor <span className="gradient-text">Success Stories</span></h1>
            <p className="hero-subtitle">Real reviews from real estate investors we've helped</p>
          </div>
        </section>

        <section className="content-section">
          <div className="container">
            <div className="reviews-grid">
              <div className="review-card featured">
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

              <div className="review-card">
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

              <div className="review-card">
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

              <div className="review-card">
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

              <div className="review-card">
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

              <div className="review-card">
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
                <div className="stat-box">
                  <div className="stat-number">96%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">19 Days</div>
                  <div className="stat-label">Average Close Time</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">$47M+</div>
                  <div className="stat-label">Properties Purchased</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Investors</div>
                </div>
              </div>
            </div>

            <div className="cta-section">
              <h2>Join Our Success Stories</h2>
              <p>Get your no-obligation cash offer today.</p>
              <Link href="/#offer-form" className="glow-button">Get Your Cash Offer →</Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        ${getPageStyles()}
        ${getReviewStyles()}
      `}</style>
    </>
  )
}

// pages/partners.js
export function Partners() {
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

            <div className="benefits-gri

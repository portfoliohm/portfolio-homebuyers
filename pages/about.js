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

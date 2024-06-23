import Link from 'next/link'
import React from 'react'
import GoogleAdsDetails from './GoogleAdsDetails'

const SeoPackeges = () => {
  return (
    <div>
          <section className="pricing-plans pt-0">
              <div className='section-title'>
                  PACKAGES
              </div>
              <div className='sub-text px-40'>
                  Budget-Friendly SEO Services Price Plans
              </div>
              <div className="pricing-card basic seo-card">
                  <div className="heading">
                      <h4>SEO Startup</h4>
                  </div>
                  <p className="price">
                      $250
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>5 Keywords</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Keyword Research</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>On-Page Optimization</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Website Audit</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Google Analytics Setup</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Content Optimization</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Monthly Reporting</strong></li>
                  </ul>
                  <Link href="/contact">
                      <button className="cta-btn">SELECT</button>
                  </Link>
              </div>
              <div className="pricing-card standard seo-card">
                  <div className="heading">
                      <h4>SEO Basic</h4>
                  </div>
                  <p className="price">
                      $350
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>10 Keywords</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>All services from the Basic SEO Package</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Competitor Analysis</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Backlink Analysis</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Link Building</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Local SEO Optimization</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>SEO Performance Monitoring</strong></li>
                  </ul>
                  <Link href="/contact">
                      <button className="cta-btn">SELECT</button>
                  </Link>
              </div>
              <div className="pricing-card premium seo-card">
                  <div className="heading">
                      <h4>SEO Premium</h4>
                  </div>
                  <p className="price">
                      $550
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>15 Keywords</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>All services from the Basic and Advanced SEO Packages</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Content Strategy Development</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Content Creation</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Social Media Integration</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Conversion Rate Optimization</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Monthly Consultation</strong></li>
                  </ul>
                  <Link href="/contact">
                      <button className="cta-btn">SELECT</button>
                  </Link>
              </div>
          </section>
          <GoogleAdsDetails image={"https://gemcreatives.ca/wp-content/uploads/2024/04/Group-1-4.png"} subTitle={"What do SEO services do for your Business?"} disc="CGO propels your business forward with SEO Services, guaranteeing accelerated growth within days. Harness the power of our expertise for swift and impactful results in the digital landscape. SEO is basically a step-by-step development of your business to compete with all of your business competitors to place you in the Google ranking. This needs proper keyword research related to your business as per the clicks and research of the target audience related to that particular business." title={"PERSONALIZED WEBSITE SEO"} />
    </div>
  )
}

export default SeoPackeges

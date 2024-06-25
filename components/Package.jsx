import Link from 'next/link'
import React from 'react'
import GoogleAdsDetails from './Services/GoogleAdsDetails'
import Testimonial from './Testimonial'

const Package = () => {
  return (
    <>
          <div className='section-title pt-20'>
              PACKAGES
          </div>
          <div className='sub-text'>
              Monthly Package Lead Generation Price Plans
          </div>
          <section className="pricing-plans ">
              <div className="pricing-card basic seo-card">
                  <div className="heading">
                      <h4>Social Ads</h4>
                  </div>
                  <p className="price">
                      $199
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>2 Set Creative ads</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Live Reporting</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Lead Gen Campaign</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Bi-Weekly Meeting</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Regular Optimization</strong></li>
                  </ul>
                  <Link href="/contact">
                      <button className="cta-btn">SELECT</button>
                  </Link>
              </div>
              <div className="pricing-card standard seo-card">
                  <div className="heading">
                      <h4>Google Ads</h4>
                  </div>
                  <p className="price">
                      $299
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>Search Campaign</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Display & Remarketing</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>$600 Free ADS Credit</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Bi-Weekly Meeting</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Regular Optimization</strong></li>
                  </ul>
                  <Link href="/contact">
                      <button className="cta-btn">SELECT</button>
                  </Link>
              </div>
              <div className="pricing-card premium seo-card">
                  <div className="heading">
                      <h4>Social + Google </h4>
                  </div>
                  <p className="price">
                      $450
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>Send Targeted Emails</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Drip Campaign</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Lead Nurturing</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Lead Notification</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Personalized Emails</strong></li>
                  </ul>
                  <Link href="/contact">
                      <button className="cta-btn">SELECT</button>
                  </Link>
              </div>
          </section>
          <GoogleAdsDetails image={"https://gemcreatives.ca/wp-content/uploads/2024/04/Group-1-4.png"} subTitle={"What do SEO services do for your Business?"} disc="CGO propels your business forward with SEO Services, guaranteeing accelerated growth within days. Harness the power of our expertise for swift and impactful results in the digital landscape. SEO is basically a step-by-step development of your business to compete with all of your business competitors to place you in the Google ranking. This needs proper keyword research related to your business as per the clicks and research of the target audience related to that particular business." title={"PERSONALIZED WEBSITE SEO"} />
          <section className="pricing-plans pt-0">
              <div className='section-title'>
                  PACKAGES
              </div>
              <div className='sub-text px-80'>
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
                      <li><i className="fa-solid fa-check"></i> <strong>10 Keywords</strong></li>
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
                      <li><i className="fa-solid fa-check"></i> <strong>15 Keywords</strong></li>
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
                      <li><i className="fa-solid fa-check"></i> <strong>20 Keywords</strong></li>
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
          <GoogleAdsDetails image={"https://gemcreatives.ca/wp-content/uploads/2024/04/1675128504116.png"} subTitle={"Elevate your online visibility"} disc="Enhance your online presence, generate more leads, and increase sales with our expert Google Ads ManaCGOent.
We start each collaboration with a thorough discussion to understand your needs and goals. Then, we develop a PPC strategy designed to grow your business and drive profitability, all within your advertising budget. Our primary focus is on maximizing ROI rather than just increasing clicks.
Our tailored approach to managing Google Ads campaigns is specifically designed for local businesses in Canada.
" title={"PERSONALIZED ADVERTISING"} />
<Testimonial/>
    </>
  )
}

export default Package

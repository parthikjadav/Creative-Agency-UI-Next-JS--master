import Link from 'next/link'
import React from 'react'

const Pricing = () => {
  return (
    <>
          <section className="pricing-plans">
              <div className="pricing-card basic">
                  <div className="heading">
                      <h4>Starter Plan</h4>
                      <p>for small websites or blogs</p>
                  </div>
                  <p className="price">
                      $399
                      {/* <sub>/month</sub> */}
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>Custom-designed homepage</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Up to 5 additional pages</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Responsive design</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Basic SEO setup</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Social media integration</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Contact form</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>1-month free maintenance</strong></li>
                  </ul>
                  <Link href="/contact">
                  <button className="cta-btn" >SELECT</button>
                  </Link>
              </div>
              <div className="pricing-card standard">
                  <div className="heading">
                      <h4>Premium Plan</h4>
                      <p>for medium-sized businesses</p>
                  </div>
                  <p className="price">
                      $599
                      {/* <sub>/month</sub> */}
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>Everything in the Basic Plan</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Up to 10 additional pages</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Advanced SEO setup</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Blog setup</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>E-commerce functionality</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Google Analytics integration</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>3-month free maintenance</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>2 rounds of revisions</strong></li>
                  </ul>
                  <Link href="/contact">
                  <button className="cta-btn" >SELECT</button>
                  </Link>
              </div>
              <div className="pricing-card premium">
                  <div className="heading">
                      <h4>Advanced Plan</h4>
                      <p>for large-scale businesses</p>
                  </div>
                  <p className="price">
                      $999
                      {/* <sub>/month</sub> */}
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>Everything in the Premium Plan</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Unlimited pages</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Custom web application development</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Membership or subscription setup</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>API integration</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Advanced security features</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>6-month free maintenance</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>5 rounds of revisions</strong></li>
                  </ul>
                  <Link href="/contact">
                  <button className="cta-btn" >SELECT</button>
                  </Link>
              </div>
              <div className="pricing-card premium">
                  <div className="heading">
                      <h4>Customized Plan</h4>
                      <p>tailored to your specific needs</p>
                  </div>
                  <p className="price">
                      $??
                  </p>
                  <ul className="features">
                      <li><i className="fa-solid fa-check"></i> <strong>Tailored to your specific needs</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Complete bespoke design and functionality</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Dedicated project manager</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Ongoing support and maintenance</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Regular performance reports and updates</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Priority customer support</strong></li>
                      <li><i className="fa-solid fa-check"></i> <strong>Any additional features you require</strong></li>
                  </ul>
                  <Link href="/contact">
                  <button className="cta-btn"  >SELECT</button>
                  </Link>
              </div>
          </section>

    </>
  )
}

export default Pricing
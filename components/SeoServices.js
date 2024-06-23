import Link from 'next/link'
import React from 'react'
import GoogleAdsDetails from './Services/GoogleAdsDetails'
import AdTypes from './Services/AdTypes'
import SeoPackeges from './Services/SeoPackeges'

const SeoServices = () => {
    return (
        <div>
            <SeoPackeges />
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
            <GoogleAdsDetails image={"https://gemcreatives.ca/wp-content/uploads/2024/04/1675128504116.png"} subTitle={"Elevate your online visibility"} disc="Enhance your online presence, generate more leads, and increase sales with our expert Google Ads ManaCGOent.
We start each collaboration with a thorough discussion to understand your needs and goals. Then, we develop a PPC strategy designed to grow your business and drive profitability, all within your advertising budget. Our primary focus is on maximizing ROI rather than just increasing clicks.
Our tailored approach to managing Google Ads campaigns is specifically designed for local businesses in Canada.
" title={"PERSONALIZED ADVERTISING"}/>
            <AdTypes />
        </div>
    )
}

export default SeoServices

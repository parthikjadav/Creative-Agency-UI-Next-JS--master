import Image from 'next/image'
import React from 'react'

const GoogleAdsDetails = () => {
    return (
        <section class="bg-white dark:bg-gray-900 my-10">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full" src={"https://gemcreatives.ca/wp-content/uploads/2024/04/1675128504116.png"} width={100} height={100} alt="dashboard image" />
                <div class="mt-4 md:mt-0">
                    <h2 className='section-title text-left'>PERSONALIZED ADVERTISING</h2>
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Elevate your online visibility</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Enhance your online presence, generate more leads, and increase sales with our expert Google Ads ManaCGOent.
                        We start each collaboration with a thorough discussion to understand your needs and goals. Then, we develop a PPC strategy designed to grow your business and drive profitability, all within your advertising budget. Our primary focus is on maximizing ROI rather than just increasing clicks.
                        Our tailored approach to managing Google Ads campaigns is specifically designed for local businesses in Canada.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default GoogleAdsDetails

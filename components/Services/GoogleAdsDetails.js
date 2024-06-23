import Image from 'next/image'
import React from 'react'

const GoogleAdsDetails = ({image,title,subTitle,disc}) => {
    return (
        <section class="bg-white dark:bg-gray-900 my-10">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full" src={image} width={100} height={100} alt="dashboard image" />
                <div class="mt-4 md:mt-0">
                    <h2 className='section-title text-left'>{title}</h2>
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{subTitle}</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{
                        disc
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default GoogleAdsDetails

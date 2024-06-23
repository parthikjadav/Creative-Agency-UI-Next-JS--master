import { AdData, AdsProcess } from '@/assets/data/dummydata'
import React from 'react'

const AdTypes = () => {
    return (
        <section className='my-10'>
            <div className='sub-text p-0 mt-20'>
                Different Types of Google Ads By GEM Digital
            </div>
            <div>
                <div class="relative items-center w-full py-12 mx-auto max-w-7xl">
                    <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                        {
                            AdData.map((val, ind) => (
                                <div class="p-2">
                                    <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={val.image} alt="blog" />
                                    <div class="inline-flex justify-between w-full">
                                        <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-white">{val.title}</h1>
                                    </div>
                                    <p class="mx-auto text-base font-medium leading-relaxed text-gray-300">{val.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div className='sub-text p-0 mb-20 text-white'>
                        Different Types of Social Media Ads By CGO
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                            <div class="flex relative h-[300px]">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://gemcreatives.ca/wp-content/uploads/2024/04/video-viewing-play-button-production-laptop-ss-1920-1024x576.jpg" />
                                <div class="px-8 flex justify-center items-center py-10 relative z-10 w-full h-[300px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 class="tracking-widest text-2xl title-font font-medium text-black  mb-1">VIDEO AD</h2>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative h-[300px]">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://gemcreatives.ca/wp-content/uploads/2024/04/facebook-carousel-ad-example-creatopy.png" />
                                <div class="px-8 flex justify-center items-center py-10 relative z-10 w-full h-[300px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 class="tracking-widest text-2xl title-font font-medium text-black  mb-1">CAROUSEL AD</h2>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative h-[300px]">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://gemcreatives.ca/wp-content/uploads/2024/04/facebook-collection-ads-example-1024x576-1.webp" />
                                <div class="px-8 flex justify-center items-center py-10 relative z-10 w-full h-[300px] border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 class="tracking-widest text-2xl title-font font-medium text-black  mb-1">COLLECTION AD</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 class="title-font sm:text-4xl text-3xl mb-4 text-left font-medium sub-text p-0 text-white">Google & Bing ADS Campaign Management
                        </h2>
                        <p class="mb-8 leading-relaxed text-gray-300 text-[16px]">As your AdWords campaign manager, our top priority is to optimize the effectiveness of your paid search campaigns. From creating engaging ads that connect with your target audience to fine-tuning campaigns for optimal performance, our team of PPC specialists ensures your ads perform at their best. At Edkent Media, our expert Google Ads (formerly AdWords) managers excel in PPC manaCGOent, delivering outstanding digital marketing services. We also offer specialized PPC ads and SEO tailored for legal professionals.
                            Pay-per-click marketing is a powerful tool in any digital marketing strategy. Using paid ads is a quick and effective way for businesses to achieve a prominent spot on the first page of Google search results. With immediate access to your paid search account, we harness the power of Google to boost your online visibility swiftly.
                            Bing is another valuable platform for paid search, catering to a dedicated user base. Whether through specific programs or browser defaults, Bing maintains a significant audience, making it essential for your company to be visible on this platform as well.
                        </p>
                    </div>
                    <div class="hidden lg:block sm:w-0 lg:w-2/5 ">
                        <img class="object-cover object-center rounded" alt="hero" src="https://gemcreatives.ca/wp-content/uploads/2024/04/bing.webp" />
                    </div>
                </div>
            </div>
            <div class="text-gray-600 body-font">
                <div className='sub-text p-0 mt-20 text-white'>
                    Our Standard Advertising Process 
                </div>
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    {
                        AdsProcess.map((val,ind)=>(
                            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                                <div class="bg-green-600 flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center  text-white relative z-10 title-font font-medium text-sm">{ind+1}</div>
                                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    {/* <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                        <svg fill="none" stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                            <circle cx="12" cy="5" r="3"></circle>
                                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                        </svg>
                                    </div> */}
                                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <h2 class="font-medium title-font text-gray-200 mb-1 text-xl mt-10">{val.title}</h2>
                                        <p class="leading-relaxed text-gray-300">{val.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default AdTypes

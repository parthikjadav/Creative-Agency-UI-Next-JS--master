import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
import Pricing from "./Pricing"
import Features from "@/components/Features"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='CANADA GO ONLINE' caption='' className='logobg' />
          <h1 className='hero-title px-20' style={{ textTransform: "uppercase",fontSize:"65px" }}>We help to grow Businesses</h1>
          <h5 className='sub-title ajsufdg py-10' style={{ textTransform: "uppercase",fontSize:"30px"}}>Budget friendly
            Website design & development and Digital Marketing</h5>

          <div className='sub-heading'>
            <TitleSm title='WEB DEVELOPMENT' /> <span>.</span>
            <TitleSm title='WEB DESIGN' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Let’s make your brand shine through the noise.' />
            <p>In a crowded marketplace, standing out is essential. At CANADA GO ONLINE, we specialize in cutting through the noise to make your brand shine. With our innovative strategies and creative solutions, we elevate your brand's visibility and impact, ensuring it captures the attention it deserves. Join us and watch your brand rise above the competition.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box text-center' key={i}>
                <span className='green flex-center' >{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <ShowCase />
      {/* <Brand /> */}
      <Features/>
      <Pricing />
      <Testimonial />

      {/* <div className='text-center'>
        <Title title='Latest news & articles' />
      </div> */}
      {/* <BlogCard /> */}
    </>
  )
}

export default Hero

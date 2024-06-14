import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"
import Image from "next/image"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products since 2001' />
              <p className='desc-p'>
                At Canada Go Online, we are a team of passionate and skilled web development professionals dedicated to transforming your digital presence. With years of experience in the industry, we have honed our expertise in creating custom web solutions that not only meet but exceed our clients' expectations. Our portfolio spans a diverse range of projects, from dynamic e-commerce platforms to sleek corporate websites and innovative web applications.
              </p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <Image src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <Image src='https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>
                Our mission at Canada Go Online is to empower businesses by providing exceptional web development services that foster growth and innovation. We believe that a well-crafted website is a powerful tool that can elevate your brand, engage your audience, and streamline your operations. Our goal is to build robust, user-friendly, and aesthetically pleasing websites that serve as a catalyst for your business success. 
                </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency

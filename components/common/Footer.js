import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='CGO' caption='' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> 24/7
              </span>
              <br />
              <br />

              {/* <div>Phone:</div> */}
              <div>+1 6479143529</div>
              {/* <div>Email:</div> */}
              <div>info@canadagoonline.com</div>
              <br />
              <Link href='/contact'>
                <button className='button-primary'>Request for quote</button>
              </Link>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About Company</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/services'>Branding & Creative Services</Link>
              </li>
              <li>
                <Link href='/services'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/services'>E-Commerce</Link>
              </li>
            </ul>
          </div>
          <div className='py footer-copy'>
            <div className=''>
              <span>© 2024 THE CGO. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

import Link from "next/link"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"

export const Card = ({ data, caption, show, path, serviceCard, Services, showcase, serviseText }) => {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={data.cover} style={{height:"360px"}} alt={data.title} />
        </div>
        <div className={`card-details ${serviseText==="true"?"serviseText":null}`}>
          {
            !serviceCard && !Services && !showcase && <Link href={`${path}/${data.id}`} className='title-link'>
              <TitleSm title={data.title} />
            </Link>
          }
          {
            showcase && <a target="_blanck" href={data.website} className='title-link'>
              <TitleSm title={data.title} />
            </a>
          }
          {
            Services && <Link target="_blanck" href={Services} className='title-link'>
              <TitleSm title={data.title} />
            </Link>
          }
          {
            serviceCard && (
              <Link href={serviceCard} className='title-link'>
                <TitleSm title={data.title} />
              </Link>
            )
          }
          {caption && (
            <Link href={serviceCard}>
              {caption} <HiOutlineArrowRight className='link-icon' />
            </Link>
          )}
          <div className='flex'>
            <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

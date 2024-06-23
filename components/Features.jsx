import React from 'react'
import { features } from '@/assets/data/dummydata'

const Features = () => {
  return (
      <div className='py container'>
        <div className="section-title" style={{textAlign:"start"}}>
            FEATURES
        </div>
          <div className='sub-text' style={{ textAlign: "start",padding:"20px 0px" }}>
              Attributes That Make Us Unique
        </div>
          <ul className='ul-features'>
            {features.map((val,ind)=>(
                <li key={ind} className='li-features'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#c8e6c9" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path><polyline fill="none" stroke="#4caf50" stroke-miterlimit="10" stroke-width="4" points="14,24 21,31 36,16"></polyline>
                    </svg>
                    <span>
                    <b>{val.bold} </b> {val.text}
                    </span>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default Features

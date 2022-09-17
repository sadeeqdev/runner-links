import React from 'react'
import image1 from "../assets/img-1.svg"
import image2 from "../assets/img-2.svg"
import image3 from "../assets/img-3.svg"
import image4 from "../assets/img-4.svg"

const SlideBar = () => {
  return (
    <div className='ml-3 lg:ml-10'>
        <div className="text-2xl mt-5 font-medium">Who is Roadrunner for?</div>
        <div className="noScrollBar mt-7" style={{overflowX: 'auto', overflowY: 'auto'}}>
            <div style={{width: '1400px', position: 'relative' }} className="noScrollBar flex space-x-5">
                <div className="h-96 w-80 rounded-xl bg-black flex justify-center items-center" >
                  <img src={image1} alt="roadrunner"/>
                </div>
                <div className="h-96 w-80 rounded-xl bg-black flex justify-center items-center" >
                  <img src={image2} alt="roadrunner"/>

                </div>
                <div className="h-96 w-80 rounded-xl bg-black flex justify-center items-center" >
                  <img src={image3} alt="roadrunner"/>

                </div>
                <div className="h-96 w-80 rounded-xl bg-black flex justify-center items-center" >
                  <img src={image4} alt="roadrunner"/>

                </div>
            </div>
        </div>
    </div>
    
  )
}

export default SlideBar
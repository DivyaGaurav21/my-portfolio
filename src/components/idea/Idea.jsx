import React from 'react'
import './Idea.css'
import Upwork from '../../assets/idea/Upwork.png'
import Fiverr from '../../assets/idea/fiverr.png'
import Amazon from '../../assets/idea/amazon.png'
import Shopify from '../../assets/idea/Shopify.png'
import Facebook from '../../assets/idea/Facebook.png'

const Idea = () => {
  return (
      <section>
          <h5>Having system design idea of These Web</h5>
          <div className="w-right">
              <div className="w-mainCircle">
                  <div className="w-secCircle">
                      <img src={Upwork} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={Fiverr} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={Amazon} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={Shopify} alt="" />
                  </div>
                  <div className="w-secCircle">
                      <img src={Facebook} alt="" />
                  </div>
                  {/* backgroundcircle */}
                  <div className="w-backCircle blueCircle"></div>
                  <div className="w-backCircle yellowCircle"></div>
              </div>
          </div>
    </section>
  )
}

export default Idea
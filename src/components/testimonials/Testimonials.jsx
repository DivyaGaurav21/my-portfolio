import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar2.jpg'
import AVTR2 from '../../assets/avatar3.jpg'
import AVTR3 from '../../assets/avatar4.jpg'
import AVTR4 from '../../assets/avatar1.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Johny Baristow',
        review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut ipsum et accusantium officia exercitationem sed cumque quo maiores, omnis, maxime laborum voluptates dolorem non aut quibusdam? Veniam, cum sit!'
    },
    {
        avatar: AVTR2,
        name: 'Jofra Archer',
        review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut ipsum et accusantium officia exercitationem sed cumque quo maiores, omnis, maxime laborum voluptates dolorem non aut quibusdam? Veniam, cum sit!'
    },
    {
        avatar: AVTR3,
        name: 'Melvis Timtim',
        review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut ipsum et accusantium officia exercitationem sed cumque quo maiores, omnis, maxime laborum voluptates dolorem non aut quibusdam? Veniam, cum sit!'
    },
    {
        avatar: AVTR4,
        name: 'Sania Mirja',
        review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut ipsum et accusantium officia exercitationem sed cumque quo maiores, omnis, maxime laborum voluptates dolorem non aut quibusdam? Veniam, cum sit!'
    }
]

const Testimonials = () => {
  return (
      <section id="testimonials">
          <h5>Review from client</h5>
          <h2>Testimonials</h2>

          <Swiper className="container testimonials__container"
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
          >
              {
                  data.map(item => (
                      <SwiperSlide key={item.name} className='testimonial'>
                          <div className="client__avatar">
                              <img src={item.avatar} alt="avatar-imge" />
                          </div>
                          <h5 className='client__name'>{ item.name}</h5>
                          <small className='client__review'>{ item.review}</small>
                      </SwiperSlide>
                  ))
              }
             
          </Swiper>
    </section>
  )
}

export default Testimonials
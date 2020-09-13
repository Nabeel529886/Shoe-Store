import React from 'react'
import SwiperCore, {EffectFade, EffectCoverflow, Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/components/effect-coverflow/effect-coverflow.scss"
import './Carousel.css'

SwiperCore.use([EffectFade, Autoplay, EffectCoverflow, Navigation,Pagination, Scrollbar]);
const Carousel = () => {

    const images = [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1557461761-c7c2b7a5fa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1570464197285-9949814674a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    ]

    return (
      <React.Fragment>
      <Swiper
      grabCursor
      autoplay= {{ delay: 1000, reverseDirection: true}}
      pagination= {{
        el: '.swiper-pagination',
        type: 'bullets',
      }}
      scrollbar={{ draggable: true }}
      watchSlidesVisibility
      effect="coverflow"
      coverflowEffect = {{
        rotate: 40,
        modifier: 1,
    slideShadows: false,
    stretch: 0,
    depth: 200,
      }}
      spaceBetween={0}
      slidesPerView={3}
    >    
      {
        images.map((img, key) => {
          return (
            <SwiperSlide key={key}>
              <img alt={img} src={img} width="300" height="400"/>
            </SwiperSlide>
          )
        })
      }

    </Swiper>
    </React.Fragment>
    )

    }

export default Carousel

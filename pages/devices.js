import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
// import { Page, Text, Card, Note, Code, Spacer, Button, Grid } from '@geist-ui/react';
// import { useRouter } from 'next/router';
import Layout from '../layouts/basic';

import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const RATIO = 2.35

const Slides = (height) => {
  if (height === Infinity)
    return null

  const data = [
    { src: '1.png', size: 'auto' },
    { src: '2.png', size: 'auto' },
    { src: '3.png', size: 'auto' },
    { src: '4.png', size: 'auto' },
    { src: '5.png', size: 'auto' },
    { src: '6.png', size: 'auto' },
    { src: '7.jpg', size: 'contain' },
    { src: '8.jpg', size: 'contain' },
    { src: '9.jpg', size: 'contain' },
    { src: '10.png', size: 'auto' }
  ]

  return data.map(item => (
    <SwiperSlide>
      <div style={{
        width: '100%',
        height: height,
        background: `url('/images/devices/${item.src}') no-repeat rgb(0, 0, 0)`,
        backgroundSize: item.size,
        backgroundPosition: 'center'
      }}>
      </div>
    </SwiperSlide>
  ))
}

const Home = (props) => {
  const { width } = useWindowSize();
  const [slideHeight, setSlideHeight] = useState(width / RATIO)
  useEffect(() => {
    setSlideHeight(width / RATIO)
  }, [width])


  return (
    <>
      <Swiper
        width={width}
        height={slideHeight}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {Slides(slideHeight)}
      </Swiper>
    </>
  );
};

Home.getInitialProps = async (context) => {
  return { title: '专业设备' };
};

export default Layout(Home);

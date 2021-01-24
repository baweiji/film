import { useState,useEffect } from 'react'
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

  const data = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.jpg', '8.jpg', '9.jpg', '10.png']
  return data.map(item => (
    <SwiperSlide>
      <div className={{}} style={{
        width: '100%',
        height: height,
        background: `url('/images/devices/${item}') no-repeat rgb(0, 0, 0)`,
        backgroundSize: 'auto',
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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Slides(slideHeight)}
      </Swiper>
    </>
  );
};

Home.getInitialProps = async (context) => {
  return { title: '首页' };
};

export default Layout(Home);

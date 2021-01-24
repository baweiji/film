import { useState ,useEffect} from 'react'
import { useWindowSize } from 'react-use'
// import { Page, Text, Card, Note, Code, Spacer, Button, Grid } from '@geist-ui/react';
// import { useRouter } from 'next/router';
import Layout from '../layouts/basic';
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles/index.module.css'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const RATIO = 2.35

const Slides = (height = 'auto') => {
  if (height === Infinity)
    return null
  const data = ['boyu.jpg', 'chaoqun.jpg', 'haishiju.jpg']

  return data.map(item => (
    <SwiperSlide>
      <div style={{
        width: '100%',
        height: height,
        background: `url('/images/films/${item}') no-repeat rgb(0, 0, 0)`,
        backgroundSize: 'contain',
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
        autoHeight
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
  return { title: '首页' };
};

export default Layout(Home);

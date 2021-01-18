import Head from 'next/head';
// import { Page, Text, Card, Note, Code, Spacer, Button, Grid } from '@geist-ui/react';
// import { useRouter } from 'next/router';
import Layout from '../layouts/basic';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles/index.module.css'

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

const Home = (props) => {
  return (
    <>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className={styles.slideImage} src="./images/slide1.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.slideImage} src="./images/slide2.jpg"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

Home.getInitialProps = async (context) => {
  return { title: '首页' };
};

export default Layout(Home);

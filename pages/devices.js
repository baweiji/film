import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
// import { Page, Text, Card, Note, Code, Spacer, Button, Grid } from '@geist-ui/react';
// import { useRouter } from 'next/router';
import Layout from '../layouts/basic';
import styles from '../styles/device.module.css'
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

{/* <Swiper
  width={width}
  height={slideHeight}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  navigation
  pagination={{ clickable: true }}
>
  {Slides(slideHeight)}
</Swiper> */}

const Display = ({ width, height }) => {

  return (
    <div style={{
      width: '100%',
      height: height,
      background: `url('/images/devices/black.jpg') no-repeat rgb(0, 0, 0)`,
      backgroundSize: 'contain',
      backgroundPosition: 'center'
    }}>
    </div>
  )
}

const Devices = (props) => {
  const { width } = useWindowSize();
  const [slideHeight, setSlideHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState('auto')

  useEffect(() => {
    console.log(width)
    setSlideHeight(width / RATIO)
    if (width > 900) {
      setContentHeight('calc(100vh - 126px)')
      //setMode(0)
    } else {
      setContentHeight('auto')
      //setMode(1)
    }
  }, [width])

  return (
    <>
      <div className={styles.page} style={{ width: width, height: contentHeight }} >
        <Display height={slideHeight} />
      </div>
    </>
  );
};

Devices.getInitialProps = async (context) => {
  return { title: '专业设备' };
};

export default Layout(Devices);

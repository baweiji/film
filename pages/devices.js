import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
import { useMediaQuery } from '@geist-ui/react';
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

const Display = ({ background, height }) => {

  return (
    // <div style={{
    //   width: '100%',
    //   height: height,
    //   backgroundImage: `url('${background}') no-repeat rgb(0, 0, 0)`,
    //   backgroundSize: 'contain',
    //   backgroundPosition: 'center'
    // }}>
    // </div>
    <img src={background} width='100%'></img>
  )
}

const Devices = (props) => {
  const { width } = useWindowSize();
  const [slideHeight, setSlideHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState('auto')
  const [backgroundImage, setBackgroundImage] = useState('/images/devices/black-pc.jpg')

  const upMD = useMediaQuery('md', { match: 'up' })

  useEffect(() => {
    //setSlideHeight(width / RATIO)
    if (upMD) {
      setContentHeight('calc(100vh - 126px)')
      setBackgroundImage('/images/devices/black-pc.jpg')
    } else {
      setContentHeight('auto')
      setBackgroundImage('/images/devices/black-mobile.jpg')
    }
  }, [upMD])

  return (
    <>
      <div className={styles.page} style={{ width: '100%', height: contentHeight }} >
        <Display background={backgroundImage} />
      </div>
    </>
  );
};

Devices.getInitialProps = async (context) => {
  return { title: '专业设备' };
};

export default Layout(Devices);

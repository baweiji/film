import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
import Layout from '../layouts/basic';
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/index.module.css'
import { Link } from '@geist-ui/react'
import PlayCircle from '@geist-ui/react-icons/playCircle'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const RATIO = 2.35

const data = [
  { title: '超群国际企业宣传片', src: 'chaoqun.jpg', video: 'https://v.qq.com/x/page/y3221gdtzz6.html' },
  { title: '无锡山水城抗疫纪录片', src: 'boyu.jpg', video: 'https://v.qq.com/x/page/l3221wd2625.html' },
  // { title: '海事局新中国周年纪录片', src: 'haishiju.jpg', video: 'https://v.qq.com/x/page/i3220btipa3.html' }
]

const Slides = (height = 'auto') => {
  if (height === Infinity)
    return null

  return data.map(item => (
    <SwiperSlide key={item.src} >
      <div className={styles.slide} style={{
        width: '100%',
        height: height,
        backgroundImage: `url('/images/films/${item.src}')`
      }} />
    </SwiperSlide>
  ))
}

const Home = (props) => {
  const { width } = useWindowSize();
  const [slideHeight, setSlideHeight] = useState(width / RATIO)
  const [title, setTitle] = useState(data[0].title)
  const [playUrl, setPlayUrl] = useState(data[0].video)

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
        //loop
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setTitle(data[(swiper.activeIndex) % 2].title)
          setPlayUrl(data[(swiper.activeIndex) % 2].video)
        }}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {Slides(slideHeight)}
        <div className={styles.title}>
          <span>{title}</span>
          <span className={styles.playIcon}>
            <Link href={playUrl} target="_blank" style={{alignItems:'center'}}><PlayCircle size={20}></PlayCircle>&nbsp;播放花絮</Link>
          </span>
        </div>
      </Swiper>
    </>
  );
};

Home.getInitialProps = async (context) => {
  return { title: '首页' };
};

export default Layout(Home);

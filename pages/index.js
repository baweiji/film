import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
import Layout from '../layouts/basic';
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/index.module.css'
import { Link, useMediaQuery } from '@geist-ui/react'
import PlayCircle from '@geist-ui/react-icons/playCircle'
import cn from 'classnames'
// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const RATIO = 2.35

const data = [
  { title: '超群国际企业宣传片', src: 'chaoqun.jpg', video: 'https://v.qq.com/x/page/y3221gdtzz6.html' },
  { title: '博宇', src: 'boyu.jpg', video: '' },
  { title: '海事局新中国周年纪录片', src: 'haishiju.jpg', video: 'https://v.qq.com/x/page/i3220btipa3.html' },
  { title: '统战部《光》', src: 'guang.jpg', video: '' },
  { title: '无锡羊尖镇文化宣传片故里羊尖', src: 'yanjiaqiao.jpg', video: 'https://v.qq.com/x/page/m3223gp1n6j.html' },
  { title: '盐城联通反腐微电影', src: 'yancheng.jpg', video: 'https://v.qq.com/x/page/w32239nketb.html' },
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
  const [contentHeight, setContentHeight] = useState('auto')
  const [mode, setMode] = useState(0)

  useEffect(() => {
    setSlideHeight(width / RATIO)
    if (width > 900) {
      setContentHeight('calc(100vh - 126px)')
      setMode(0)
    } else {
      setContentHeight('auto')
      setMode(1)
    }
  }, [width])

  if (mode === 0) {
    return (
      <>
        <div className={styles.page} style={{ height: contentHeight }}>
          <Swiper
            width={width}
            height={slideHeight}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            autoHeight
            navigation
            //loop
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => {
              setTitle(data[(swiper.activeIndex) % 6].title)
              setPlayUrl(data[(swiper.activeIndex) % 6].video)
            }}
          // onSwiper={(swiper) => console.log(swiper)}
          >
            {Slides(slideHeight)}
            <div className={styles.title}>
              <span>{title}</span>
              {playUrl &&
                <span className={styles.playIcon}>
                  <Link href={playUrl} target="_blank" style={{ alignItems: 'center' }}>
                    <PlayCircle size={20}></PlayCircle>&nbsp;播放花絮
            </Link>
                </span>
              }
            </div>
          </Swiper>
        </div>
      </>
    );
  }

  if (mode === 1) {
    return <div className={styles.page}>
      {
        data.map(item => (
          <div key={item.src} className={cn(styles.slide, styles.horizonItem)} style={{
            width: '100%',
            height: slideHeight,
            backgroundImage: `url('/images/films/${item.src}')`
          }} >
            <div className={styles.horizonItemTitle}>
              <span>{item.title}</span>
              {item.video &&
                <span className={styles.horizonItemPlayIcon}>
                  <Link href={item.video} target="_blank" style={{ alignItems: 'center' }}>
                    <PlayCircle size={16}></PlayCircle>&nbsp;花絮
            </Link>
                </span>
              }
            </div>
          </div>
        ))
      }
    </div>
  }
};

Home.getInitialProps = async (context) => {
  return { title: '首页' };
};

export default Layout(Home);

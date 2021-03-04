import { useRouter } from 'next/router';
import { useMeasure, useWindowSize } from 'react-use'
import Layout from '../layouts/basic';
import { Text, Grid, Row, Col, Card, Spacer, Divider,useMediaQuery } from '@geist-ui/react';
import styles from '../styles/about.module.css';
import { useEffect, useState } from 'react';
import cn from 'classnames'

const PANEL_DATA = [
  {
    img: 'team.jpg', href: '/team',
    title: '制作团队', subTitle: '专业全面的影视级团队',
    en: 'Pro Team', moreEN: 'Expert and specialized team in film & video industry',
    height: 276
  },
  {
    img: 'equipment.jpg', href: '/devices',
    title: '专业设备', subTitle: '设备齐全满足各种拍摄需求',
    en: 'Pro Equipment', moreEN: 'Fully equipped to meet all kinds of shooting needs',
    height: 276
  },
  {
    img: 'partner.jpg', href: '/partner',
    title: '合作伙伴', subTitle: '深入各个领域，专业合作',
    en: 'Partners', moreEN: 'In depth in various fields, professional cooperation',
    height: 276
  },
]

const About = (props) => {
  const [ref, { width }] = useMeasure();
  const router = useRouter();
  const [height, setHeight] = useState('auto')
  const [contentHeight, setContentHeight] = useState('auto')

  const upMD = useMediaQuery('md', { match: 'up' })

  useEffect(() => {
    setHeight(width * 2 / 3)
  }, [width])

  useEffect(() => {
    //console.log(size)
    if (upMD) {
      setContentHeight('calc(100vh - 126px)')
    } else {
      setContentHeight('auto')
    }
  }, [upMD])

  const handleClick = (item) => {
    router.push(item.href)
  }

  return (
    <>
      <div className={cn(styles.pageBg, styles.page)} style={{ height: contentHeight }}>
        <div className={styles.title}>
          <Text h3 className={styles.margin0}>我们的优势</Text>
          <div className={styles.divider}>
            <span>Our strengths</span>
          </div>
        </div>
        <div>
          <Grid.Container gap={3} justify="space-between">
            {
              PANEL_DATA.map((item, index) => {
                return (
                  <Grid key={index} lg={8} md={8} xs={24} >
                    <Card hoverable style={{ borderRadius: 0, cursor: 'pointer', border: 'none' }} onClick={() => handleClick(item)}>
                      <Card.Content style={{ padding: 0 }}>
                        <img src={"/images/strengths/" + item.img}
                          height={height} style={{ objectFit: 'cover', display: 'block' }} />
                        <div className={cn(styles.padding16, styles.contentBg)} ref={ref}>
                          <Text h3 className={cn(styles.margin0, styles.strengthsTitle)}>
                            {item.title}
                          </Text>
                          <Text className={styles.margin0}>
                            {item.subTitle}
                          </Text>
                          <Spacer />
                          <Text h3 className={cn(styles.margin0, styles.uppercase)}>
                            {item.en}
                          </Text>
                          <Text className={cn(styles.margin0, styles.uppercase)}>
                            {item.moreEN}
                          </Text>
                        </div>

                      </Card.Content>
                    </Card>
                  </Grid>
                )
              })
            }
          </Grid.Container>
        </div>
      </div>
    </>
  );
};

About.getInitialProps = async (context) => {
  return { title: '关于我们', bgColor: '#000' };
};

export default Layout(About);

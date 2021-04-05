import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
import Layout from '../layouts/basic';
import { Text, Grid, useMediaQuery } from '@geist-ui/react';
import styles from '../styles/team.module.css';

const About = (props) => {
  const smMD = useMediaQuery('sm', { match: 'up' })

  const founderImageWidth = smMD ? '120' : '100%'
  const founderImagePadding = smMD ? 0 : 12

  if (!process.browser) {
    return <></>
  }


  return (
    <>
      <div className={styles.page}>
        <div>
          <Text h3>关于我们</Text>
        </div>
        <Text h4>
          公司简介
        </Text>
        <Text p style={{ lineHeight: 1.6 }}>
          无锡非比寻常影视文化传播有限公司专业从事影视广告策划制作、企业(产品)宣传片策划制作、微电影策划制作推广等影视服务。公司制作数百条广告作品在央视及各卫视及网络平台播出。
          公司是商业微电影全案运营机构，为企业及品牌提供商业微电影宣传片 策划 - 制作 - 推广 一站式解决方案，“定制 • 植入”精准营销，帮助客户及品牌有效规避风险，实现传播价值最大化。
        </Text>
        <Text h4>
          创始人
        </Text>
        <Grid.Container gap={2}>
          <Grid>
            <div style={{ lineHeight: 0 }}>
              <img style={{ borderRadius: 5, boxShadow: 'rgb(0 0 0 / 40%) 0px 10px 20px', padding: founderImagePadding }} width={founderImageWidth} src="/images/team/founder.jpg" />
            </div>
          </Grid>
          <Grid style={{ flex: 1, lineHeight: 1.6 }}>
            <Text p style={{ marginTop: 0 }}>
              公司创始人周斐 ，公司灵魂人物，80 后海归，德国社会学硕士，致力于媒体及传媒多元文化的传承和推广。
        </Text>
          </Grid>
        </Grid.Container>

      </div>
    </>
  );
};

About.getInitialProps = async (context) => {
  return { title: '制作团队' };
};

export default Layout(About);

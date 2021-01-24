// import { useRouter } from 'next/router';
import Layout from '../layouts/basic';
import { Text, Grid, Row, Col, Card, Spacer, Image } from '@geist-ui/react';
import styles from '../styles/about.module.css';

const ENTERPRISE_DATA = [
  [
    { name: '中国农行', src: '1.jpg' },
    { name: '华润燃气', src: '2.jpg' },
    { name: '博宇塑机', src: '3.png' },
  ],
  [
    { name: '无锡广电', src: '4.jpg' },
    { name: '无锡超群国际', src: '5.jpg' },
    { name: '海事局', src: '6.jpg' },
  ],
  [
    { name: '联通公司', src: '7.png' },
    { name: '', src: '' },
    { name: '', src: '' },
  ]
]

const Enterprises = ({ data }) => {
  return ENTERPRISE_DATA.map(group => {
    return (
      <Grid.Container gap={3} justify="space-between" style={{ marginBottom: '18px' }}>
        {
          group.map(item => (
            <Grid md="8" xs={24}>
              {item.src &&
                <Card hoverable>
                  <Image src={"/images/enterprises/" + item.src}
                    height="200" style={{ objectFit: 'scale-down' }} />
                  <h4 style={{ textAlign: "center" }}>{item.name}</h4>
                </Card>
              }
            </Grid>
          ))
        }
      </Grid.Container>
    )
  })
}

const About = (props) => {
  return (
    <>
      <div className={styles.page}>
        <div>
          <Text h3>关于我们</Text>
        </div>
        <Text h4>
          公司简介
        </Text>
        <Text p>
          无锡非比寻常影视文化传播有限公司专业从事影视广告策划制作、企业(产品)宣传片策划制作、微电影策划制作推广等影视服务。公司制作数百条广告作品在央视及各卫视及网络平台播出。
          公司是商业微电影全案运营机构，为企业及品牌提供商业微电影宣传片 策划 - 制作 - 推广 一站式解决方案，“定制 • 植入”精准营销，帮助客户及品牌有效规避风险，实现传播价值最大化。
        </Text>
        <Text h4>
          创始人
        </Text>
        <Text p>
          公司创始人周斐 ，公司灵魂人物，80 后海归，德国社会学硕士，致力于媒体及传媒多元文化的传承和推广。
        </Text>
        <Spacer />
        <Spacer />
        <div>
          <Text h3>合作伙伴</Text>
        </div>
        <Enterprises />
      </div>
    </>
  );
};

About.getInitialProps = async (context) => {
  return { title: '关于我们' };
};

export default Layout(About);

// import { useRouter } from 'next/router';
import Layout from '../layouts/basic';
import { Text, Grid, Row, Col, Card, Spacer, useMediaQuery } from '@geist-ui/react';
import styles from '../styles/about.module.css';

const ENTERPRISE_DATA = [
  [
    { name: '中国农行', src: '1.jpg', height: 100 },
    { name: '华润燃气', src: '2.jpg', height: 100 },
    { name: '博宇塑机', src: '3.png', height: 100 },
    { name: '无锡广电', src: '4.jpg', height: 100 },
    { name: '无锡超群国际', src: '5.jpg', height: 100 },
    { name: '海事局', src: '6.jpg', height: 100 },
  ],
  [
    { name: '联通公司', src: '7.png', height: 100 },
    // { name: '', src: '' },
    // { name: '', src: '' },
    // { name: '', src: '' },
    // { name: '', src: '' },
    // { name: '', src: '' },
  ]
]

const OTHER_ENTERPRISE_DATA = [
  { name: '政府', items: ['无锡滨湖区政法委', '无锡新区人武部', '无锡羊尖政府',] },
  {
    name: '事业单位', items: ['无锡第56所（江南计算机研究院)', '无锡第702所', '无锡滨湖区文体局', '无锡广播电视集团', '无锡市供电局',
      '无锡国家数字电影产业园',
      '无锡新区江溪睦邻中心',
      '无锡新区文化官',]
  },
  {
    name: '医疗', items: [
      '无锡人民医院',
      '无锡市中医院',
      '无锡北塘医院',
      '无锡市卫生学校'
    ]
  },
  {
    name: '企业', items: ['无锡法拉第电机有限公司', '宁波杭州湾新区',
      '无锡华润燃气集团',
      '无锡超群建筑工程有限公司', '盐城联通公司',
      '中国农业银行无锡分行',
      '无锡博宇塑机有限公司']
  },
  { name: '教育', items: ['无锡东绛中学',] }
]

const Enterprises = ({ data }) => {
  return ENTERPRISE_DATA.map((group, index) => {
    return (
      <Grid.Container key={index} gap={3} justify="space-between" style={{ marginBottom: '18px' }}>
        {
          group.map((item, subIndex) => {
            return item.src &&
              <Grid key={subIndex} md={4} xs={24}>
                <Card hoverable >
                  <img src={"/images/enterprises/" + item.src}
                    height={item.height} style={{ objectFit: 'scale-down' }} />
                  <div style={{ textAlign: "center", marginTop: 8, fontSize: '1rem' }}>{item.name}</div>
                </Card>
              </Grid>
          })
        }
      </Grid.Container>
    )
  })
}

const OtherEnterprises = () => {
  const upMD = useMediaQuery('md', { match: 'up' })

  if (!process.browser) {
    return <div></div>
  }

  return (
    <div>
      <div>
        <Text h3>更多</Text>
      </div>
      <div className={styles.group}>
        {
          OTHER_ENTERPRISE_DATA.map((item, index) => (
            <div key={index} className={upMD ? styles.groupItemMD : styles.groupItemXS}>
              <div className={styles.groupTitle}>{item.name}</div>
              <div>
                {
                  item.items.map((subItem, subIndex) => (
                    <div key={subIndex} className={styles.groupText}>{subItem}</div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>)
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
        <OtherEnterprises />
      </div>
    </>
  );
};

About.getInitialProps = async (context) => {
  return { title: '关于我们' };
};

export default Layout(About);

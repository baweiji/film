// import { useRouter } from 'next/router';
import Layout from '../layouts/basic';
import { Text, Grid, Row, Col, Card, Spacer, Image, useMediaQuery } from '@geist-ui/react';
import styles from '../styles/partner.module.css';
import { useEffect } from 'react';

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
              <Grid key={subIndex} lg={4} md={8} sm={8} xs={24}>
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
  const upLG = useMediaQuery('lg', { match: 'up' })
  const upMD = useMediaQuery('md', { match: 'up' })
  const smMD = useMediaQuery('sm', { match: 'up' })

  const className = upLG ? styles.groupItemLG :
    upMD ? styles.groupItemMD : (smMD ? styles.groupItemSM : styles.groupItemXS)

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
            <div key={index} className={className}>
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
          <Text h3>合作伙伴</Text>
        </div>
        <Enterprises />
        <OtherEnterprises />
      </div>
    </>
  );
};

About.getInitialProps = async (context) => {
  return { title: '合作伙伴' };
};

export default Layout(About);

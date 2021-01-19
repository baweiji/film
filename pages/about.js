// import { useRouter } from 'next/router';
import Layout from '../layouts/basic';
import { Text, Grid, Row, Col, Card, Spacer } from '@geist-ui/react';
import styles from '../styles/about.module.css';

const About = (props) => {
  return (
    <>
      <div className={styles.page}>
        <div>
          <Text h3>关于我们</Text>
        </div>
        <div>
          <Text p>
            一些团队介绍的文字
          </Text>
          <Text p>
            一些团队介绍的文字
          </Text>
          <Text p>
            一些团队介绍的文字
          </Text>
          <Text p>
            一些团队介绍的文字
          </Text>
          <Text p>
            一些团队介绍的文字
          </Text>
          <Text p>
            一些团队介绍的文字
          </Text>
        </div>
        <Spacer />
        <Spacer />
        <div>
          <Text h3>合作伙伴</Text>
        </div>
        <Row justify="space-between" style={{ marginBottom: '18px' }}>
          <Col span="7">
            <Card hoverable>
              <h4>Logo</h4>
              <p>合作伙伴</p>
            </Card>
          </Col>
          <Col span="7">
            <Card hoverable>
              <h4>Logo</h4>
              <p>合作伙伴</p>
            </Card>
          </Col>
          <Col span="7">
            <Card hoverable>
              <h4>Logo</h4>
              <p>合作伙伴</p>
            </Card>
          </Col>
        </Row>
        <Row justify="space-between" style={{ marginBottom: '18px' }}>
          <Col span="7">
            <Card hoverable>
              <h4>Logo</h4>
              <p>合作伙伴</p>
            </Card>
          </Col>
          <Col span="7">
            <Card hoverable>
              <h4>Logo</h4>
              <p>合作伙伴</p>
            </Card>
          </Col>
          <Col span="7">
            <Card hoverable>
              <h4>Logo</h4>
              <p>合作伙伴</p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

About.getInitialProps = async (context) => {
  return { title: '关于我们' };
};

export default Layout(About);

import Head from 'next/head';
import MapPin from '@geist-ui/react-icons/mapPin'
import Mail from '@geist-ui/react-icons/mail'
import Smartphone from '@geist-ui/react-icons/smartphone'
import styles from '../styles/contact.module.css'
import { Row, Col, Grid } from '@geist-ui/react';

function Copyright() {
  return (
    <div className={`copyright`}>
      <span>
        Copyright © 2021{' '}
        <a target="_blank" href="https://www.aceinna.com">
          非比寻常影视
        </a>
      </span>
      <style jsx>{`
        .copyright {
          text-align: center;
          color: #999;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}




function Contact() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div className={styles.titleEN}><span>Contact</span>&nbsp;<span className={styles.highlight}>US</span></div>
        <div className={styles.titleCN}>联系我们</div>
      </div>
      <Grid.Container style={{margin:'48px 0 0 0'}}>
        <Grid md="8" xs={24}>
          <div className={styles.item}>
            <div className={styles.itemIcon}><Smartphone /></div>
            <div className={styles.itemLabel}>- 手机 -</div>
            <div className={styles.itemContent}>13771196623</div>
          </div>
        </Grid>
        <Grid md="8" xs={24}>
          <div className={styles.item}>
            <div className={styles.itemIcon}><Mail /></div>
            <div className={styles.itemLabel}>- 邮箱 -</div>
            <div className={styles.itemContent}>4043408@qq.com</div>
          </div>
        </Grid>
        <Grid md="8" xs={24}>
          <div className={styles.item}>
            <div className={styles.itemIcon}><MapPin /></div>
            <div className={styles.itemLabel}>- 地址 -</div>
            <div className={styles.itemContent}>无锡市蠡湖大道2009号A3栋2114A-9</div>
          </div>
        </Grid>
      </Grid.Container>
    </div>
  )
}


function Footer() {
  return (
    <div id="contact" className={`page-footer`}>
      <footer className={`footer`}>
        <Contact />
      </footer>
      <style jsx>{`
        .page-footer {
          width: 100%;
          background: #000;
          color:#fff;
        }

        .page-footer :global(.footer) {
          width: 70%;
          margin: 0 auto;
          padding: 60px 16pt;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Footer;

import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';
import config from '../config';

const LayoutHeader = ({ meta }) => (
  <Head>
    <title>{meta.title ? `${meta.title} - ${config.site.title}` : `${config.site.title}`}</title>
    {meta.description && <meta name="description" content={meta.description} />}
    {meta.description && <meta property="og:description" content={meta.description} />}
    {meta.title && <meta property="og:title" content={meta.title} />}
    {meta.image && <meta property="og:image" content={meta.image} />}
    {meta.image && <meta property="twitter:image" content={meta.image} />}
  </Head>
);

const Layout = ({ children, meta = {} }) => {
  const [showAfterRender, setShowAfterRender] = useState(false);
  const inDetailPage = useMemo(() => meta && meta.title, []);
  //useEffect(() => setShowAfterRender(true), []);

  // if (!showAfterRender)
  //   return (
  //     <div className="article-content">
  //       <LayoutHeader meta={meta} />
  //       {children}
  //       <style jsx>{`
  //         .article-content {
  //           opacity: 0;
  //           display: none;
  //         }
  //       `}</style>
  //     </div>
  //   );
  return (
    <section className="basic-container">
      <LayoutHeader meta={meta} />
      <Header />
      <div className="container">{children}</div>
      <Footer />
      <style jsx global>{`
        html {
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
          height: 100%;
          box-sizing: border-box;
          touch-action: manipulation;
          font-feature-settings: 'case' 1, 'rlig' 1, 'calt' 0;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `}</style>
      <style jsx>{`
        .basic-container {
          //width: 100vw;
          //min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .container {
          width: 100%;
          //max-width: ${config.site.layouts.pageWidth};
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .container :global(h1) {
          font-size: 2rem;
        }

        .container :global(h2) {
          font-size: 1.7rem;
        }

        .container :global(h3) {
          font-size: 1.4rem;
        }

        .container :global(h4) {
          font-size: 1.2rem;
        }

        @media only screen and (max-width: 767px) {
          .container {
            //max-width: ${config.site.layouts.pageWidthMobile};
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  );
};

export default (Page) => {
  const BasicLayout = (props) => {
    const { user, title, auth } = props;
    const router = useRouter();

    return (
      <Layout meta={{ title }}>
        <Page {...props}></Page>
      </Layout>
    );
  };

  BasicLayout.getInitialProps = async (context) => {
    const { req } = context;

    const basicProps = {}

    if (Page.getInitialProps) {
      const pageProps = await Page.getInitialProps({ ...context, ...basicProps });
      return { ...pageProps, ...basicProps };
    } else {
      return basicProps;
    }
  };

  return BasicLayout;
};

import Head from 'next/head';
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

function Footer() {
  return (
    <div className={`page-footer`}>
      <footer className={`footer`}>
        <Copyright />
      </footer>
      <style jsx>{`
        .page-footer {
          width: 100%;
          background: #fafafa;
        }

        .page-footer :global(.footer) {
          width: 750pt;
          max-width: 100vw;
          margin: 0 auto;
          padding: 0 16pt;
          height: 100px;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Footer;

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@geist-ui/react';
import cn from 'classnames';
import PhoneIcon from '@geist-ui/react-icons/phone'
import MailIcon from '@geist-ui/react-icons/mail'


const Logo = () => {
  const upMD = useMediaQuery('md', { match: 'up' })
  const upXS = useMediaQuery('sm', { match: 'up' })
  const height = upMD ? 70 : (upXS ? 40 : 32)
  const padding = upMD ? 0 : 8

  if (!process.browser) {
    return <></>
  }

  return (
    <>
      <img style={{ margin: padding }} src="/images/logo.png" width={'auto'} height={height} title="Home" />
    </>
  );
};


const MobileNav = () => {
  return (
    <div className={`mobile-nav`}>
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <style jsx>{`
        .mobile-nav {
          display: flex;
          justify-content: space-between;
          height: 70px;
          align-items: center;
        }
        @media (min-width: 640px) {
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

const NormalNav = () => {
  const { route } = useRouter();

  return (
    <div className="links">
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <div className="links-section">
        <Link href="/">
          <a
            className={cn('header-link', {
              selected: route == '/'
            })}
          >
            <div>首页</div>
            <div className={'header-link-en-label'}>Home</div>
          </a>
        </Link>
        {/* <Link href="/devices">
          <a
            className={cn('header-link', {
              selected: route.startsWith('/equipments'),
            })}
          >
            <div>设备</div>
            <div className={'header-link-en-label'}>Equipments</div>
          </a>
        </Link> */}
        <Link href="/about">
          <a
            className={cn('header-link', {
              selected: route.startsWith('/about') || route.startsWith('/team') || route.startsWith('/partner') || route.startsWith('/devices'),
            })}
          >
            <div>关于我们</div>
            <div className={'header-link-en-label'}>About US</div>
          </a>
        </Link>

        <span
          className={cn('header-link')}
          href="#contact"
          style={{ width: 150 }}
        >
          <div className={'contacts'}>
            <div><PhoneIcon size="14"></PhoneIcon> 13771196623</div>
            <div><MailIcon size="14"></MailIcon> 4043408@qq.com</div>
          </div>
          {/* <div className={'header-link-en-label'}>&nbsp;</div> */}
        </span>
      </div>
      <style jsx>{`
        .links {
          display: flex;
          height: 126px;
          align-items: center;
        }
        .links-section {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: flex-end;
        }
        .header-link {
          margin:0 16pt;
          color: #bfbfbf;
          font-size:15px;
          text-align:center;
          min-width:80px;
        }
        .header-link.selected {
          color:#eb6100
        }
        .header-link-en-label{
          margin-top:10px;
          color:#eb6100;
          font-size:10px;
          text-transform: uppercase;
        }

        .contacts{
          font-size:.9rem;
          text-align:left;
        }

        .contacts>div+div{
          padding-top:4px
        }

        @media (max-width: 900px) {
          .logo {
            display: block;
          }
          .links {
            height: auto;
            flex-direction:column
          }
          .links-section {
            width:100%;
            justify-content: space-between;
            padding: 0 16px;
            margin:12px 0;
          }
          .header-link {
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <MobileNav /> */}
      <NormalNav />
      <style jsx>{`
        .navbar {
          height: 126px;
          width: 70%;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .navbar {
            height: auto;
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Image } from '@geist-ui/react';
import cn from 'classnames';

const Logo = () => {
  return (
    <>
      <img src="/images/logo.png" width={341} height={70} title="Home" />
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
        <Link href="/">
          <a
            className={cn('header-link', {
              selected: route.startsWith('/equipments'),
            })}
          >
            <div>设备</div>
            <div className={'header-link-en-label'}>Equipments</div>
          </a>
        </Link>
        <Link href="/about">
          <a
            className={cn('header-link', {
              selected: route.startsWith('/about'),
            })}
          >
            <div>关于我们</div>
            <div className={'header-link-en-label'}>About US</div>
          </a>
        </Link>

        <a
          className={cn('header-link', {
            selected: route.startsWith('/contact'),
          })}
          href="#contact"
        >
          <div>联系我们</div>
          <div className={'header-link-en-label'}>Contact US</div>
        </a>
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

        @media (max-width: 640px) {
          .logo {
            display: none;
          }
          .links {
            height: 50px;
          }
          .login-section {
            display: none;
          }
          .links-section {
            justify-content: space-between;
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
      `}</style>
    </nav>
  );
};

export default Navbar;

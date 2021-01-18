import Navbar from './navbar';

const Header = () => {
  return (
    <div className={`page-header-wrapper`}>
      <header>
        <Navbar />
      </header>
      <style jsx>{`
        .page-header-wrapper {
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 10;
          background: #000;
        }
        .page-header{
          width:70%;
          margin:0 auto;
        }
      `}</style>
    </div>
  );
};
export default Header;

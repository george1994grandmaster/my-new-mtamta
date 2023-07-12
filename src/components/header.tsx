import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { navbarLinksData } from '../utils/data';
import headerLogo from "../assets/img/headerLogo.png";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CloseBtn } from '../assets/svg-format-components';

const Header: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const location = useLocation();

  const getBackgroundColor = (): string | 'orange' => {
    switch (location.pathname) {
      case '/':
      case '/story':
        return '#003642';
      case '/guide-marathon':
      case '/become-guide':
      case '/blog-media':
        return '#F05E47';
      default:
        return 'orange';
    }
  };

  const backgroundColor: string | 'bright' = getBackgroundColor();

  return (
    <>
      <header style={{ backgroundColor, borderBottom: backgroundColor === '#F05E47' ? '1px solid rgb(235, 231, 231)' : '1px solid rgb(145, 143, 143)', }}>
        <div className='header-container'>
          <div className='header-area'>
            <Link to='/' className='logo-item-link'>
              <img src={headerLogo} alt="header-logo" />
            </Link>
            <ul className='area-items-content'>
              {navbarLinksData.map((link, index) => (
                <li className='area-item' key={index}>
                  <Link
                    to={link.path}
                    className={`area-item-link ${backgroundColor === '#003642' ? 'area-item-link-bright' : backgroundColor === '#F05E47' ? 'area-item-link-dark' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
						<button className="navbar-open" onClick={() => setNavbarOpen(true)}>
            	<FontAwesomeIcon icon={faBarsStaggered} size="2xl" className="sidebar-icon"/>
          	</button>
          </div>
        </div>
      </header>
      <div className={`mobile-navbar ${!navbarOpen ? "hide" : "show"}`}>
        <button className="navbar-close" onClick={() => setNavbarOpen(false)}>
					<FontAwesomeIcon icon={faTimes} size="2xl"/>
				</button>
        <ul className='area-items-content'>
          {navbarLinksData.map((link, index) => (
            <li className='area-item' key={index}>
              <Link to={link.path} className='light fw-middle' onClick={() => setNavbarOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { footerLinksData } from '../utils/data';
import headerLogo from "../assets/img/headerLogo.png";
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer: FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const location = useLocation();

  const getBackgroundColor = (): string | 'orange' => {
    switch (location.pathname) {
      case '/':
      case '/become-guide':
      case '/blog-media':
        return '#F05E47';
      case '/story':
      case '/guide-marathon':
      case '/gallery':
        return '#003642';
      default:
        return 'orange';
    }
  };

  const backgroundColor: string | 'bright' = getBackgroundColor();

  return (
    <>
      <footer style={{ backgroundColor, borderTop: backgroundColor === '#F05E47' ? '1px solid rgb(235, 231, 231)' : '1px solid rgb(145, 143, 143)', }}>
        <div className='container'>
          <div className='footer-area'>
            <ul className='area-items-content'>
              {footerLinksData.map((link, index) => (
                <li className='area-item' key={index}>
                  <Link
                    to={link.path}
                    className={`area-item-link ${backgroundColor === '#003642' ? 'area-item-link-dark' : backgroundColor === '#F05E47' ? 'area-item-link-bright' : ''}`}
                  >
                    {link.icon ? (
                      <span className='icon-text-content'>
                        {link.icon}
                        {link.label}
                      </span>
                    ) : (
                      <>{link.label}</>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <span className='text fw-light footer-sub-text light'>Sponsored by an organization's support program, this initiative focuses on providing funding for professional education and training in various fields</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
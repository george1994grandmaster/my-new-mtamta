import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {headerLinksData} from '../utils/data';
import headerLogo from "../assets/img/headerLogo.png";


const Header: FC = () => {
  const location = useLocation();

  const getBackgroundColor = (): string | 'orange' => {
    switch (location.pathname) {
      case '/':
      case '/story':
        return '#003642';
      case '/guide-marathon':
      case '/becomeGuide':
      case '/media':
        return '#F05E47';
      default:
        return 'orange';
    }
  };

  const backgroundColor: string | 'bright' = getBackgroundColor();

  return (
    <header style={{ backgroundColor, borderBottom: backgroundColor === '#F05E47' ? '1px solid rgb(235, 231, 231)' : '1px solid rgb(145, 143, 143)', }}>
			<div className='header-container'>
				<div className='header-area'>
					<Link to='/' className='logo-item-link'>
						<img src={headerLogo} alt="header-logo"/>
					</Link>
					<ul className='area-items-content'>
						{headerLinksData.map((link, index) => (
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
				</div>
			</div>
		</header>
  );
};

export default Header;
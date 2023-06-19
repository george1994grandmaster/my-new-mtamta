import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {headerLinksData} from '../utils/data';
import mainLogo from '../assets/img/mainLogo.svg';


const Header: FC = () => {
  const location = useLocation();

  const getBackgroundColor = () => {
		switch (location.pathname) {
			case '/':
			case '/story':
				return '#003642';
			case '/guideMarathon':
			case '/becomeGuide':
			case '/media':
				return '#F05E47';
		}
	};

  const backgroundColor = getBackgroundColor();

  return (
    <header style={{ backgroundColor }}>
			<div className='header-container'>
				<div className='header-area'>
					<Link to='/' className='logo-item-link'>
						<img src={mainLogo} alt="header-logo"/>
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
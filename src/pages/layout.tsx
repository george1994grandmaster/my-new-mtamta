

import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const Layout = () => {
  //const scrollContainerRef = useRef(null);

  return (
    <>
      <Header />
      <div className='container-fluid'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;


import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const Layout = () => {
  //const scrollContainerRef = useRef(null);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
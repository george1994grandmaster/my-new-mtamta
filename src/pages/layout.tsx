
//import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Scroll from '../components/smooth';

const Layout = () => {
  //const scrollContainerRef = useRef(null);

  return (
    <>
      <Scroll/>
      <Header />
      <Outlet />
    </>
      
   
  );
};

export default Layout;
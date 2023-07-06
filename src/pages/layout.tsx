import { FC } from "react";
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const Layout: FC = () => {
  //const scrollContainerRef = useRef(null);

  return (
    <>
      <Header />
      <div className='container-fluid custom-scrollbar'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
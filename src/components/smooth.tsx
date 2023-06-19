import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

var overscrollOptions = {
  enable: true,
  damping: 0,
  effect: 'bounce',
  maxOverscroll: 150,
};

var options = {
  damping: 0.1,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Smooth = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    const scrollbar = Scrollbar.init(document.documentElement, options);

    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);

  return null;
};

export default Smooth;


/*import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Outlet } from 'react-router-dom';
import  Layout  from '../pages/layout';
import Header from './header';


const Smooth = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothing: 0.5, 
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
     <div ref={scrollRef}>
      <Header />
      <Outlet /> {}
      <footer></footer>
    </div>
  </>
  );
};*/
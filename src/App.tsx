import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import ScrollToTop from './components/restart';
import Home from './pages/home';
import Story from './pages/story';
import Marathon from './pages/marathon';

const App: FC = () => {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="story" element={<Story />} />
              <Route path="guide-marathon" element={<Marathon />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
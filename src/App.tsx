import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Story from './pages/story';

const App:FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
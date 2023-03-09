import { MobileBottomNav } from 'components/layout';
import Project from 'pages/project/Project';
import MyTask from 'pages/task/MyTask';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout, GlobalStyle } from './App.style';
import { Home } from './pages/Home/index';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<MyTask />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BaseLayout>
      <MobileBottomNav />
    </div>
  );
};

export default App;

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
        </Routes>
      </BaseLayout>
    </div>
  );
};

export default App;

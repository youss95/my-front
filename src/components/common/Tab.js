import React, { useState } from 'react';
import styled from 'styled-components';

const TabUnit = styled.div`
  border-radius: 48px;
  height: 48px;
  width: 100%;
  margin-top: 10px;
  background: #f8f8fb;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  span {
    display: block;
    width: 50%;
    height: 100%;

    border-radius: 48px;
    text-align: center;
    line-height: 42px;
    font-size: 14px;
    z-index: 1;
  }
  .active {
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 0px 0px;
  }
`;
//tabIndex 받아서 조건문으로 컴포넌트 렌더링
const Tab = ({ tabname, changeTab }) => {
  return (
    <TabUnit>
      <span className={tabname === 'left' ? 'active' : ''} onClick={() => changeTab('left')}>
        My Work
      </span>
      <span className={tabname === 'right' ? 'active' : ''} onClick={() => changeTab('right')}>
        Calendar
      </span>
    </TabUnit>
  );
};
export default Tab;

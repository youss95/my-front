import React from 'react';
import styled from 'styled-components';
import gobackArrow from 'assets/images/gobackIcon.svg';
import { useNavigate } from 'react-router-dom';
const GoBackButton = styled.div`
  width: 100%;
  padding: 15px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
  }
`;
const ImgWrapper = styled.div`
  position: absolute;
  left: 0;
`;
const GoBackLink = ({ children }) => {
  const navigate = useNavigate();
  return (
    <GoBackButton>
      <ImgWrapper onClick={() => navigate(-1)}>
        <img src={gobackArrow} alt="arrow" />
      </ImgWrapper>
      <h2>{children}</h2>
    </GoBackButton>
  );
};

export default GoBackLink;

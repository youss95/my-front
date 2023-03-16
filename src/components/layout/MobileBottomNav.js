import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PALETTE from '../../constants/palette';
import { Link } from 'react-router-dom';
import { RiHomeSmileFill, RiCalendarCheckFill, RiMapPinFill, RiUserFill } from 'react-icons/ri';

// https://react-icons.github.io/react-icons/icons?name=ri

const Container = styled.div`
  background: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  max-width: 500px;
  align-items: center;
  height: 80px;
  z-index: 5;
  padding: 5px 0;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.15);
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

/* const ActionButton = styled.button`
  outline: none;
  border: none;
  background-color: white;
`; */
const AddEventButton = styled.div`
  background: ${PALETTE.BLUE[1]};
  width: 46px;
  height: 46px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  font-weight: lighter;
  color: ${PALETTE.WHITE[1]};
  svg {
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
  }
  ${props => {
    if (props.active) {
      return css`
        color: ${PALETTE.BLACK[0]};
        svg {
          color: ${PALETTE.BLUE[1]};
        }
      `;
    } else {
      return css`
        color: ${PALETTE.WHITE[1]};
        svg {
          color: #dadada;
        }
      `;
    }
  }}
`;

const PlusIcon = styled.div`
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    background-color: ${PALETTE.BLUE[1]};
    display: inline-block;
    &:first-child {
      height: 2px;
      width: 12px;
      transform: translate(1px, 0);
    }
    &:nth-child(2) {
      height: 12px;
      width: 2px;
      transform: translateX(-6px);
    }
  }
`;
const MobileBottomNav = () => {
  const tabList = ['1', '2', '3', '4'];
  const [currentTab, setCurrentTab] = useState(tabList[0]);
  const changeTabStatus = tabName => {
    setCurrentTab(tabName);
  };
  return (
    <Container>
      <StyledLink to="/" active={currentTab === '1'} onClick={() => changeTabStatus('1')}>
        <RiHomeSmileFill />
        <span>Explore</span>
      </StyledLink>

      <StyledLink to="/task" active={currentTab === '2'} onClick={() => changeTabStatus('2')}>
        <RiCalendarCheckFill />
        <span>Task</span>
      </StyledLink>

      <StyledLink to="/">
        <AddEventButton>
          <PlusIcon>
            <span />
            <span />
          </PlusIcon>
        </AddEventButton>
      </StyledLink>

      <StyledLink to="/project" active={currentTab === '3'} onClick={() => changeTabStatus('3')}>
        <RiMapPinFill />
        <span>Project</span>
      </StyledLink>

      <StyledLink to="/" active={currentTab === '4'} onClick={() => changeTabStatus('4')}>
        <RiUserFill />
        <span>Profile</span>
      </StyledLink>
    </Container>
  );
};

export default MobileBottomNav;

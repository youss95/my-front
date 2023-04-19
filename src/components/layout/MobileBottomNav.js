import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PALETTE from '../../constants/palette';
import { Link } from 'react-router-dom';
import { RiHomeSmileFill, RiCalendarCheckFill, RiMapPinFill, RiUserFill } from 'react-icons/ri';
import useModal from 'hooks/useModal';
import Modal from 'components/common/Modal';
import StyledInput from 'components/common/Input';
import { StyledButton } from 'components/common/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomDateInput from 'components/common/CustomDateInput';
import './datepicker.css';
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
const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: 100px;
  }
  margin-bottom: 15px;
`;
const MobileBottomNav = () => {
  const tabList = ['1', '2', '3', '4'];
  const [currentTab, setCurrentTab] = useState(tabList[0]);
  const changeTabStatus = tabName => {
    setCurrentTab(tabName);
  };
  const [isModalOpen, setIsModalOpen, modalOpenHandler] = useModal(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <Container>
        <StyledLink to="/" active={currentTab === '1'} onClick={() => changeTabStatus('1')}>
          <RiHomeSmileFill />
          <span>Explore</span>
        </StyledLink>

        <StyledLink to="/task" active={currentTab === '2'} onClick={() => changeTabStatus('2')}>
          <RiCalendarCheckFill />
          <span>Task</span>
        </StyledLink>

        <StyledLink>
          <AddEventButton onClick={modalOpenHandler}>
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
      {isModalOpen && (
        <Modal height={'40vh'} width={'90%'} header={'Create Project'} showModal={modalOpenHandler}>
          <StyledInput type={'text'} placeholder={'Project Name'} />
          <DateWrapper>
            <span>시작일: </span>
            <DatePicker
              startDate={startDate}
              setStartDate={setStartDate}
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </DateWrapper>
          <DateWrapper>
            <span>종료일: </span>
            <DatePicker
              startDate={endDate}
              setStartDate={setEndDate}
              selected={endDate}
              onChange={date => setEndDate(date)}
              popperModifiers={{
                // 모바일 web 환경에서 화면을 벗어나지 않도록 하는 설정
                preventOverflow: {
                  enabled: true,
                },
              }}
            />
          </DateWrapper>
          <StyledButton size={'lg'} backcolor={'#3D56F0'} color={'white'}>
            Create
          </StyledButton>
        </Modal>
      )}
    </>
  );
};

export default MobileBottomNav;

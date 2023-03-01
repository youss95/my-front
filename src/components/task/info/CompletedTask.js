import * as Styled from './Task.style';
import Round from '../../common/task/Round';
import Stats from 'components/common/task/Stats';
import check from '../../../assets/images/check.svg';
const CompletedTask = () => {
  return (
    <>
      <Styled.Wrapper>
        <Round icon={check} />
      </Styled.Wrapper>
      <Stats size={'38px'} text={'Completed Projects'} textSize={'12px'} number={140} />
    </>
  );
};

export default CompletedTask;

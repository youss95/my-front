import coffee from '../../../assets/images/coffee.svg';
import compass from '../../../assets/images/compass.svg';
const { InquiryWrapper } = require('components/task/info/Task.style');
const { default: Round } = require('./Round');
const { default: Stats } = require('./Stats');

const TaskCard = ({ number, text, type }) => {
  return (
    <InquiryWrapper>
      <Stats size={'20px'} textSize={'12px'} number={number} text={text} />
      <Round type={type} icon={type === 'Inq' ? coffee : compass} />
    </InquiryWrapper>
  );
};

export default TaskCard;

import styled from 'styled-components';
const Wrapper = styled.ul`
  padding: 20px 10px 20px 10px;
  border-top: 3px solid rgba(211, 211, 211, 0.3);
`;
const Unit = styled.li`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;
const DetailList = () => {
  const isChecked = e => {
    console.log('s', e.target.value, e.target.checked);
  };
  return (
    <>
      <Wrapper>
        <Unit>
          <input type="checkbox" value="kk" onChange={e => isChecked(e)} />
          <del>what</del>
        </Unit>
        <Unit>
          <input type="checkbox" />
          <span>what</span>
        </Unit>
        <Unit>
          <input type="checkbox" />
          <span>what</span>
        </Unit>
      </Wrapper>
    </>
  );
};

export default DetailList;

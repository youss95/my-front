import StyledInput from 'components/common/Input';
import personImg from 'assets/images/personIcon.svg';
import pwIcon from 'assets/images/passwordIcon.svg';
import errIcon from 'assets/images/error.svg';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import { SubmitButton } from 'components/common/Button';
import { useEffect, useState } from 'react';
import { validatePassword } from 'utils/validation';
import { DUPLICATE_PASSWORD } from 'constants/msg';

const Form = styled.form`
  margin-top: 30px;
`;
const ErrMsg = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;
const JoinForm = ({ mutate }) => {
  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setDuplicateMsg(DUPLICATE_PASSWORD);
      return;
    }
    mutate({ loginId, password });
    // const resp = request.post('/api/member/join', {
    //   loginId,
    //   password,
    // });
    // console.log('r', resp);
  };
  const [{ loginId, password, passwordConfirm }, onChange] = useInput({
    loginId: '',
    password: '',
    passwordConfirm: '',
  });
  const [passwordMsg, setPasswordMsg] = useState('');
  const [duplicateMsg, setDuplicateMsg] = useState('');
  useEffect(() => {
    const pwMsg = validatePassword(password);
    pwMsg ? setPasswordMsg(pwMsg) : setPasswordMsg('');
  }, [password]);
  return (
    <>
      <Form onSubmit={onSubmit}>
        <StyledInput
          icon={personImg}
          placeholder="LOGIN ID"
          name="loginId"
          type="text"
          value={loginId}
          onChange={onChange}
          required
        />
        <StyledInput
          type="password"
          placeholder="Your Password"
          icon={pwIcon}
          onChange={onChange}
          value={password}
          name="password"
          required
        />
        <StyledInput
          icon={pwIcon}
          placeholder="password confirm"
          name="passwordConfirm"
          type="password"
          value={passwordConfirm}
          onChange={onChange}
          required
        />
        {passwordMsg && (
          <ErrMsg>
            <img src={errIcon} alt="error" />
            <p>{passwordMsg}</p>
          </ErrMsg>
        )}
        {duplicateMsg && (
          <ErrMsg>
            <img src={errIcon} alt="error" />
            <p>{duplicateMsg}</p>
          </ErrMsg>
        )}

        <SubmitButton size="lg" backcolor="#3D56F0" color="white">
          Submit
        </SubmitButton>
      </Form>
    </>
  );
};

export default JoinForm;

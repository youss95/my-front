import { join } from 'api/auth';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router';

export const useJoin = () => {
  const navigate = useNavigate();
  return useMutation(join, {
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    },
    onError: error => {
      console.log('error', error);
    },
  });
};

export const validatePassword = password => {
  const reg = /^[a-z0-9]{8,16}$/;
  if (password) {
    if (!reg.test(password)) {
      return '영문 소문자및 숫자로 이루어진 8-16자리';
    }
  }
  return '';
};

export const validatePasswordConfirm = (password, passwordConfirm) => {
  if (password !== passwordConfirm) {
    return '입력값이 일치하지 않습니다.';
  }
  return '';
};

export const validateLoginId = loginId => {
  const reg: RegExp = /[ㄱ-ㅎㅏ-ㅣ가-힣|a-z|A-Z|1-9]{2,16}/;
  if (loginId) {
    if (!reg.test(loginId)) {
      return '2글자 이상 16글자 이하 숫자,영어,한글 조합만 가능합니다.';
    }
  }
  return '';
};

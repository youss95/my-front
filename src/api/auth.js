import request from './requestMethods';

export const join = async ({ loginId, password }) => {
  const resp = await request.post('/member/join', {
    loginId,
    password,
  });
  return resp;
};

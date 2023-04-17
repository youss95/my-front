import request from 'api/requestMethods';
import Task from 'components/task/my/Task';

const MyTask = () => {
  const resp = request.get('/api/task/today', {
    params: { wkId: 1 },
  });
  console.log('r', resp);
  return <Task />;
};

export default MyTask;

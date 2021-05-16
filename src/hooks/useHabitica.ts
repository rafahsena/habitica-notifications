import { Task } from '../interfaces/tasks';
import { http } from '../lib/http';

export default () => {
  const getTasks = async (): Promise<Task[]> => {
    const response = await http.get('/tasks', {
      headers: {
        'x-api-user': 'c549ece3-91e2-4c0b-8bac-e02a8bbd3e64',
        'x-api-key': '9f32d923-5f74-4a37-ace5-1b430190fec3',
      },
    });
    return response.data;
  };

  return { getTasks };
};

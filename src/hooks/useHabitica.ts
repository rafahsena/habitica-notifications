import { useState } from 'react';
import { Task } from '../interfaces/tasks';
import { http } from '../lib/http';

export default () => {
  const [isPending, setIsPending] = useState(false);

  const getTasks = async (): Promise<Task[]> => {
    setIsPending(true);
    const response = await http.get('/tasks', {
      headers: {
        'x-api-user': 'c549ece3-91e2-4c0b-8bac-e02a8bbd3e64',
        'x-api-key': '9f32d923-5f74-4a37-ace5-1b430190fec3',
      },
    });
    setIsPending(false);
    return response.data;
  };

  return { getTasks, isPending };
};

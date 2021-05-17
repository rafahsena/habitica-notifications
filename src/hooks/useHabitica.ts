import { useState } from 'react';
import { Task } from '../interfaces/tasks';
import { http } from '../lib/http';

export default () => {
  const [isPending, setIsPending] = useState(false);
  
    const getTasks = async (apiKey: string, apiUser: string): Promise<Task[]> => {

      setIsPending(true);
      const response = await http.get('/tasks', {
        headers: {
          'x-api-user': apiUser,
          'x-api-key': apiKey,
        },
      });
      setIsPending(false);
      return response.data;
    };
  
  

  return { getTasks, isPending };
};

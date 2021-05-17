import React, { useEffect, useState } from 'react';
import { Container, Loading, LoadingWrapper } from './Home.styles';

import useFirebase from '../../hooks/useFirebase';
import useNotifications from '../../hooks/useNotifications';
import useHabitica from '../../hooks/useHabitica';

import { Task } from '../../interfaces/tasks';
import TaskItem from '../../components/TaskItem';

const Home = () => {
  const { token } = useFirebase();
  const { sendNotification } = useNotifications();
  const { getTasks, isPending } = useHabitica();

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then((tasks) => setTasks(tasks));
  }, []);

  return (
    <Container>
      {isPending && (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
      {!isPending &&
        tasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </Container>
  );
};

export default Home;

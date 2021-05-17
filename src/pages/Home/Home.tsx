import React, { useEffect, useState } from 'react';
import { Container, Loading, LoadingWrapper } from './Home.styles';

import useFirebase from '../../hooks/useFirebase';
import useNotifications from '../../hooks/useNotifications';
import useHabitica from '../../hooks/useHabitica';

import { Task } from '../../interfaces/tasks';
import TaskItem from '../../components/TaskItem';
import { User } from '../../interfaces/user';
import { getUserInfo } from '../../lib/chrome.storage';

const Home = () => {
  const { token } = useFirebase();
  const { sendNotification } = useNotifications();
  const { getTasks, isPending } = useHabitica();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    getUserInfo((user: User) => setUserInfo(user));
  }, []);

  useEffect(() => {
    if (userInfo?.apiKey && userInfo.apiUser)
      getTasks(userInfo.apiKey, userInfo.apiUser).then((tasks) =>
        setTasks(tasks)
      );
  }, [userInfo]);

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

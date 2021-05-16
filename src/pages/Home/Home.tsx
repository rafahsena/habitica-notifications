import React, { useState } from 'react';
import './Popup.css';

import useFirebase from '../../hooks/useFirebase';
import useNotifications from '../../hooks/useNotifications';
import useHabitica from '../../hooks/useHabitica';

import { Task } from '../../interfaces/tasks';

const Home = () => {
  const { token } = useFirebase();
  const { sendNotification } = useNotifications();
  const { getTasks } = useHabitica();

  const [tasks, setTasks] = useState<Task[]>([]);

  const onClickHandler = async () => {
    sendNotification('teste do front', 'Será que funciona?', token);
    const tasks: Task[] = await getTasks();
    setTasks(tasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        {tasks.map((task) => (
          <p key={task.id}>{task.text}</p>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <button onClick={onClickHandler}>Clique</button>
      </header>
    </div>
  );
};

export default Home;

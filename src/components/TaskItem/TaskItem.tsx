import React from 'react';
import { Task } from '../../interfaces/tasks';

import { Container } from './TaskItem.styles';

export type TaskItemProps = {
  task: Task;
};

const TaskItem: React.FC<TaskItemProps> = ({ task }: TaskItemProps) => {
  return <Container>{task.text}</Container>;
};

export default TaskItem;

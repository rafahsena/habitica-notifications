export type Approval = {
  required: boolean;
  approved: boolean;
  request: boolean;
};

export type Group = {
  approval: Approval;
  assignedUsers: string[];
  sharedCompletion: string;
};

export type History = {
  date: number;
  value: number;
  scoredUp: number;
  scoredDown: number;
};

export type TaskType =
  | 'habits'
  | 'dailys'
  | 'todos'
  | 'rewards'
  | 'completedTodos';

export type AttributeTypes = 'str' | 'con' | 'int' | 'per';

export type Task = {
  challenge: any;
  group: Group;
  up: boolean;
  down: boolean;
  counterUp: number;
  counterDown: number;
  frequency: string;
  history: History[];
  type: TaskType;
  notes: string;
  tags: string[];
  value: number;
  priority: number;
  attribute: AttributeTypes;
  byHabitica: boolean;
  reminders: string[];
  createdAt: string;
  updatedAt: string;
  _id: string;
  text: string;
  alias: string;
  userId: string;
  id: string;
};

import { Icons } from '../sections/dashboard/Icon';

export type Task = {
  name: string;
  id: string;
  backgroundColor: string;
  color: string;
  iconName: keyof Icons;
  taskName: string;
  userImage: string;
  loggedFor: number;
  date: string;
};
export type isActive = 'Active' | 'Pending' | 'Completed';

export type TaskProps = {
  isActive: isActive;
  Active: Task[];
  Pending: Task[];
  Completed: Task[];
};

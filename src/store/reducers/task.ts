import { createSlice } from '@reduxjs/toolkit';

// types
import { TaskProps } from 'types/task';
import avatar1 from '../../assets/images/users/avatar-1.png';

// initial state
const initialState: TaskProps = {
  isActive: 'Active',
  Active: [
    {
      name: 'Active',
      id: '1234',
      color: '#1890ff',
      backgroundColor: '#e6f7ff',
      iconName: 'target',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    },
    {
      name: 'Active',
      id: '12345',
      color: '#1890ff',
      backgroundColor: '#e6f7ff',
      iconName: 'target',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    },
    {
      name: 'Active',
      id: '23456',
      color: '#1890ff',
      backgroundColor: '#e6f7ff',
      iconName: 'target',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    },
    {
      name: 'Active',
      id: '2345',
      color: '#1890ff',
      backgroundColor: '#e6f7ff',
      iconName: 'target',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    }
  ],
  Pending: [
    {
      name: 'Pending',
      id: 'gi345',
      color: '#faad14',
      backgroundColor: '#fff7e6',
      iconName: 'outlineFieldTime',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    },
    {
      name: 'Pending',
      id: 'pe345',
      color: '#faad14',
      backgroundColor: '#fff7e6',
      iconName: 'outlineFieldTime',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    },
    {
      name: 'Pending',
      id: 'shi456',
      color: '#faad14',
      backgroundColor: '#fff7e6',
      iconName: 'outlineFieldTime',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    },
    {
      name: 'Pending',
      id: 'ass4',
      color: '#faad14',
      backgroundColor: '#fff7e6',
      iconName: 'outlineFieldTime',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    }
  ],
  Completed: [
    {
      name: 'Completed',
      id: 'cube99',
      color: '#52c41a',
      backgroundColor: '#f6ffed',
      iconName: 'outlineDone',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    },
    {
      name: 'Completed',
      id: 'si99',
      color: '#52c41a',
      backgroundColor: '#f6ffed',
      iconName: 'outlineDone',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    },
    {
      name: 'Completed',
      id: '34567890',
      color: '#52c41a',
      backgroundColor: '#f6ffed',
      iconName: 'outlineDone',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    },
    {
      name: 'Completed',
      id: 'aas444',
      color: '#52c41a',
      backgroundColor: '#f6ffed',
      iconName: 'outlineDone',
      taskName: 'Some Task Name1',
      userImage: avatar1,
      loggedFor: 48,
      date: 'Oct 12, 14:00'
    }
  ]
};

// ==============================|| SLICE - MENU ||============================== //

const task = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsActive(state, action) {
      state.isActive = action.payload;
    }
  }
});

export default task.reducer;

export const { setIsActive } = task.actions;

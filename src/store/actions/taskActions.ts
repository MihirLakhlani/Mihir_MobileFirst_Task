// store/actions/taskActions.ts

import { Task } from "../types";

// Action types
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Action creators
export const createTask = (task: Task) => ({
  type: CREATE_TASK,
  payload: { ...task, status: 'scheduled' },
});

export const updateTask = (taskId: string, task: Task) => ({
  type: UPDATE_TASK,
  payload: { taskId, task },
});

export const deleteTask = (taskId: string) => ({
  type: DELETE_TASK,
  payload: taskId,
});

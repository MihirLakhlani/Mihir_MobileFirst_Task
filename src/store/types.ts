// store/types.ts

export interface Task {
    id: string;
    taskName: string;
    description: string;
    startTime: string;
    endTime: string;
    status: 'scheduled' | 'running' | 'expired';

  }
  
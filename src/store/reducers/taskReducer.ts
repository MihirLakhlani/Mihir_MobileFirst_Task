const initialState: any = {
  tasks: [],
};

const taskReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'UPDATE_TASK':
      const updatedTasks = state.tasks.map((task:any) =>
        task.id === action.payload.id ? action.payload : task
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case 'DELETE_TASK':
      const updateTasks = state.tasks.filter((task:any) => task.id !== action.payload);
      return {
        ...state,
        tasks: updateTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;

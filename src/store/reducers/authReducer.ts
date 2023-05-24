// store/reducers/authReducer.ts

interface AuthState {
    isAuthenticated: boolean;
  }
  
  interface LoginAction {
    type: 'LOGIN';
  }
  
  interface LogoutAction {
    type: 'LOGOUT';
  }
  
  type AuthAction = LoginAction | LogoutAction;
  
  const initialState: AuthState = {
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isAuthenticated: true };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
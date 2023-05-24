// store/reducers/jokesReducer.ts
export interface Jokee {
    id: number;
    joke: string;
  }
interface Joke {
    id: number;
    joke: string;
  }
  
  interface JokesState {
    jokes: Joke[];
    isLoading: boolean;
    error: string | null;
  }
  
  const initialState: JokesState = {
    jokes: [],
    isLoading: false,
    error: null,
  };
  
  const jokesReducer = (state = initialState, action: any): JokesState => {
    switch (action.type) {
      case 'FETCH_JOKES_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'FETCH_JOKES_SUCCESS':
        return { ...state, jokes: action.payload, isLoading: false };
      case 'FETCH_JOKES_FAILURE':
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default jokesReducer;
  
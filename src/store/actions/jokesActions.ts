// jokesActions.ts

import { Dispatch } from 'redux';
// import {  } from '../types';
import axios from 'axios';

export const fetchJokes :any = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: 'FETCH_JOKES_REQUEST' });

    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
      const jokes: any[] = response.data.jokes;
      dispatch({ type: 'FETCH_JOKES_SUCCESS', payload: jokes });
    } catch (error:any) {
      dispatch({ type: 'FETCH_JOKES_FAILURE', payload: error.message });
    }
  };
};

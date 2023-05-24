import axios from 'axios';

export const fetchJokesAPI = async () => {
  try {
    const response = await axios.get(
      'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching jokes:', error);
    return [];
  }
};

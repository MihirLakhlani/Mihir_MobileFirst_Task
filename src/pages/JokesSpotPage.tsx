import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchJokes } from '../store/actions/jokesActions';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const JokesSpotPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const jokes = useSelector((state: RootState) => state.jokes.jokes);
  const isLoading = useSelector((state: RootState) => state.jokes.isLoading);

  useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <header>
        <button className="btn btn-primary" onClick={handleGoBack}>Back</button>
      </header>
      <h2 className="comic-font">Jokes Spot Page</h2>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading jokes...</p>
        </div>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="comic-font">
            <tr>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke: any, index: number) => (
              <tr key={index}>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JokesSpotPage;

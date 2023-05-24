// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

import LoginPage from './pages/LoginPage';
import EditTaskPage from './pages/EditTaskPage';
import ViewTasksPage from './pages/ViewTasksPage';
import JokesSpotPage from './pages/JokesSpotPage';

const App = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {isAuthenticated ? (
          <>
            <Route path="/editTask" element={<EditTaskPage />} />
            <Route path="/viewTasks" element={<ViewTasksPage />} />
            <Route path="/jokesSpot" element={<JokesSpotPage />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../store/actions/taskActions';
import { useNavigate } from 'react-router-dom';
import { Task } from '../store/types';
import { v4 as uuidv4 } from 'uuid';

const EditTaskPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation and create task logic here
    // Replace the following code with your actual implementation

    if (taskName.trim() === '' || startTime.trim() === '' || endTime.trim() === '') {
      // Handle validation error
      setErrorMessage('Please fill in all fields');
      return;
    }

    const newTask: Task = {
      taskName,
      description,
      startTime,
      endTime,
      id: uuidv4(), // Generate a unique identifier
      status: 'scheduled'
    };

    dispatch(createTask(newTask));
    console.log('New task created', createTask(newTask));

    // Clear form fields
    setTaskName('');
    setDescription('');
    setStartTime('');
    setEndTime('');

    // Navigate to viewTasks page
    navigate('/viewTasks');
  };

  return (
    <div className="container">
      <h2>Create New Task</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskName" className="form-label">Task Name:</label>
          <input type="text" className="form-control" id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="startTime" className="form-label">Start Time:</label>
          <input type="text" className="form-control" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="endTime" className="form-label">End Time:</label>
          <input type="text" className="form-control" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Save Task</button>
      </form>
    </div>
  );
};

export default EditTaskPage;

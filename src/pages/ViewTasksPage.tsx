import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteTask } from '../store/actions/taskActions';
import { Link } from 'react-router-dom';

const ViewTasksPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredTasks = tasks.filter((task:any) =>
    task.taskName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a:any, b:any) => {
    const taskNameA = a.taskName.toLowerCase();
    const taskNameB = b.taskName.toLowerCase();

    if (taskNameA < taskNameB) return sortOrder === 'asc' ? -1 : 1;
    if (taskNameA > taskNameB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="container">
      <h2>View Tasks</h2>
      <div className="row">
        <div className="col-lg-3 mb-3">
          <Link to="/editTask" className="btn btn-primary">Add More Task?</Link>
        </div>
        <div className="col-lg-6 mb-3">
          <label htmlFor="searchTask" className="form-label">Search by Task Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder='Search by Task Name'
            id="searchTask"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-lg-3 mb-3">
          <label htmlFor="sortOrder" className="form-label">Sort Order:</label>
          <select
            className="form-select"
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No.</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task: any,index:number) => (
            <tr key={task.id}>
              <td>{index+1}</td>

              <td>{task.taskName}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-3">
        <Link to="/jokesSpot" className="btn btn-secondary">Jokes Spot</Link>
      </div>
    </div>
  );
};

export default ViewTasksPage;

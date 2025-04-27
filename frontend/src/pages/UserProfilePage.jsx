import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

const UserProfilePage = () => {
  const { username } = useParams();
  const { tasks } = useContext(TaskContext);

  // Filter tasks assigned to this user
  const userTasks = tasks.filter(task => task.assignedTo === username);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{username}'s Profile</h1>
      <Link to="/">Back to Home</Link>

      <h2 style={{ marginTop: '20px' }}>Assigned Tasks:</h2>
      {userTasks.length === 0 ? (
        <p>No tasks assigned.</p>
      ) : (
        userTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default UserProfilePage;


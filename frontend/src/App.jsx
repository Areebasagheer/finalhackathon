import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import HomePage from './pages/Homepage';
import CreateTaskPage from './pages/CreatTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import UserProfilePage from './pages/UserProfilePage';



function App() {
    return (
        <TaskProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreateTaskPage />}/>
                    <Route path="/edit/:id" element={<EditTaskPage />} />
                    <Route path="/user/:username" element={<UserProfilePage />} />
                </Routes>
            </Router>
        </TaskProvider>
    );
}


const tasks = [
    {id: 1, title: 'Task A', assignedTo: 'User1', status: 'ToDo'},
    {id: 2, title: 'Task B', assignedTo: 'User2', status: 'Inprogress'},
    {id: 3, title: 'Task C', assignedTo: 'User3', status: 'Done'},
    {id: 4, title: 'Task D', assignedTo: 'User4', status: 'ToDo'}
];

const TaskBoard = () => {
    const statuses = ["ToDo" , "In Progress", "Done"];
    return (
        <div style={{
            display: 'flex', gap: '20px', padding: '20px', justifyContent: 'center', alignItems: 'center', width: '275%', height: '100vh', backgroundColor: 'lightblue'}}>
                {statuses.map(status => (
                    <div key={status} style={{ flex: 1}}>
                        <h2>{status}</h2>
                        {tasks
                        .filter(task => task.status === status)
                        .map(task => (
                            <div
                            key={task.id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '10px',
                                marginBottom: '10px',
                                background: '#f9f9f9',

                            }}
                            >
                                <h4>{task.title}</h4>
                                <p>Assigned: {task.assignedTo}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
    );
};

export default App;

// export default TaskBoard;
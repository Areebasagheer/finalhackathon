import React, {useContext} from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import {Link} from 'react-router-dom';

const HomePage = () => {
    const {tasks} = useContext(TaskContext);

    return (
        <div style={{ padding: '20px'}}>
            <h1>Task Management</h1>
            <Link to="/create">Create New Task</Link>
            <div style={{ display: 'flex',  gap: '20px', marginTop: '20px'}}>
                {['ToDo' , 'In Progress', 'Done'].map(status => (
                    <div key={status} style={{flex: 1}}>
                        <h2>{status}</h2>
                        {tasks
                        .filter(task => task.status === status)
                        .map(task => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                        </div>
                ))}
            </div>
        </div>
    );
};


export default HomePage;
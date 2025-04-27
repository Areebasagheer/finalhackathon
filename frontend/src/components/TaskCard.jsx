import React, {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';
import {Link} from 'react-router-dom';


const TaskCard = ({task}) => {
    const {deleteTask} = useContext(TaskContext);


    return (
        <div style={{border: '1px solid #ccc' , padding: '10px', marginBottom: '10px', borderRadius: '8px'}}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>
                <strong>Assigned To:</strong>
            <Link to={`/user/${task.assignedTo}`}>{task.assignedTo}</Link> </p>
            <div>
                <Link to={'/edit/${task.id}'} style={{marginRight: '10px'}}>Edit</Link>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    );
};


export default TaskCard;

import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';


const EditTaskPage = () => {
    const {id} = useParams();
    const {tasks, updateTask} = useContext(TaskContext);


    const taskToEdit = tasks.find(task => task.id === id);


    if(!taskToEdit) return <p>Task not Found!</p>


    return (
        <div style={{padding: '20px'}}>
            <h1>Edit Task</h1>
            <TaskForm task={taskToEdit} onSubmit={updateTask} />
        </div>
    );
};


export default EditTaskPage;
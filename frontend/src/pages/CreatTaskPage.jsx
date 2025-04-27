import React, {useContext} from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';

const CreateTaskPage = () => {
    const {addTask} = useContext(TaskContext);



    return (
        <div style={{padding: '20px'}}>
            <h1>Create Task</h1>
            <TaskForm onSubmit = {addTask} />
        </div>
    );
};

export default CreateTaskPage;





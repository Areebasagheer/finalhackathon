import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


const TaskForm = ({onSubmit, task}) => {
    const [formData, setFormData] = useState({
        title: task?.title || '',
        description: task?.description || '',
        assignedTo: task?.assigneddTo || '',
        status: task?.status || 'ToDo',
        id: task?.id,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        navigate('/');
    };


    return(
        <form onSubmit={handleSubmit} style={{ maxWidth: '40px'}}>
            <input type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{width: '150px', marginBottom: '10px' }}

        />

        <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        style={{width: '300px', marginBottom: '10px' }}
    />

    <input
    type="text"
    name="assignedTo"
    placeholder="AssignedTo"
    value={formData.assignedTo}
    onChange={handleChange}
    required
    style={{width: '100%', marginBottom: '10px' }}
/>
<select
name="status"
value={formData.status}
onChange={handleChange}
style={{width: '200px', height: '20px', marginBottom: '10px' }}
>
    <option>To Do</option>
    <option>In Progress</option>
    <option>Done</option>
    </select>
    <button type="Submit" style={{width: '170px', height: '50px', border: '1px solid black'}}> Save Task</button>
    </form>

    );
};

export default TaskForm;
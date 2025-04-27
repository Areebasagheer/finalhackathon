import React, {createContext, useState} from 'react';

export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);


    const addTask = (task) => {
        setTasks([...tasks, {...tasks, id: uuidv4() }])
    };

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask: task));

    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));

    };

    return (
        <TaskContext.Provider value={{tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

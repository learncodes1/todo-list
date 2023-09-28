import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createTask } from '../reducers/taskSlice';

const CreateTaskForm = () => {
    const dispatch = useDispatch();
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        dueDate: '',
        status: 'To Do',
    });
    console.log(taskData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuidv4(),
            ...taskData,
        };
        dispatch(createTask(newTask));
      
        setTaskData({
            title: '',
            description: '',
            dueDate: '',
            status: 'To Do',
        });
    };

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={taskData.title}
                    onChange={handleChange}
                    required
                />
                <label>Description:</label>
                <textarea
                    name="description"
                    value={taskData.description}
                    onChange={handleChange}
                />
                <label>Due Date:</label>
                <input
                    type="date"
                    name="dueDate"
                    value={taskData.dueDate}
                    onChange={handleChange}
                />
                <label>Status:</label>
                <select name="status" value={taskData.status} onChange={handleChange}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
};

export default CreateTaskForm;

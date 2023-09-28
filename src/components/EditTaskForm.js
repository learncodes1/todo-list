import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateTask } from '../reducers/taskSlice';

const EditTaskForm = () => {
    const { taskId } = useParams();
    const dispatch = useDispatch();
    const task = useSelector((state) =>
        state.tasks.find((task) => task.id === taskId)
    );
    const [taskData, setTaskData] = useState(task);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        dispatch(updateTask(taskData));
    };

    return (
        <div>
            <h2>Edit Task</h2>
            {task ? (
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
                    <button type="submit">Update Task</button>
                </form>
            ) : (
                <p>Task not found.</p>
            )}
        </div>
    );
};

export default EditTaskForm;

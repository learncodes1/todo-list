import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TaskItem from './TaskItem';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    console.log(tasks);
    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks&& tasks?.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
            <Link to="/create">Create New Task</Link>
        </div>
    );
};

export default TaskList;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteTask, updateTask } from '../reducers/taskSlice';
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const EditTaskForm = () => {
    const { taskId } = useParams();
    const dispatch = useDispatch();
    const history = useNavigate();
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
        history(`/task/${taskId}`);
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
        history('/');
    };

    return (
        <div>
            <h2 className="text-center">Edit Task</h2>
            <div className="flex justify-center w-full">
                {task ? (
                    <form className="w-full max-w-2xl md:max-w-lg xs:max-w-sm">
                        <Input
                            onChange={handleChange}
                            name="title"
                            type="text"
                            label="Title"
                            labelPlacement="inside"
                            value={taskData.title}
                            className="my-3"
                            required
                        />


                        <Textarea
                            onChange={handleChange}
                            value={taskData.description}
                            name="description"
                            label="Description"
                            labelPlacement="inside"
                            placeholder="Enter description"
                            className="my-3"
                        />

                        <Input
                            type="date"
                            name="dueDate"
                            label="Date"
                            labelPlacement="inside"
                            value={taskData.dueDate}
                            className="my-3"
                            onChange={handleChange}
                        />

                        <Select
                            name="status" value={taskData.status} onChange={handleChange}
                            label="Status"
                            placeholder="select status"
                            className="my-3"
                        >
                            <SelectItem key={"To Do"} value="To Do">To Do</SelectItem>
                            <SelectItem key={"In Progress"} value="In Progress">In Progress</SelectItem>
                            <SelectItem key={"Done"} value="Done">Done</SelectItem>
                        </Select>


                    </form>

                ) : (
                    <p>Task not found.</p>
                )}
            </div>
            {task && (
                <div className="flex gap-4 items-center justify-center my-3">
                    <Button type="submit" color="warning" onClick={handleSubmit} >
                        Update Task
                    </Button>
                    <Button onClick={handleDelete} type="button" color="danger"> Delete Task </Button>
                </div>


            )}
        </div>
    );
};

export default EditTaskForm;

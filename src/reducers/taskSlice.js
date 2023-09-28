import { createSlice } from '@reduxjs/toolkit';

const TASKS_STORAGE_KEY = 'tasks';

const loadTasksFromLocalStorage = () => {
    try {
        const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
        return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
        console.error('Error loading tasks from the local storage:', error);
        return [];
    }
};

const saveTasksToLocalStorage = (tasks) => {
    try {
        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error('Error saving tasks to the local storage:', error);
    }
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState: loadTasksFromLocalStorage(),
    reducers: {
        createTask: (state, action) => {
            state.push(action.payload);
            saveTasksToLocalStorage(state);
        },
        updateTask: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
                saveTasksToLocalStorage(state);
            }
        },
        deleteTask: (state, action) => {
            state = state.filter((task) => task.id !== action.payload);
            saveTasksToLocalStorage(state);
            return state;
        },
    },
});

export const { createTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;

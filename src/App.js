import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import CreateTaskForm from './components/CreateTaskForm';
import EditTaskForm from './components/EditTaskForm';
import { store } from './store'
import { Provider } from 'react-redux'
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
    <Header/>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/:taskId" element={<TaskDetails />} />
          <Route path="/create" element={<CreateTaskForm />} />
          <Route path="/edit/:taskId" element={<EditTaskForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { db } from "./firebase";
import { query, collection, onSnapshot, doc } from "firebase/firestore";
import TaskService from "./services/task.service";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    // const getTasks = async () => {
    //   const tasksFromServer = await fetchTasks();
    //   setTasks(tasksFromServer);
    // };
    getTasks();
  }, []);
  //fetching data from fire store and using service class
  const getTasks = async () => {
    const data = await TaskService.getAllTasks();
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = res.json();
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = res.json();
    return data;
  };
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 1000) + 1;
  //   const newTask={id,...task}
  //   setTasks([...tasks,newTask])
  // };
  const addTask = async (task) => {
    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(task),
    // });
    // const newTask = await res.json();
    const newTask = await TaskService.addTask(task);
    // setTasks([...tasks, newTask]);
    getTasks()
  };
  // const deleteTask =  (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };
  const deleteTask = async (id) => {
    // await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    const deletedTask = await TaskService.deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // const toggleReminder = (id) => {
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: !task.reminder } : task
  //     )
  //   );
  // };
  // return (
  //   <div className="container">
  //     <Header
  //       onAdd={() => setShowAddTask(!showAddTask)}
  //       showAdd={showAddTask}
  //     />
  //     {showAddTask && <AddTask addTask={addTask} />}
  //     {tasks.length > 0 ? (
  //       <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
  //     ) : (
  //       "No Task to show"
  //     )}
  //   </div>
  // );
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };
  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask addTask={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onToggle={toggleReminder}
                    onDelete={deleteTask}
                  />
                ) : (
                  "No Task to show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { useEffect, useState } from "react";
import { API } from "../services/api";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get(
        `/tasks?search=${search}&status=${status}`
      );
      setTasks(res.data);
    } catch (err) {
      console.log("Unauthorized or error");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search, status]);

  const createTask = async () => {
    if (!title) return;
    await API.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const updateTask = async (task) => {
    const newStatus =
      task.status === "pending" ? "completed" : "pending";

    await API.put(`/tasks/${task._id}`, {
      status: newStatus,
    });

    fetchTasks();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        {/* Search + Filter */}
        <div className="flex gap-3 mb-4">
          <input
            className="border p-2 rounded w-1/3"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Create Task */}
        <div className="flex gap-2 mb-4">
          <input
            className="border p-2 rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={createTask}
            className="bg-green-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {/* Tasks */}
        <div className="grid grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onUpdate={updateTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
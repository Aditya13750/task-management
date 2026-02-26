import React from "react";

export default function TaskCard({ task, onDelete, onUpdate }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onUpdate(task)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Toggle
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
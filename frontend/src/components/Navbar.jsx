import React from "react";
import { API } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    await API.post("/auth/logout");
     window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-4">
      <h1 className="text-lg font-bold">Task Manager</h1>
      <button
        onClick={logout}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
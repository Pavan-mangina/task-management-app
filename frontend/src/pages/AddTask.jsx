import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "./AddTask.css"; // Import the CSS file below

export default function AddTask() {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "Pending",
    dueDate: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/tasks", task);
      navigate("/tasks");
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  return (
    <div className="form-container">
      <form className="task-form" onSubmit={submit}>
        <h2>Add New Task</h2>
        
        <div className="form-group">
          <label>Task Title</label>
          <input 
            required
            placeholder="What needs to be done?" 
            onChange={e => setTask({ ...task, title: e.target.value })} 
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea 
            placeholder="Add some details..." 
            rows="3"
            onChange={e => setTask({ ...task, description: e.target.value })} 
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Priority</label>
            <select onChange={e => setTask({ ...task, priority: e.target.value })}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input 
              type="date" 
              onChange={e => setTask({ ...task, dueDate: e.target.value })} 
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">Create Task</button>
      </form>
    </div>
  );
}
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (!title.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toLocaleString("pt-BR", {
        hour12: false,
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      className="container vh-100 mt-5"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h2 className="text-center fw-bold">📌 Todo List</h2>

      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">
          <i className="bi bi-plus-circle"></i> Adicionar Nova Tarefa
        </h4>

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Descrição da tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="btn btn-primary w-50 d-block mx-auto"
          onClick={addTask}
        >
          <i className="bi bi-check-circle"></i> Adicionar
        </button>
      </div>

      <ul className="list-group mt-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center mb-3 p-3 shadow-sm rounded ${
              task.completed ? "bg-light text-muted" : ""
            }`}
          >
            <div className="d-flex align-items-center w-100">
              <input
                type="checkbox"
                className="form-check-input me-3 align-self-center border border-2"
                style={{ width: "25px", height: "25px" }}
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <div className="flex-grow-1">
                <strong
                  className={
                    task.completed ? "text-decoration-line-through" : ""
                  }
                >
                  {task.title}
                </strong>
                <p
                  className={`mb-1 ${
                    task.completed ? "text-decoration-line-through" : ""
                  }`}
                >
                  {task.description}
                </p>
                <small
                  className={`text-muted d-block ${
                    task.completed ? "text-decoration-line-through" : ""
                  }`}
                >
                  <i className="bi bi-calendar-event"></i>{" "}
                  <span className="fw-normal">
                    {task.createdAt.split(",")[0]} -{" "}
                    <span className="fw-bold">
                      {task.createdAt.split(",")[1]}
                    </span>
                  </span>
                </small>
              </div>
              <div>
                <button className="btn btn-outline-warning btn-sm me-2">
                  <i className="bi bi-pencil"></i>
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(task.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

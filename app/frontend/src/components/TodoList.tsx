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
      createdAt: new Date().toLocaleDateString(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

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
    <div className="container vh-100 mt-5">
      <h2 className="text-center">Todo List</h2>
      <div className="card p-4">
        <h4>Adicionar Nova Tarefa</h4>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Descrição da tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="btn btn-primary btn-sm"
          style={{ width: "120px" }}
          onClick={addTask}
        >
          Adicionar
        </button>
      </div>
      <ul className="list-group mt-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center mb-3"
          >
            <div>
              <input
                type="checkbox"
                className="me-2"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <strong
                className={task.completed ? "text-decoration-line-through" : ""}
              >
                {task.title}
              </strong>
              <p
                className={`mb-0 text-muted ${
                  task.completed ? "text-decoration-line-through" : ""
                }`}
              >
                {task.description}
              </p>
              <small
                className={`text-muted ${
                  task.completed ? "text-decoration-line-through" : ""
                }`}
              >
                Data de Criação: {task.createdAt}
              </small>
            </div>
            <div>
              <button className="btn btn-warning btn-sm me-2">Editar</button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(task.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

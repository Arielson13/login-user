import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoList } from "../TodoList/TodoList";

export const LoginForm: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Simulação de usuário válido
  const validUser = { username: "admin", password: "12345" };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      userName === validUser.username &&
      userPassword === validUser.password
    ) {
      setIsAuthenticated(true);
    } else {
      setError("Usuário ou senha estão incorretos");
    }
  };

  if (isAuthenticated) {
    return <TodoList />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 w-100 bg-light">
      <div
        className="card p-4 shadow-sm"
        style={{ width: "350px", borderRadius: "10px" }}
      >
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Usuário"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

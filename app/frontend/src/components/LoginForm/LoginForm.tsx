import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const LoginForm: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 w-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "350px", borderRadius: "10px" }}>
        <h3 className="text-center mb-3">Login</h3>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Usuário" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Senha" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

// src/components/auth/LoginForm.jsx
import React, { useState } from "react";
import '../styles/authStyle.css';
import { validateInput } from "../helpers/validateInput";
import { togglePasswordVisibility } from "../helpers/passwordVisuality";
import { Link, useNavigate } from "react-router";
import { PathConfig } from "@/utils/pathConfig";
import { useAuth } from "@/hooks/useAuth";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { login, message, setMessage } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    const errorMsg = validateInput(id, value);
    setErrors((prev) => ({ ...prev, [id]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    // Validar todos los campos antes de enviar
    const newErrors = {
      email: validateInput("email", formData.email),
      password: validateInput("password", formData.password),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (hasErrors) {
      setMessage("Por favor, corrige los errores antes de continuar.");
      return;
    }

    const success = login(formData.email, formData.password);

    if (success) {
      setMessage("Inicio de sesión exitoso. Redirigiendo...");
      navigate(PathConfig.Home, { state: { email: formData.email } });
    } else {
      setMessage("Error al iniciar sesión. Revisa tus credenciales.");
    }
  };

  return (
    <section id="user-session">
      <form id="login" className="fx-deep-shadow-static" onSubmit={handleSubmit}>
        <div className="headline">
          <h3 className="title-c">Iniciar Sesión</h3>
          <i className="fa-solid fa-right-to-bracket"></i>
        </div>

        {errors.email && <span className="messageFormError">{errors.email}</span>}
        <input
          id="email"
          type="text"
          placeholder="Email..."
          value={formData.email}
          onChange={handleChange}
        />

        {errors.password && <span className="messageFormError">{errors.password}</span>}
        <div className="pass">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <i
            id="eye"
            className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"} trigger-b`}
            onClick={() => togglePasswordVisibility(setShowPassword)}
          ></i>
        </div>

        <button id="send" className="trigger-a" type="submit">
          Enviar
        </button>

        <Link className="link-c" to={PathConfig.Register}>
          ¿No tienes cuenta? Registrate aquí
        </Link>

        {message && <span className="messageFormError">{message}</span>}
      </form>
    </section>
  );
};

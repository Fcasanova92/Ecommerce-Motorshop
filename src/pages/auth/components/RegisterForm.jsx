// src/components/auth/RegisterForm.jsx
import React, { useState } from "react";
import { togglePasswordVisibility } from "../helpers/passwordVisuality";
import { validateInput } from "../helpers/validateInput";
import { PathConfig } from "@/utils/pathConfig";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    condition: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { register, message, setMessage } = useAuth();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [id]: fieldValue }));

    if (type !== "checkbox") {
      const errorMsg = validateInput(id, value);
      setErrors((prev) => ({ ...prev, [id]: errorMsg }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    const hasErrors = Object.values(errors).some((msg) => msg);
    if (hasErrors) {
      setMessage("Por favor corrige los errores antes de continuar.");
      return;
    }

    if (!formData.condition) {
      setMessage("Debes aceptar los términos y condiciones.");
      return;
    }

    const success = register({
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password,
      online:true
    });

    if (success) {
      setMessage("Registro exitoso. Ya puedes iniciar sesión.");
      navigate(PathConfig.Home);

    } else {
      setMessage("Error: El email ya está registrado.");
    }
  };

  return (
    <section id="user-session">
      <form id="register" className="fx-deep-shadow-static" onSubmit={handleSubmit}>
        <div className="headline">
          <h2 className="title-c">Registro</h2>
          <i className="fa-regular fa-address-card"></i>
        </div>

        <label className="message" htmlFor="name">{errors.name}</label>
        <input
          id="name"
          type="text"
          placeholder="Nombre..."
          value={formData.name}
          onChange={handleChange}
        />

        <label className="message" htmlFor="surname">{errors.surname}</label>
        <input
          id="surname"
          type="text"
          placeholder="Apellido..."
          value={formData.surname}
          onChange={handleChange}
        />

        <label className="message" htmlFor="email">{errors.email}</label>
        <input
          id="email"
          type="text"
          placeholder="Email..."
          value={formData.email}
          onChange={handleChange}
        />

        <label className="message" htmlFor="password">{errors.password}</label>
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

        <div className="checkbox-field">
          <input
            id="condition"
            type="checkbox"
            checked={formData.condition}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, condition: e.target.checked }))
            }
          />
          <label className="with-check-icon" htmlFor="condition">
            Acepto términos y condiciones
          </label>
        </div>

        <button id="send" className="trigger-a" type="submit">
          Enviar
        </button>

        {message && <label className="message">{message}</label>}

        <Link className={"link-c"} to={PathConfig.Login}>
          ¿Tienes cuenta? Inicia sesión aquí
        </Link>
      </form>
    </section>
  );
};

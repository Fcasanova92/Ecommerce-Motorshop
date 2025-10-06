// src/components/auth/RegisterForm.jsx
import React, { useState } from "react";
import { togglePasswordVisibility } from "../helpers/passwordVisuality";
import { validateInput } from "../helpers/validateInput";
import { PathConfig } from "@/utils/pathConfig";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import '../styles/authStyle.css';

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

    // Validar todos los campos
    const newErrors = {
      name: validateInput("name", formData.name),
      surname: validateInput("surname", formData.surname),
      email: validateInput("email", formData.email),
      password: validateInput("password", formData.password),
    };

    setErrors(newErrors);

    // Si hay errores
    const hasErrors = Object.values(newErrors).some((msg) => msg);
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
      online: true,
    });

    if (success) {
      setMessage("Registro exitoso. Ya puedes iniciar sesión.");
      navigate(PathConfig.Home, {state: {email: formData.email}});
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

        <input
          id="name"
          type="text"
          placeholder="Nombre..."
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="messageFormError" color="red">{errors.name}</span>}

        <input
          id="surname"
          type="text"
          placeholder="Apellido..."
          value={formData.surname}
          onChange={handleChange}
        />
        {errors.surname && <span className="messageFormError" color="red">{errors.surname}</span>}

        <input
          id="email"
          type="text"
          placeholder="Email..."
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="messageFormError" color="red">{errors.email}</span>}

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
        {errors.password && <span className="messageFormError" color="red">{errors.password}</span>}

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

        {message && <span className="messageFormError" color="red">{message}</span>}

        <Link className={"link-c"} to={PathConfig.Login}>
          ¿Tienes cuenta? Inicia sesión aquí
        </Link>
      </form>
    </section>
  );
};

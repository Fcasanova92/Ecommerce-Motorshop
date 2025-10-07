// useAuth.js
import { useState, useEffect } from "react";
import { useUsers } from "./useUser";
import { useNavigate } from "react-router";
import { PathConfig } from "@/utils/pathConfig";

export const useAuth = () => {
  const { users, setUsers } = useUsers();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [message, setMessage] = useState("");

  const isOnline = currentUser[0]?.online;

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("users", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("users");
    }
  }, [currentUser]);

  const login = (email, password) => {
    const userIndex = users.findIndex(
      (u) => u.email === email && u.password === password
    );

    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex].online = true;
      setUsers(updatedUsers);
      setCurrentUser(updatedUsers[userIndex]);
      setMessage("Inicio de sesión exitoso");
      return true;
    } else {
      setMessage("Usuario o contraseña incorrecta");
      return false;
    }
  };

  const logout = () => {
  if (!currentUser) return;

  const updatedUsers = users.map((u) =>
    u.email === currentUser[0].email ? { ...u, online: false } : u
  );
  
  setUsers(updatedUsers);
  setCurrentUser(null);
  
  // guardamos en localStorage
  localStorage.setItem("users", JSON.stringify(updatedUsers));
  
  setMessage("Has cerrado sesión");
  navigate(PathConfig.Login);
};

    const register = ({ name, surname, email, password, online }) => {
    if (!name || !surname || !email || !password) {
      setMessage("Completa todos los campos");
      return false;
    }

    const exists = users.some((u) => u.email === email);
    if (exists) {
      setMessage("El usuario ya existe");
      return false;
    }

    const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;

    const newUser = {
      id: newId,
      name,
      surname,
      email,
      password,
      online,
    };

    setUsers([...users, newUser]);
    setMessage("Usuario registrado con éxito");
    return true;
  };

  return { login, logout, register, message, setMessage, currentUser, isOnline };
};

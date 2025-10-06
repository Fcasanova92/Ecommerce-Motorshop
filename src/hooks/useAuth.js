import { useState, useEffect } from "react";
import { useUsers } from "./useUsers";

export const useAuth = () => {
  const { users, setUsers, loading } = useUsers();
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setIsOnline(currentUser ? currentUser.online : false);
  }, [currentUser]);

  const login = (email, password) => {
    if (!email || !password) {
      setMessage("Completa todos los campos");
      return false;
    }

    const userIndex = users.findIndex(
      (u) => u.email === email && u.password === password
    );

    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex].online = true;
      setUsers(updatedUsers);
      setCurrentUser(updatedUsers[userIndex]);
      setMessage("Inicio de sesión exitoso");
      setIsOnline(true);
      return true;
    } else {
      setMessage("Usuario o contraseña incorrecta");
      return false;
    }
  };

  const logout = () => {
    if (!currentUser) return;
    const updatedUsers = users.map((u) =>
      u.email === currentUser.email ? { ...u, online: false } : u
    );
    setUsers(updatedUsers);
    setCurrentUser(null);
    setMessage("Has cerrado sesión");
    setIsOnline(false);
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

    // Generar un ID simple
    const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;

    const newUser = {
      id: newId,
      name,
      surname,
      email,
      password,
      online
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setMessage("Usuario registrado con éxito");
    return true;
  };

  return { login, logout, register, message, setMessage, loading, currentUser, isOnline };
};

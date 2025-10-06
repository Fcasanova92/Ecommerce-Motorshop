import { useState, useEffect } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar desde localStorage
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      // Inicializamos con un usuario de prueba si no hay nada
      const initialUsers = [
        {
          id: 1,
          name: "Admin",
          surname: "User",
          email: "admin@test.com",
          password: "123456",
          online: false,
        },
      ];
      localStorage.setItem("users", JSON.stringify(initialUsers));
      setUsers(initialUsers);
    }
    setLoading(false);
  }, []);

  const updateUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return { users, setUsers: updateUsers, loading };
};

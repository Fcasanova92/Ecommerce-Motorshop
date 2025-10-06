import { useState, useEffect } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
          setUsers(JSON.parse(storedUsers));
        } else {
          const response = await fetch("/users.json");
          if (!response.ok) throw new Error("No se pudo cargar users.json");
          const data = await response.json();

          // Agregamos online: false a cada usuario
          const usersWithOnline = data.map(u => ({ ...u, online: false }));

          setUsers(usersWithOnline);
          localStorage.setItem("users", JSON.stringify(usersWithOnline));
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const updateUsers = (updatedUsers) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return { users, setUsers: updateUsers, loading };
};

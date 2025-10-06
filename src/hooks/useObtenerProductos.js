import { config } from "@/config/config";
import { useEffect, useState } from "react";

export const useObtenerProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(config.apiMotorKey)

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/motorcycles?make=Kawasaki", {
                    headers: {
                        "X-Api-Key": config.apiMotorKey,
                    },
        });

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("Finalizó la petición (éxito o error)");
      }
    };

    fetchProductos();
  }, []);

  return { productos, loading, error };
};

import { useState } from "react";

export const useServiceEmail = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const sendMessage = async ({ name, surname, email, consulta }) => {
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            surname,
            email,
            consulta,
      }),
      });

      if (response.status >= 200 && response.status < 300) {
        setMessage("Formulario enviado correctamente (API simulada)");
        return { status: true };
      } else {
        throw new Error(`Código de estado: ${response.status}`);
      }
    } catch (error) {
      setMessage(`Error al enviar el formulario: ${error.message}`);
      return { status: false };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    message,
    sendMessage,
  };
};

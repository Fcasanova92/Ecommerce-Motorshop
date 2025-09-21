import React from "react";

export const Spinner = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.spinner} />
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.3)", // Fondo semi transparente
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999, // encima de todo
  },
  spinner: {
    width: 60,
    height: 60,
    border: "6px solid #ccc",
    borderTopColor: "#1d72b8",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

// Añadimos keyframes globalmente
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

// NotificationContext.js
import React, { createContext, useState } from "react";

// Creamos el contexto de las notificaciones
const NotificationContext = createContext();

// Proveedor del contexto de las notificaciones
export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  // Función para agregar una notificación
  function addNotification(message) {
    const id = Date.now(); // ID único basado en el tiempo
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, message },
    ]);

    // Eliminamos la notificación después de 5 segundos
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  }

  // Función para eliminar una notificación
  function removeNotification(id) {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  }

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;

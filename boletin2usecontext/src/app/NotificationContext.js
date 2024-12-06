"use client";
import React, { createContext, useState, useContext } from "react";


const NotificationContext = createContext();


export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id: Date.now(), message },
    ]);
  };


  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}


export const useNotifications = () => {
  return useContext(NotificationContext);
};


export function NotificationList() {
  const { notifications, removeNotification } = useNotifications();

  if (notifications.length === 0) {
    return null; 
  }

  return (
    <div>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message}
            <button onClick={() => removeNotification(notification.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

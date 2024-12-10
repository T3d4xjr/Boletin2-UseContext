// NotificationList.js
import { useContext } from "react";
import NotificationContext from "./NotificationContext";

export default function NotificationList() {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          style={{
            background: "#000",
            color: "whitesmoke",
            padding: "10px",
            margin: "5px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          {notification.message}
          <button
            onClick={() => removeNotification(notification.id)}
            style={{
              background: "transparent",
              color: "red",
              border: "none",
              float: "right",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
}

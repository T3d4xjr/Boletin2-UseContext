// AddNotificationButton.js
import { useContext } from "react";
import NotificationContext from "./NotificationContext";

export default function AddNotificationButton() {
  const { addNotification } = useContext(NotificationContext);

  return (
    <button onClick={() => addNotification("Producto agregado al carrito")}>
      Agregar Notificación
    </button>
  );
}

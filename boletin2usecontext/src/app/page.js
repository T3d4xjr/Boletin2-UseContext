// Home.js
"use client";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AuthContext from "./AuthContext";
import LanguageContext from "./LanguageContext";
import { ProductList, Cart } from "./CartContext";
import { AdminPanel } from "./PermissionsContext";
import { useSettings } from "./SettingsContext";
import { useLoading } from "./LoadingContext";
import { NotificationProvider } from './NotificationContext';  // Asegúrate de importar el proveedor
import NotificationList from './NotificationList';
import AddNotificationButton from './AddNotificationButton';

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const { user, login, logout } = useContext(AuthContext);

  const { language, setLanguage } = useContext(LanguageContext);


  const { settings, updateSetting } = useSettings();

  const { loading, startLoading, stopLoading } = useLoading(); 

  const handleLogin = () => {
    const username = prompt("Ingresa tu nombre de usuario:");
    if (username) {
      login(username);
    }
  };

  const handleToggle = (settingName) => {
    updateSetting(settingName, !settings[settingName]);  // Actualiza la configuración
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };


  const handleLoadData = () => {
    startLoading(); 
    setTimeout(() => {
      stopLoading(); 
    }, 2000);
  };

  return (
    <div
      style={{
        /**
         * background: theme === "light" ? "#fff" : "#333",
         * color: theme === "light" ? "#000" : "#fff",
         */
        background: settings.darkMode ? "#333" : "#fff",  
        color: settings.darkMode ? "#fff" : "#000",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h1>Ejercicio 1: Tema Claro/Oscuro</h1>
      <h2>El tema actual es: {theme}</h2>
      <button onClick={toggleTheme}>Cambiar tema</button>

      <h1>Ejercicio 2: Autenticación</h1>
      {user ? (
        <div>
          <h2>Hola, {user.name}</h2>
          <button onClick={logout}>Cerrar Sesión</button>
        </div>
      ) : (
        <div>
          <h2>No estás autenticado.</h2>
          <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
      )}

      <h1>Ejercicio 3: Idioma de la aplicación</h1>
      <h2>{language === "es" ? "Hola" : "Hello"}</h2>
      <button onClick={toggleLanguage}>
        {language === "es" ? "Cambiar Idioma" : "Change Language"}
      </button>

      <h1>Ejercicio 4: Carrito de Compras</h1>
      <ProductList />
      <Cart />

      <h1>Ejercicio 5: Control de permisos de usuario</h1>
      <AdminPanel />

      <h1>Ejercicio 6: Notificaciones globales</h1>
      <NotificationProvider>
        <div>
          <NotificationList /> {/* Lista de notificaciones */}
            <div>
              <AddNotificationButton /> {/* Botón para agregar una nueva notificación */}
            </div>
        </div>
      </NotificationProvider>
      
      <h1>Ejercicio 7: Sistema de Configuraciones</h1>
      <div>
        <h2>Configuraciones</h2>
        <div>
          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle("notifications")}
            />
            Habilitar Notificaciones
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => handleToggle("darkMode")}  
            />
            Modo Oscuro
          </label>
        </div>
      </div>

      <h1>Ejercicio 8: Simulación de Carga de Datos</h1>

      {loading && <div className="spinner">Cargando...</div>}

      <button onClick={handleLoadData}>Cargar datos</button>
    </div>
  );
}

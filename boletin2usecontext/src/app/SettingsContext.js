"use client";
import React, { createContext, useState, useContext } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,  
  });

  const updateSetting = (settingName, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingName]: value,
    }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting }}>
      {children}
    </SettingsContext.Provider>
  );
}


export const useSettings = () => {
  return useContext(SettingsContext);
};


export default function SettingsPage() {
  const { settings, updateSetting } = useSettings(); 

  const handleToggle = (settingName) => {
    updateSetting(settingName, !settings[settingName]);
  };

  return (
    <div>
      <h1>Configuraciones</h1>
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
  );
}

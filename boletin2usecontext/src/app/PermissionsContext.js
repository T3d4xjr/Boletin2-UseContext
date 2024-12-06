"use client";
import React, { createContext, useState, useEffect, useContext } from "react";


const PermissionsContext = createContext();


export function PermissionsProvider({ children }) {
  const [permissions, setPermissions] = useState({ admin: false, canEdit: false });
  const [loading, setLoading] = useState(true);

 
  const fetchPermissions = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then((response) => response.json())
      .then((data) => {
    
        const simulatedPermissions = {
          admin: data && data.length > 0,  
        };
        setPermissions(simulatedPermissions);  
      })
      .catch((error) => {
        console.error("Error al obtener permisos:", error);
      })
      .finally(() => {
        setLoading(false);  
      });
  };

  useEffect(() => {
    fetchPermissions(); 
  }, []);

  return (
    <PermissionsContext.Provider value={{ permissions, fetchPermissions, loading }}>
      {children}
    </PermissionsContext.Provider>
  );
}


export function AdminPanel() {
  const { permissions, fetchPermissions, loading } = useContext(PermissionsContext);

  if (loading) {
    return <div>Cargando permisos...</div>;
  }

  if (!permissions.admin) {
    return <div>No tienes permisos para acceder al panel de administración.</div>;
  }

  return (
    <div>
      <h1>Panel de Administración</h1>
      <p>Bienvenido al panel de administración.</p>
      <button onClick={fetchPermissions}>Actualizar permisos</button>
    </div>
  );
}

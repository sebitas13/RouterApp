import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RegisterPage } from "../pages/RegisterPage";
import { AboutPage } from "../pages/AboutPage";
import { Footer } from "../components/Footer";
import { NotFoundPage } from "../pages/NotFoundPage";
import { useEffect, useState } from "react";

const MainLayout = () => {
  // Función para verificar si el usuario está autenticado
  const isAuthenticated = () => !!localStorage.getItem("userToken");

  // Estado de autenticación
  const [auth, setAuth] = useState(isAuthenticated());

  // Verificar el estado de autenticación al montar el componente
  useEffect(() => {
    const handleStorageChange = () => {
      setAuth(isAuthenticated());
    };

    // Escuchar cambios en localStorage
    window.addEventListener("storage", handleStorageChange);

    // Comprobar la autenticación al principio
    setAuth(isAuthenticated());

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Este useEffect solo se ejecuta al montar el componente

  return (
    <>
      <NavBar isAuthenticated={auth} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />, // Manejo de rutas no encontradas
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default router;

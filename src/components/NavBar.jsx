import React from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ isAuthenticated }) => {
  const handleLogout = () => {
    // Eliminar el token de localStorage y actualizar el estado
    localStorage.removeItem("userToken");
    window.location.reload(); // Recargar la página para reflejar el cambio
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

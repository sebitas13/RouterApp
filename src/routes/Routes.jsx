import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { RegisterPage } from "../pages/RegisterPage";
import { AboutPage } from "../pages/AboutPage";
import { Footer } from "../components/Footer";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import ErrorBoundary from "../components/ErrorBoundary";

// Rutas principales

const routes = [
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
    errorElement: <ErrorBoundary />,
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
    v7_startTransition: true,
  },
});

export default router;

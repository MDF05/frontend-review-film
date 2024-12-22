import Auth from "@/features/auth-route/Auth";
import Home from "@/features/home/Home";
import Profile from "@/features/profile/Profile";
import ProtectRoute from "@/features/protect-route/Protect-Route";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function AppRouter(): React.ReactNode {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectRoute />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "/register",
        },
        {
          path: "/login",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

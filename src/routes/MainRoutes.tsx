import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/dashlayout/dashboard_layout";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/home/dashboard";
import ErrorBoundary from "../utils/errorHandlers/errorboundary";
import Payment from "../pages/home/Payment";
import Login from "../pages/auth/Login";
import NotFound from "../utils/errorHandlers/NotFound";
import { Suspense } from "react";

// const DashboardLayout = import()

export const element = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<p>loading</p>}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Dashboard />
          </Suspense>
        ),
        hasErrorBoundary: true,
        errorElement: (
          <ErrorBoundary>
            <p></p>
          </ErrorBoundary>
        ),
        ErrorBoundary: null,
      },
      {
        path: "payment",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Payment />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

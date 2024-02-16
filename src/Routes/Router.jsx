import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Login";
import ForgetPassword from "../Pages/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword";
import Signup from "../Pages/Signup";
import EmailVerification from "../Pages/EmailVerification";
import VerifyEmail from "../Pages/VerifyEmail";
import AddProperty from "../Pages/AddProperty";
import Calender from "../Pages/Calender";
import YearlyDashboard from "../Pages/YearlyDashboard";
import ConsultingUpsell from "../Pages/ConsultingUpsell";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            element: <Calender />,
          },
        ],
      },

      // {
      //   path: "/",
      //   element: <Home />,
      // },

      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },

      {
        path: "/reset-password",
        element: <ResetPassword />,
      },

      {
        path: "/successful-verification",
        element: <EmailVerification />,
      },

      {
        path: "/verify-email",
        element: <VerifyEmail />,
      },

      {
        path: "/add-property",
        element: <AddProperty />,
      },

      {
        path: "/consulting-upsell",
        element: <ConsultingUpsell />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/calender",
        element: <Calender />,
      },
      {
        path: "/dashboard/yearly",
        element: <YearlyDashboard />,
      },
    ],
  },
]);

import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignPage from "./Pages/LoginPage/SignPage";
import GraphicsCards from "./Pages/StorePage/GraphicsCards";
import FinishRegister from "./Pages/LoginPage/FinishRegister";
import AdminPage from "./Pages/AdminPage/AdminPage";
import LoginAdminPage from "./Pages/AdminPage/LoginPage";
import RegisterAdmin from "./Pages/AdminPage/RegisPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Membership from "./Pages/Membership";
import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    main: ({ history }) => <HomePage history={history} />,
  },
  {
    path: "/GraphicsCard",
    exact: true,
    main: ({ match, history }) => (
      <GraphicsCards match={match} history={history} />
    ),
  },
  {
    path: "/admin",
    exact: false,
    main: () =>
      localStorage.getItem("user") ? (
        <AdminPage />
      ) : (
        <Redirect to="/login-admin" />
      ),
  },
  {
    path: "/login-admin",
    exact: false,
    main: () =>
      localStorage.getItem("user") ? (
        <Redirect to="/admin" />
      ) : (
        <LoginAdminPage />
      ),
  },
  {
    path: "/register-admin",
    exact: false,
    main: ({ history }) => <RegisterAdmin history={history} />,
  },
  {
    path: "/global/login",
    exact: false,
    main: ({ match, history }) =>
      localStorage.getItem("username") ? (
        <Redirect to="/" />
      ) : (
        <LoginPage match={match} history={history} />
      ),
  },
  {
    path: "/global/register",
    exact: true,
    main: ({ match, history }) =>
      localStorage.getItem("username") ? (
        <Redirect to="/" />
      ) : (
        <SignPage match={match} history={history} />
      ),
  },
  {
    path: "/global/register/complete",
    exact: false,
    main: ({ match, history }) =>
      localStorage.getItem("username") ? (
        <Redirect to="/" />
      ) : (
        <FinishRegister match={match} history={history} />
      ),
  },
  {
    path: "/GraphicsCard/:id",
    exact: false,
    main: ({ match, history }) => (
      <DetailPage match={match} history={history} />
    ),
  },
  {
    path: "/membership",
    exact: false,
    main: () =>
      localStorage.getItem("username") ? <Membership /> : <Redirect to="/" />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;

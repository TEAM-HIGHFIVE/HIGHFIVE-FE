// src/routes/router.js
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Main/Home";
import BoardList from "../pages/Board/List/BoardList";
import BoardDetail from "../pages/Board/Detail/BoardDetail";
import WelfareList from "../pages/Welfare/List/WelfareList";
import WelfareDetail from "../pages/Welfare/Detail/WelfareDetail";
import Join from "../pages/User/Join/Join";
import Login from "../pages/User/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "board/list", element: <BoardList /> },
      { path: "board/detail/", element: <BoardDetail /> },
      { path: "welfare/list", element: <WelfareList /> },
      { path: "welfare/detail/", element: <WelfareDetail /> },
      { path: "user/join", element: <Join /> },
      { path: "user/login", element: <Login /> },
    ],
  },
]);

export default router;

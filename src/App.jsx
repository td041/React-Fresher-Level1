import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import ContactPage from "./pages/contact";
import BookPage from "./pages/book";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
const Layout = () => {
  return (
    <div className="layout-app">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <div>404 not found</div>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },
        {
          path: contact,
          element: <ContactPage></ContactPage>,
        },
        {
          path: book,
          element: <BookPage></BookPage>,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Error from "./components/Error";
import RestaurentDetails from "./components/RestaurentDetails";
import FakeRestaurents from "./components/FakeRestaurents";
import FakeRestaurentDetails from "./components/FakeRestaurentDetails";
// import Grocery from "./components/Grocery";

// Chunking, Code splitting, Dynamic Bundling, lazy loading
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurentdetails/:resId",
        element: <RestaurentDetails />,
      },
      {
        path: "/fakerestaurents",
        element: <FakeRestaurents />,
      },
      {
        path: "/fakerestaurentdetails/:resId",
        element: <FakeRestaurentDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

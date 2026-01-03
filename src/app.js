import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy, Suspense, useState } from "react";

// const [userName, setUserName] = useState("default");
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div id="app-layout" className="app">
      {<Header />}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("RouterProvider", <RouterProvider />);
// console.log("AppLayout", <AppLayout />);
// console.log("Outlet", <Outlet />);

root.render(<RouterProvider router={appRouter} />);

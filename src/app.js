import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy, Suspense, useState } from "react";

import UserContext from "./utils/UserContext";
import appStore from "./store/appStore";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import Cart from "./components/Cart";

// const [userName, setUserName] = useState("default");
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("default");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userLogged: userName, setUserName }}>
        <div id="app-layout" className="app">
          {<Header />}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
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

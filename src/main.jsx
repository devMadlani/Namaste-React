import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
 const appRoutetr = createBrowserRouter([
   {
     path: "/",
     element: <App />,
     children: [
       { path: "/", element: <Body /> },
       { path: "/about", element: <About /> },
       { path: "/contact", element: <Contact /> },
       { path: "/restaurant/:resId", element: <RestaurantMenu />,errorElement:<ErrorElement/> },
     ],
     errorElement: <ErrorElement />,
   },
 ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoutetr} />
  </StrictMode>
);
  
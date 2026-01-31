import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { PropertyExamplesPage } from "./pages/PropertyExamplesPage";
import FAQPage from "./pages/FAQPage";
import TestimonialsPage from "./pages/TestimonialsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "exemples-biens", Component: PropertyExamplesPage },
      { path: "faq", Component: FAQPage },
      { path: "avis-clients", Component: TestimonialsPage },
      { path: "admin", Component: Admin },
      { path: "login", Component: Login },
    ],
  },
]);
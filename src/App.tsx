import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Overview from "./routes/overview/overview";
import CreateView from "./routes/create/createView";

import "./App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/overview", element: <Overview /> },
        { path: "/create", element: <CreateView /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/layout";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorHandling from "./pages/ErrorHandling";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorHandling />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;

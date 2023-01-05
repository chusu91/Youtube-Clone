import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import VideoPlay from "./pages/VideoPlay";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/:videoId", element: <VideoPlay /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

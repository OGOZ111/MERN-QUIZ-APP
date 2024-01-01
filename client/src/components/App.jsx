import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import components
import { MainMenu } from "./MainMenu";
import { Quiz } from "./Quiz";
import { Result } from "./Result";

//React Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu></MainMenu>,
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

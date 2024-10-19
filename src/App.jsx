import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "browse",
          element: <Browse />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
    
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

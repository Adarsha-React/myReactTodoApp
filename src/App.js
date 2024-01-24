import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Services from "./components/Services";
import UserContext from "./contexts/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Todo from "./components/Todo";

export function App() {
  const user = {
    name: "Adarsha",
  };

  return (
    <div className="app">
      <Provider store={appStore}>
        <Header />
        <UserContext.Provider value={user}>
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export const appRouter = createBrowserRouter([
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
        path: "/services",
        element: <Services />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

export default App;

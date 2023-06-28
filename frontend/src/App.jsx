import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import AddSmartphonePage from "./pages/Admin/AddSmartphonePage";
import ListSmartphonePage from "./pages/Admin/ListSmartphonePage";
import AddUserPage from "./pages/Admin/AddUserPage";
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout";
import UserLayout from "./components/User/UserLayout/UserLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "user",
    element: <UserLayout />,
    children: [
      {
        path: "/user/addSmartphone",
        element: <AddSmartphonePage />,
      },
      {
        path: "/user/listSmartphone",
        element: <ListSmartphonePage />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/addSmartphone",
        element: <AddSmartphonePage />,
      },
      {
        path: "/admin/listSmartphone",
        element: <ListSmartphonePage />,
      },
      {
        path: "/admin/addUser",
        element: <AddUserPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import AddSmartphonePage from "./pages/AddSmartphonePage";
import ListSmartphonePage from "./pages/ListSmartphonePage";
import AddUtilisateurPage from "./pages/AddUtilisateurPage";
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
        path: "/admin/addUtilisateur",
        element: <AddUtilisateurPage />,
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

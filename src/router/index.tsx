import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
// import { CreateContact } from "../components/CreateContact";

const isLogged = () => {
  return !!window.localStorage.getItem("@auth");
};

const ProtectedDashboardRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  return isLogged() ? <>{element}</> : <Navigate to="/login" />;
};

const LoginRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
  return isLogged() ? <Navigate to="/dashboard" /> : <>{element}</>;
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginRoute element={<Login />} />} />
        <Route path="/login" element={<LoginRoute element={<Login />} />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/createContact" element={<CreateContact />} /> */}
        <Route path="/dashboard" element={<ProtectedDashboardRoute element={<Dashboard />} />} />
        <Route path="*" element={<NotFound />} /> {/* Rota para erro 404 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
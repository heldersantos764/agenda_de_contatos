import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import DefaultLaytout from "../layout/DefaultLayout";
import { TitleProvider } from "../contexts/TitleContext";
import EditContact from "../pages/EditContact";
import CreateContact from "../pages/CreateContact";
import ContactDetails from "../pages/ContactDetails";

const isLogged = () => {
  return !!window.localStorage.getItem("@auth");
};

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({
  element,
}) => {
  return isLogged() ? (
    <TitleProvider>
      <DefaultLaytout>{element}</DefaultLaytout>
    </TitleProvider>
  ) : (
    <Navigate to="/login" />
  );
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
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />}/>
        <Route path="/contact-details/:id" element={<ProtectedRoute element={<ContactDetails />} />}/>
        <Route path="/create-contact" element={<ProtectedRoute element={<CreateContact />} />}/>
        <Route path="/edit-contact/:id" element={<ProtectedRoute element={<EditContact />} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

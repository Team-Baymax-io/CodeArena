import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/authContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Error, Outline, Feature, Product } from "./components";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FormCard from "./pages/FormCard";

function PrivateRoute({ children }) {
  const { state } = useAuth();
  return state.token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Outline />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="Technology" element={<Feature />} />
          {/* <Route path="Products" element={<Product />} /> */}
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Error />} />

          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="Form"
            element={
              <PrivateRoute>
                <FormCard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

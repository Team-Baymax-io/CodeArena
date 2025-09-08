import React from "react";
import { Button, SearchBar } from "./index";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Header() {
  const { state, dispatch } = useAuth(); // ✅ state.user + state.token
  const { user } = state;

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-50 to-green-50 py-5 shadow-md fixed top-0 left-0 w-full p-4 z-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-3xl md:text-3xl font-bold text-blue-700 mb-4 md:mb-0">
            BayMax<span className="text-green-600">.io</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-3 md:space-x-6">
              {["Form", "Technology", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item}`}
                    className="text-blue-700 font-semibold hover:text-green-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* search bar */}
          <SearchBar />

          {/* Auth Buttons */}
          <div>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

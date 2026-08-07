import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {

  return (

    <Routes>


      {/* Public Routes */}

      <Route
        path="/login"
        element={<Login />}
      />


      <Route
        path="/register"
        element={<Register />}
      />



      {/* Protected Routes */}

      <Route

        path="/"

        element={

          <ProtectedRoute>

            <Home />

          </ProtectedRoute>

        }

      />


      <Route

        path="/products"

        element={

          <ProtectedRoute>

            <Products />

          </ProtectedRoute>

        }

      />



      {/* 404 Redirect */}

      <Route

        path="*"

        element={

          <Navigate

            to="/"

            replace

          />

        }

      />


    </Routes>

  );

}

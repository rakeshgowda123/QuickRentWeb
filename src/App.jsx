import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SignUpForm from "./components/auth/SignUpForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

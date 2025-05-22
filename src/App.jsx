import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WorldMap from "./components/WorldMap";
import LevelSelectionMap from "./components/LevelSelectionMap";
import LoginForm from "./components/LoginForm";
import RegisterPage from "./components/RegisterPage";
import SignupPage from "./components/SignupPage";
import RegistrationSuccess from "./components/RegistrationSuccess";
import LevelDescription from "./components/LevelDescription";

function App() {
  return (
    <Routes>
      <Route path="/ai-world-map" element={<HomePage />} />
      <Route path="/world-map" element={<WorldMap />} />
      <Route path="/level-select" element={<LevelSelectionMap />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/registration-success" element={<RegistrationSuccess />} />
      <Route path="/level-description" element={<LevelDescription />} />
    </Routes>
  );
}

export default App;

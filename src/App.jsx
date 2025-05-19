import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import RegisterPage from "./components/RegisterPage";
import RegistrationSuccess from "./components/RegistrationSuccess";
import WorldMap from "./components/WorldMap";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/world-map" element={<WorldMap />} />
      </Routes>
    </Router>
  );
}

export default App;

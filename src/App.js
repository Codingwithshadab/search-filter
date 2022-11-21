import FormApp from "./components/form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./components/login/Login";
import Dash from "./components/login/dash/Dash";
import { useState } from "react";

import Navigation from "./components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import StudentPage from "./pages/student";
import ProductsPage from "./pages/products";
import MoviesPage from "./pages/movies";
import CounterPage from "./pages/counter";
import CalculatorPage from "./pages/calculator";
import HomePage from "./pages/home";

function App() {
  const [isActive, setIsActive] = useState(false);
  const handleLogin = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* <FormApp /> */}
      <Login handleLogin={handleLogin} isActive={isActive} />
      <Navigation />
      {isActive && <Dash />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/movies" element={<MoviesPage   />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />

      </Routes>
    </>
  );
}

export default App;

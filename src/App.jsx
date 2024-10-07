import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import LayoutMain from "./layout/LayoutMain";
import Auth from "./views/Auth/Auth";
import Login from "./views/Auth/Login/Login";
import Register from "./views/Auth/Register/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

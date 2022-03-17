import "./App.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={!user ? <Login /> : <Home />} />
        <Route path="/register" element={!user ? <Register /> : <Home />} />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;

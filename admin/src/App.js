import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewMovie from "./pages/newMovie/NewMovie";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie.jsx";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContect/AuthContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/login" element={user ? <Home /> : <Login />} />
            {user && (
              <>
                <Route exact path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/movies" element={<MovieList />} />
                <Route path="/movie/:movieId" element={<Movie />} />
                <Route path="/newMovie" element={<NewMovie />} />
                <Route path="/lists" element={<ListList />} />
                <Route path="/list/:listId" element={<List />} />
                <Route path="/newlist" element={<NewList />} />
              </>
            )}
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;

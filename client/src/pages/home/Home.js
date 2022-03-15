import Featured from "../../components/featured/Featured";
import List from "../../components/list/List.jsx";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzA1MDFjZTUzZGYwZDBhMzI4YmI1YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzM0ODY0MCwiZXhwIjoxNjQ3NzgwNjQwfQ.Zmv0UI5eXIL6P64Tx-qkNb-V7xKUODwrIcPIE_7D32w",

              // + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, key) => (
        <List key={key} list={list} />
      ))}
    </div>
  );
};

export default Home;

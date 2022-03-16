import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState, useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzA1MDFjZTUzZGYwZDBhMzI4YmI1YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzM0ODY0MCwiZXhwIjoxNjQ3NzgwNjQwfQ.Zmv0UI5eXIL6P64Tx-qkNb-V7xKUODwrIcPIE_7D32w",
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user, key) => (
          <li className="widgetSmListItem" key={key}>
            <img
              src={
                user.profilePic ||
                "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

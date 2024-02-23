import React, { useEffect, useState } from "react";
import { getUserByUsername } from "../api/request";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [information, setInformation] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem("dXNlcg"));

    if (credentials) {
      setIsLogged(true);
      /** 
        const fetchData = async () => {
        const { token, username } = credentials;
        const infos = await getUserByUsername(username, token);

        setInformation(infos.data);
      };
      fetchData();
    */
    }
  }, []);

  const onClickFunction = (event) => {
    const { target } = event;
    const { name } = target;

    switch (name) {
      case "login":
        navigate("/login");
        break;
      case "sing up":
        navigate("/register");
        break;
      default:
        break;
    }
  };

  return (
    <main className="m-home">
      {!isLogged && (
        <div className="m-home--isLogged">
          <h4>Log in to access Y</h4>
          <div className="m-home--isLogged-buttons">
            <button type="button" name="login" onClick={onClickFunction}>
              Login
            </button>
            <button type="button" name="sing up" onClick={onClickFunction}>
              Sing up
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

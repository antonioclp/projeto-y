import React, { useEffect, useState } from "react";

// Components
import { 
  IsLogged, CHeader, 
  AsideLeft, AsideRight, 
  PostCenter
} from "../components";

// Api
// import { getUserByUsername } from "../api/request";

// Style
import "../styles/pages/Home.css";

export default function Home() {
  // const [information, setInformation] = useState({});
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

  return (
    <main className={`m-home ${isLogged ? "" : "with-blur"}`}>
      <div className={`${isLogged ? "" : "with-blur"}`}>
        <CHeader />
      </div>
      <div className="m-home--center">
        <AsideLeft />
        <PostCenter />
        <AsideRight />
      </div>
      {!isLogged && <IsLogged />}
    </main>
  );
}

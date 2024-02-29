import React, { useEffect, useState } from "react";

// Components
import { IsLogged, CHeader } from "../components";

// Api
// import { getUserByUsername } from "../api/request";

// Style
import "../styles/pages/Home.css";
import AsideGeneral from "../components/AsideGeneral";

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
    <main className={"m-home"}>
      <div className={`${isLogged ? "" : "with-blur"}`}>
        <CHeader />
      </div>
      <div className="m-home--center">
        <AsideGeneral />
        <div className="center__post-center">post-center</div>
        <aside className="center__aside-recom">aside-recommendations</aside>
      </div>
      {!isLogged && <IsLogged />}
    </main>
  );
}

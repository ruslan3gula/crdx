import logo from "./logo.svg";
import "./App.css";
import { Pairs } from "./Pairs";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pairs, setPairs] = useState([]);
  const [iconPic, setIconPic] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = axios.create({
        baseURL: "https://ag48t25wv7.corp.merehead.xyz/api/pairs/",
      });
      const iconPic = await axios.get(
        "https://ag48t25wv7.corp.merehead.xyz/api/asset/images"
      );

      const result = await data.get("all?page=1");
      // console.log("iconPic", iconPic.data);
      setPairs(result.data.data);
      const iconPicMerged = iconPic.data.flat();
      setIconPic(iconPicMerged);
    } catch (e) {
      console.log(e);
    }
  }
  console.log("iconPic", iconPic[0]);
  return (
    <div>
      <Pairs pairs={pairs} />
    </div>
  );
}

export default App;

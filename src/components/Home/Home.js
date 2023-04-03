import React, { useState, memo, useCallback, useEffect } from "react";
import Catalog from "./Catalog";

const Home = () => {


  return (
    <div className="App">
      <div style={{ padding: "5px" }}>
        <h1 style={{ textAlign: "center", margin: "20px 0px 40px 0px", color:"#3c3ee5"}}>
        Star Wars Films        
        </h1>
        <Catalog/>
      </div>
    </div>
  );
};

export default Home;
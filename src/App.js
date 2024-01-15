import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import StaticPage from "./Pages/StaticPage/StaticPage";
import Navbar from "./Components/Navbar";
import UrlShorterner from "./Pages/UrlShortener/UrlShorterner";

const App = () => {
 

  return (
    <Router>
        <Navbar />
      <div className="mx-auto max-w-[70%] ">
        <Routes>
        <Route
            path="/"
            element={<StaticPage />}
          ></Route>
          <Route
            path="/url-shortener"
            element={<UrlShorterner />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

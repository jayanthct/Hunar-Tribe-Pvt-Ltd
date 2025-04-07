import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageNotFound404 from "./PageNotFound404/PageNotFound404";
import Layout from "./Layout/Layout";
import LandingPage from "./LandingPage/LandingPage";
import error from "./PageNotFound404/Assets/illustration.svg";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route
              path="*"
              element={
                <PageNotFound404 description={"Page Not Found"} img={error} />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

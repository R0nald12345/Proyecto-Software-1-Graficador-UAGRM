import React from "react";
import { createBrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../auth/Login";


const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"></Route>

          <Route
            path="/login"
            element={<Login/>}
          />

          <Route path="/graficador" element={<Login/>} />

          

        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../views/Home/Home";
import Login from "../../views/Login/Login";
import NotFound from "../../views/NotFound/NotFound";
import Protected from "../Protected/Protected";
import Layout from "../Layout/Layout";
import { Context } from "../../AppProvider";

function Routing() {
  const { auth, setAuth } = useContext(Context);
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/login"
            element={<Login auth={auth} setAuth={setAuth} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default Routing;

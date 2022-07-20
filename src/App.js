import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import keycloak from "./Keycloack";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "keycloak-js";
import PrivateRoute from "./helper/PrivateRoute";
import Nav from "./components/Nav";
function App() {
  return (
    <div>
      Pfoc
      {/* <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route
              path="/secured"
              element={
                <PrivateRoute>
                  <SecuredPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider> */}
    </div>
  );
}

export default App;

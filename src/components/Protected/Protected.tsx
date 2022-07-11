import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../AppProvider";

function Protected({ children }: { children: JSX.Element }) {
  const { auth } = useContext(Context);
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Protected;

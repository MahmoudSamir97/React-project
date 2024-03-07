import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props: any) {
  return (
    <>
      {localStorage.getItem("token") ? (
        props.children
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
}

export default ProtectedRoute;

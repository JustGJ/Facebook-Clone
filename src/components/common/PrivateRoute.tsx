import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "@components/navbar";

interface IProps {
  children: React.JSX.Element;
}
const PrivateRoute = ({ children }: IProps) => {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default PrivateRoute;

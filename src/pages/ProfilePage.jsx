import React from "react";
import { useSelector } from "react-redux";

export const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  return <h1>User : {user}</h1>;
};

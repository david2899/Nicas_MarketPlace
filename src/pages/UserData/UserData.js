import React from "react";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import "./user.css";
import { SingUp } from "../../components/SingUp/SingUp";

export const UserData = () => {
  return (
    <>
      <Navigation />
      <div className="container-page-user">
        <SingUp />
      </div>
      <Footer />
    </>
  );
};

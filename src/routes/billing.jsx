import React from "react";
import "../index.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Billing = () => {
  return (
    <div>
      <Header />
      {/* sidebar */}
      <Sidebar place="3" />
      {/* main content container */}
      <div></div>
    </div>
  );
};

export default Billing;

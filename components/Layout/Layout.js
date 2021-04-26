import React from "react";
import styles from "../../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "../Nav";
import Container from "./Container";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <Container children={children}></Container>

      <Footer />
    </>
  );
};

export default Layout;

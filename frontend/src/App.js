import React from "react";
import "./assets/styles/bootstrap.custom.css";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Home from "./components/Home";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
          {/* <HomeScreen/> */}
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;

import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import React from "react";

const App = () => {
  return <React.Fragment>
    <Home />
    <Modal />
    <Sidebar />
  </React.Fragment>
}

export default App;
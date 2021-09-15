import React from "react";
//import pages
import Home from "./pages/Home";
import FindaTutor from "./pages/FindaTutor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/app.scss";
//router
import { Switch, Route, useLocation } from "react-router";
//animation
import { AnimatePresence } from "framer-motion";
import LoginPage from "./pages/LoginPage";

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        {/* <Switch Location={location} key={location.pathname} */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/findatutor">
            <FindaTutor />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;

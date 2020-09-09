import React from "react";
import "./styles/style.css";
import Domu from "./Domu.js";
import Detail from "./DetailClanku.js";
import Kontakt from "./Kontakt.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Domu} />
        <Route path="/blog" component={Detail} />
        <Route path="/kontakt" exact component={Kontakt} />
      </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;

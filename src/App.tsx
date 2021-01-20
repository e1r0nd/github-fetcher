import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Spinner } from "./components/Spinner";

function App() {
  return (
    <>
      <Spinner />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { Home } from "./pages/Home";
import { About } from "./pages/About";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Spinner } from "./components/Spinner";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Spinner />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </SnackbarProvider>
  );
}

export default App;

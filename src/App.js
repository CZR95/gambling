import React, { Component } from "react";

// i18n
import i18n from "./locales/i18n";
import { withNamespaces } from "react-i18next";

// layouts
import Navbar from "./layouts/Navbar.js";
import Footer from "./layouts/Footer.js";

// react-bootstrap
//import Button from "react-bootstrap/Container";

// component
import Home from "./components/Home.js";
import Promotion from "./components/Promotion.js";
import Contact from "./components/Contact.js";

// react-router-dom
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    lang: "en",
  };

  render() {
    const { t } = this.props;

    const changeLanguage = (lng) => {
      console.log("call call" + lng);

      if (this.state.lang !== lng) {
        this.setState({ lang: lng });
        i18n.changeLanguage(lng);
      }
    };

    return (
      <BrowserRouter>
        <header>
          <Navbar changeLanguage={changeLanguage} t={t} />
        </header>

        <Switch>
          <Route path="/gambling/home" component={Home} />
          <Route path="/gambling/promotion" component={Promotion} />
          <Route path="/gambling/contact" component={Contact} />
          <Redirect to="/gambling/home" component={Home} />
        </Switch>
        {/* //<ModalCenter /> */}

        {/* footer bar */}
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    );
  }
}

export default withNamespaces()(App);

import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import ProductDetail from "./../../Components/ProductDetail/ProductDetail";
import Header from "./../../Components/LoginPage/HeaderLogin/Header/Header";
import Footer from "../../Components/HomePage/Footer/Footer";
import Specification from "../../Components/ProductDetail/Specification/Specification";

class DetailPage extends Component {
  showRoute = (routes) => {
    var result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Fragment>
        <Header />
        {this.showRoute(routes)}
        <Footer />
      </Fragment>
    );
  }
}

const routes = [
  {
    path: "/GraphicsCard/:id/KeyFeatures",
    exact: true,
    main: ({ match }) => <ProductDetail match={match} />,
  },
  {
    path: "/GraphicsCard/:id/Specification",
    exact: true,
    main: ({ match }) => <Specification match={match} />,
  },
];

export default DetailPage;

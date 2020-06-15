import React, { Component } from "react";

// i18n
//import i18n from "../locales/i18n";
import { withNamespaces } from "react-i18next";

// images
import cimbLogo from "../images/logo/cimb-bank-logo.png";
import maybankLogo from "../images/logo/maybank-logo.png";
import publicLogo from "../images/logo/public-bank-logo.png";
import hongleongLogo from "../images/logo/hong-leong-bank-logo.png";
import rhbLogo from "../images/logo/rhb-bank-logo.png";

// react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

// react-router-dom
//import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    const { t } = this.props;

    return (
      <div>
        <Container fluid className="bg-dark text-white">
          <Container className="py-4">
            <Row>
              <Col className="py-2">
                <img src={cimbLogo} alt="cimb-logo" className="img-fluid" />
              </Col>
              <Col className="py-2">
                <img
                  src={maybankLogo}
                  alt="maybank-logo"
                  className="img-fluid"
                />
              </Col>
              <Col className="py-2">
                <img src={publicLogo} alt="public-logo" className="img-fluid" />
              </Col>
              <Col className="py-2">
                <img
                  src={hongleongLogo}
                  alt="cimb-logo"
                  className="img-fluid"
                />
              </Col>
              <Col className="py-2">
                <img src={rhbLogo} alt="rhb-logo" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid className="bg-gray-8">
          <Container className="text-center text-white py-2">
            <span>
              {this.props.t("copyright")}
              <FontAwesomeIcon
                icon={faCopyright}
                inverse
                // className="font-size-4"
              />{" "}
              2020 KK Casino
            </span>
          </Container>
        </Container>
      </div>
    );
  }
}

export default withNamespaces()(Footer);

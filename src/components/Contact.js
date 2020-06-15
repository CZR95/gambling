import React, { Component } from "react";

// i18n
//import i18n from "../locales/i18n";
import { withNamespaces } from "react-i18next";

// react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faWeixin } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  state = {};
  render() {
    const { t } = this.props;

    return (
      <div align="center" className="background-image py-10 font-family-1 ">
        <Container className="background-image-yellow text-center p-3">
          <span className="display-4 text-white font-size-9 font-family-1">
            {this.props.t("contact_title")}
          </span>
        </Container>

        <Container className="text-white pt-3 bg-gray-6">
          <Row lg>
            <Col lg={{ span: 4, offset: 2 }} className="py-3">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                inverse
                className="font-size-7"
              />
              <div className="d-inline-block overflow-auto ml-3 font-size-5">
                <span>Call us / SMS</span>
              </div>
              <p className="p-2 font-size-4"> 016-855 0612</p>
            </Col>
            <Col lg={4} className="p-3">
              <FontAwesomeIcon
                icon={faWhatsapp}
                inverse
                className="font-size-9"
              />
              <div className="d-inline-block overflow-auto ml-3 font-size-5">
                <span>WhatsApp</span>
              </div>
              <p className="p-2 font-size-4"> 014-756 8275</p>
            </Col>
          </Row>
          <Row lg>
            <Col lg={{ span: 4, offset: 2 }} className="p-3 ">
              <FontAwesomeIcon
                icon={faTelegram}
                inverse
                className="font-size-8"
              />
              <div className="d-inline-block overflow-auto ml-3 font-size-5">
                <span>Telegram</span>
              </div>
              <p className="p-2 font-size-4"> 016-855 0612</p>
            </Col>
            <Col lg={4} className="p-3">
              <FontAwesomeIcon
                icon={faWeixin}
                inverse
                className="font-size-8"
              />
              <div className="d-inline-block overflow-auto ml-3 font-size-5">
                <span>WeChat ID</span>
              </div>
              <p className="p-2 font-size-4"> KKBET_CS</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withNamespaces()(Contact);

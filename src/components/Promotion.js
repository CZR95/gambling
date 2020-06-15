import React, { Component } from "react";

// i18n
//import i18n from "../locales/i18n";
import { withNamespaces } from "react-i18next";

// react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// images
import promo1 from "../images/promo/promo-1.png";
import promo2 from "../images/promo/promo-2.png";
import promo3 from "../images/promo/promo-3.png";
import promo4 from "../images/promo/promo-4.png";
import promo5 from "../images/promo/promo-5.png";
import promo6 from "../images/promo/promo-6.png";
import promo7 from "../images/promo/promo-7.png";
import promo8 from "../images/promo/promo-8.png";
import promo9 from "../images/promo/promo-9.png";
import promo10 from "../images/promo/promo-10.png";

class Promotion extends Component {
  constructor(props, context) {
    super(props, context);

    this.modalShow = this.modalShow.bind(this);
    this.modalClose = this.modalClose.bind(this);

    this.state = {
      show: false,
      modalImage: 0,
    };
  }

  modalClose() {
    this.setState({ show: false });
  }

  modalShow(imageNum) {
    this.setState({ show: true });
    this.setState({ modalImage: imageNum });
  }

  render() {
    let modalDisplayImage;

    switch (this.state.modalImage) {
      case "1":
        modalDisplayImage = promo1;
        break;
      case "2":
        modalDisplayImage = promo2;
        break;
      case "3":
        modalDisplayImage = promo3;
        break;
      case "4":
        modalDisplayImage = promo4;
        break;
      case "5":
        modalDisplayImage = promo5;
        break;
      case "6":
        modalDisplayImage = promo6;
        break;
      case "7":
        modalDisplayImage = promo7;
        break;
      case "8":
        modalDisplayImage = promo8;
        break;
      case "9":
        modalDisplayImage = promo9;
        break;
      case "10":
        modalDisplayImage = promo10;
        break;
      default:
        modalDisplayImage = promo1;
    }

    return (
      <div className="background-image">
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.modalClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.t("contact_title")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={modalDisplayImage}
              alt={"promo-" + this.state.modalImage}
              className="img-fluid "
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              {this.props.t("close")}
            </Button>
            {/* <Button variant="primary" onClick={this.modalClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>

        <Container className="p-5 ">
          <Row>
            <Col md className="p-2">
              <img
                src={promo1}
                alt="promo-1"
                className="img-fluid pointer"
                onClick={() => this.modalShow("1")}
              />
            </Col>
            <Col md className="p-2">
              <img
                src={promo2}
                alt="promo-2"
                className="img-fluid pointer"
                onClick={() => this.modalShow("2")}
              />
            </Col>
          </Row>
          <Row>
            <Col md className="p-2">
              <img
                src={promo3}
                alt="promo-3"
                className="img-fluid pointer"
                onClick={() => this.modalShow("3")}
              />
            </Col>
            <Col md className="p-2 ">
              <img
                src={promo4}
                alt="promo-4"
                className="img-fluid pointer"
                onClick={() => this.modalShow("4")}
              />
            </Col>
          </Row>
          <Row>
            <Col md className="p-2">
              <img
                src={promo5}
                alt="promo-5"
                className="img-fluid pointer"
                onClick={() => this.modalShow("5")}
              />
            </Col>
            <Col md className="p-2 ">
              <img
                src={promo6}
                alt="promo-6"
                className="img-fluid pointer"
                onClick={() => this.modalShow("6")}
              />
            </Col>
          </Row>
          <Row>
            <Col md className="p-2">
              <img
                src={promo7}
                alt="promo-7"
                className="img-fluid pointer"
                onClick={() => this.modalShow("7")}
              />
            </Col>
            <Col md className="p-2 ">
              <img
                src={promo8}
                alt="promo-8"
                className="img-fluid pointer"
                onClick={() => this.modalShow("8")}
              />
            </Col>
          </Row>
          <Row>
            <Col md className="p-2">
              <img
                src={promo9}
                alt="promo-9"
                className="img-fluid pointer"
                onClick={() => this.modalShow("9")}
              />
            </Col>
            <Col md className="p-2 ">
              <img
                src={promo10}
                alt="promo-10"
                className="img-fluid pointer"
                onClick={() => this.modalShow("10")}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withNamespaces()(Promotion);

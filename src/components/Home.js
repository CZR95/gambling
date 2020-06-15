import React, { Component } from "react";

// i18n
//import i18n from "../locales/i18n";
import { withNamespaces } from "react-i18next";

// react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

// images
import promo1 from "../images/main-promo/main-promo-1.png";
import promo2 from "../images/main-promo/main-promo-2.png";
import promo3 from "../images/main-promo/main-promo-3.png";
import pussy888Logo from "../images/logo/pussy888-logo.png";
import xe88Logo from "../images/logo/xe88-logo.png";
import jokerLogo from "../images/logo/joker-logo.png";
import kiss918Logo from "../images/logo/918kiss-logo.png";
import mega888Logo from "../images/logo/mega888-logo.png";
import maxbetLogo from "../images/logo/maxbet-logo.png";

// font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
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
    const { t } = this.props;

    // let modalDisplayImage;

    // switch (this.state.modalImage) {
    //   case "1":
    //     modalDisplayImage = promo1;
    //     break;
    //   case "2":
    //     modalDisplayImage = promo2;
    //     break;
    //   case "3":
    //     modalDisplayImage = promo3;
    //     break;

    //   default:
    //     modalDisplayImage = promo1;
    // }

    return (
      <div className="background-image">
        {/* modal */}
        {/* <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.modalClose}
        >
          <Modal.Header closeButton>
            <Modal.Title> {this.props.t("contact_title")}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={modalDisplayImage}
              alt="promo-image"
              className="img-fluid "
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              {this.props.t("close")}
            </Button>
            <Button variant="primary" onClick={this.modalClose}>
              Save Changes
            </Button> 
          </Modal.Footer>
        </Modal> */}
        {/* modal end */}

        <Carousel className="pb-3">
          <Carousel.Item>
            <img className="d-block w-100" src={promo1} alt="First slide" />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={promo2} alt="Third slide" />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={promo3} alt="Third slide" />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* why choose us */}
        <Container className="mb-1 font-family-1">
          <Col lg className="background-image-gray text-center p-2 ">
            <span className=" text-white  font-size-4 font-family-1">
              {this.props.t("why_choose_us")}
            </span>
          </Col>
        </Container>

        <Container className="">
          <Row className="px-2 mb-3 font-family-1">
            <Col
              lg
              className="background-image-yellow text-center font-size-2 text-white m-2 p-3"
            >
              <FontAwesomeIcon
                icon={faCoins}
                inverse
                className="font-size-9 mb-2"
              />
              <br />
              {this.props.t("special_welcome_bonus")}
            </Col>
            <Col
              lg
              className="background-image-yellow text-center font-size-2 text-white m-2 p-3"
            >
              <FontAwesomeIcon
                icon={faHandshake}
                inverse
                className="font-size-9 mb-2"
              />
              <br />
              {this.props.t("transparent_payment_system")}
            </Col>
            <Col
              lg
              className="background-image-yellow text-center font-size-2 text-white m-2 p-3"
            >
              <FontAwesomeIcon
                icon={faPhoneAlt}
                inverse
                className="font-size-9 mb-2"
              />
              <br />
              {this.props.t("customer_support")}
            </Col>
            <Col
              lg
              className="background-image-yellow text-center font-size-2 text-white m-2 p-3"
            >
              <FontAwesomeIcon
                icon={faUserTie}
                inverse
                className="font-size-9 mb-2"
              />
              <br />
              {this.props.t("friendly_customer_support")}
            </Col>
          </Row>
        </Container>
        {/* end why choose us */}

        {/* content */}
        <Container className="">
          <span className="text-white text-justify">
            <h3>The Top Slot Games and Live Casino Malaysia</h3>
            <p className="text-justify">
              KK Casino offers you so many options, from slot games to live
              dealer games. It’s enough to feel like you’re right in the middle
              of the action. Pick the right website that plays for real money
              betting. There is no doubt that the future of gambling and casino
              games is here. Live dealer games and online slot machines bring
              the excitement of the casino where ever you are.
            </p>
            <p>
              KK Casino have a lot promotions and bonuses than Offline Casino,
              let's do a try today. Are you ready to start playing? Take a look
              at these Live Casino games and try your luck today.
            </p>
            <h3>What Are the Top Online Casino Games Malaysia?</h3>
            <p>
              There are many casino games that you can play. The top ones
              include 918kiss slot machines, which usually bring in the most
              winning for players in Casino Malaysia. Slot games are less
              intimidating than other games, and they appeal to beginners and
              long-time players, 918kiss and Luckypalace is the hottest slot
              games in Malaysia. Live dealer casino games allow you to play
              games like Blackjack or Sicbo. You’ll also find baccarat or
              roulette, too. These games are run in real-time by a live dealer
              (yes, a human being). They pretty much run the room, in the same
              way that a moderator would run a debate or community forum. In
              this instance, they work with real casino tables and equipment,
              such as a roulette wheel. Live dealer games give you the fun of
              being at the casino without having to be there. You can interact
              with the dealer just like you would at the casino. How do you know
              if you won? Online casinos will use software on the backend of the
              site that uses random number generators. That ensures a fair
              playing experience for everyone. Some online casinos will offer
              other ways to gamble, such as with bingo games or sports betting
            </p>
          </span>
          <br />
        </Container>
        {/* end content */}

        {/* games */}
        <Container className="mb-1 ">
          <Col
            lg
            className="background-image-gray text-center font-size-4 text-white p-2 font-family-1"
          >
            {this.props.t("online_casino_games")}
          </Col>
        </Container>

        <Container className="">
          <Row className="px-2 ">
            <Col sm={6} md={4} className="p-3">
              <img
                className="d-block w-100"
                src={pussy888Logo}
                alt="First slide"
              />
            </Col>
            <Col sm={6} md={4} className="p-3">
              <img className="d-block w-100" src={xe88Logo} alt="First slide" />
            </Col>
            <Col sm={6} md={4} className="p-3">
              <img
                className="d-block w-100"
                src={jokerLogo}
                alt="First slide"
              />
            </Col>
            <Col sm={6} md={4} className="p-3">
              <img
                className="d-block w-100"
                src={kiss918Logo}
                alt="First slide"
              />
            </Col>
            <Col sm={6} md={4} className="p-3">
              <img
                className="d-block w-100"
                src={mega888Logo}
                alt="First slide"
              />
            </Col>
            <Col sm={6} md={4} className="p-3">
              <img
                className="d-block w-100"
                src={maxbetLogo}
                alt="First slide"
              />
            </Col>
          </Row>
        </Container>

        {/* end games */}
      </div>
    );
  }
}

export default withNamespaces()(Home);

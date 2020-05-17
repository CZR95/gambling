import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import image from "./background.png";
import logo from "./bb.png";
import bonus1 from "./bonus.jpg";
import bonus2 from "./bonus-2.jpg";
import bonus3 from "./bonus-3.jpg";

class App extends Component {
  render() {
    return (
      <div className="">
        {/* header-container */}
        <div className="container-fluid ccc">
          <div className="container ">
            <div className="clearfix">
              <div className="float-right pt-2">
                <a className="px-3 mx-1 rounded-pill " href="/">
                  <span className="text-white text-decoration-none">EN</span>
                </a>
                <a className="px-3 mx-1 rounded-pill " href="/">
                  <span className="text-white text-decoration-none">CN</span>
                </a>
                <a className="px-3 mx-1 rounded-pill " href="/">
                  <span className="text-white text-decoration-none">MY</span>
                </a>
              </div>
            </div>
          </div>

          {/* Menu bar */}
          <div className="container clearfix font-weight-bold">
            <div className="float-left my-2">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="float-right pt-3">
              <a className="px-4 py-2" href="/">
                HOME
              </a>
              <a className="px-4 py-2" href="/">
                GAMES
              </a>
              <a className="px-4 py-2" href="/">
                <span className="text-decoration-none">PROMOTION</span>
              </a>
              <a
                className="px-4 py-2"
                href="https://wa.me/60172099727"
                target="_blank"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>

        {/*Menu bar
        <div className="container-fluid bg-secondary">
          <div className="row">
            <div className="col-2"></div>
            <div className="col text-center py-2 cs-border-2 ">
              <a className="font-weight-bold text-white-30" href="/">
                HOME
              </a>
            </div>
            <div className="col text-center py-2 cs-border-2 ">
              <a className="btn btn-primary" href="/games">
                GAMES
              </a>
            </div>
            <div className="col text-center py-2 cs-border-2 ">
              <a className="font-weight-bold text-white-30" href="/promotion">
                PROMOTION
              </a>
            </div>
            <div className="col text-center py-2 cs-border-2 ">
              <a className="font-weight-bold text-white-30" href="/contact-us">
                CONTACT US
              </a>
            </div>
            <div className="col-2"></div>
          </div>
        </div>*/}

        {/* middle-container */}
        <div className="container-fluid bgi-star">
          {/* promotion */}
          <div className="container p-3">
            <div className="bg-gray text-white text-center font-weight-bold opacity-3 py-2 rounded-pill">
              SPECIAL OFFER & PROMOTIONS
            </div>
          </div>
          <div className="container">
            <div className="row px-2 mb-3">
              <div className="col-4 text-center px-2 ">
                <img className="fit-image" src={bonus1} alt="" />
              </div>
              <div className="col-4 text-center px-2">
                <img className="fit-image" src={bonus2} alt="" />
              </div>
              <div className="col-4 text-center px-2">
                <img className="fit-image" src={bonus3} alt="" />
              </div>
            </div>
          </div>

          {/* content */}
          <div className="container ">
            <span className="text-white text-justify">
              <h3>The Top Slot Games and Live Casino Malaysia</h3>
              <p className="text-justify">
                Regal33 Online gambling offers you so many options, from slot
                games to live dealer games. It’s enough to feel like you’re
                right in the middle of the action. Pick the right website that
                plays for real money betting. There is no doubt that the future
                of gambling and casino games is here. Live dealer games and
                online slot machines bring the excitement of the casino where
                ever you are.
              </p>
              <p>
                Regal33 Online Casino Malaysia have a lot promotions and bonuses
                than Offline Casino, let’s do a try today. Are you ready to
                start playing? Take a look at these Live Casino games and try
                your luck today.
              </p>
              <h3>What Are the Top Online Casino Games Malaysia?</h3>
              <p>
                There are many casino games that you can play. The top ones
                include 918kiss slot machines , which usually bring in the most
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
                with the dealer just like you would at the casino. How do you
                know if you won? Online casinos will use software on the backend
                of the site that uses random number generators. That ensures a
                fair playing experience for everyone. Some online casinos will
                offer other ways to gamble, such as with bingo games or sports
                betting
              </p>
              <h3>Pick the Right Casino Game Malaysia</h3>
              <p>
                Everyone has their favourite game, and you probably have your
                favourite casino games, too. The wonderful thing about online
                casino Malaysia is that there are dozens of variations of each
                game. Take blackjack as an example. A live dealer may play with
                only 2 decks of cards or they may play with 8 decks of cards.
                That detail can change the outcome of the game and your ability
                to win. Dealers may have a tendency to stand more often or not.
                Your job is to know the details of the game and how those
                details impact your winnings.
              </p>

              <h3>Know the Rules</h3>
              <p>
                The reason why Online Casino games Malaysia are intimidating is
                that there are people at the table who know more than you about
                the game. You don’t have to be a professional gambler to enjoy
                live dealer games. You do need to have a basic understanding as
                to how the game works. You should also be aware that table
                etiquette is a must, even at an online casino. Trash-talking,
                being disruptive, and deliberately being a nuisance aren’t
                acceptable behaviours. Play, enjoy yourself, interact with
                everyone, and have a great time
              </p>
              <h3>Playing Probability</h3>
              <p>
                Beginner gamblers make the mistake that if they go a few rounds
                without winning, the next round is going to win for sure. That’s
                not the case. Slot games are operated using random number
                generators, so there is no way to tell if and when a game will
                win.
              </p>
              <br />
            </span>
          </div>
        </div>

        {/*Footer*/}
        <div className="container-fluid bg-dark-gray">
          <div className="container py-3">
            {/* bank list */}
            <div className="row">
              <div className="col bg-red text-white text-center p-2 mr-3">
                CIMB
              </div>
              <div className="col bg-yellow text-center p-2 mx-2">MAYBANK</div>
              <div className="col bg-white text-red text-center p-2 mx-3">
                PUBLIC BANK
              </div>
              <div className="col bg-white bg-red text-blue text-center p-2 mx-3">
                HONG LEONG BANK
              </div>
              <div className="col bg-blue-light-1 text-blue text-center p-2 ml-3">
                RHB BANK
              </div>
            </div>
            <br />
            <div className="container text-center text-white">
              copyright 2020
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

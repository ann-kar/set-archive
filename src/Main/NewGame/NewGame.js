import React from "react";

import "./NewGame.scss";
import { SVG, GameCard, CheckButton, Timer } from "../../components";
import Victory from "./Victory";

class NewGame extends React.Component {

    state = {
            deck: [],
            active: [],
            win: false,
            extraSecs: 0
        };

    componentDidMount() {

        // I generate a new deck & the first 12 card ids, remove these cards from deck and save data to state

        let deck = this.generateDeck();
        const newState = {};

        for (let i = 1; i <= 12; i++) {

            let newCardId = deck[this.randomNum(deck)];
            newState["card" + i] = newCardId;
            deck = deck.filter((el) => (el !== newCardId));
        }

        newState.deck = deck;
        this.setState(newState);
    }

    generateDeck = () => {

        let deck = [];
        let cardParam = ["0", "1", "2"];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        deck.push(cardParam[i] + cardParam[j] + cardParam[k] + cardParam[l])
                    }
                }
            }
        }
        return deck
    };

    threeCardsHighlighted = () => {

        const set = this.checkIfSet(this.state.active);
        if (set) {
            this.generateNewCards();
        } else {
            setTimeout(() => this.setState({active: []}), 500);
        }
    };

    checkIfSet = (active) => {

        // logic: if the sum of all three ids will include only digits 0, 3, and 6, it is a set.

        const activeIdsAsNums = active.map(el => (Number(el)));
        const numToCheck = (activeIdsAsNums.reduce((a, b) => a + b)).toString().split("");
        const set = numToCheck.every(num => num % 3 === 0);

        return set;
    };

    checkAllCards = () => {

        let test = false;
        let set = [];

        // I get the values of all cards

        let visibleCards = Object.keys(this.state)
            .filter((key) => key.slice(0, 4) === "card")
            .filter((key) => this.state[key])
            .map((key) => this.state[key]);

        // I create an array of all possible three-card combinations to check

        let threesToCheck = [];

        for (let i = 0; i < visibleCards.length; i++) {
            for (let j = i + 1; j < visibleCards.length; j++) {
                for (let k = j + 1; k < visibleCards.length; k++) {
                    threesToCheck.push([visibleCards[i], visibleCards[j], visibleCards[k]])
                }
            }
        }

        // I check every combination with checkForSet

        for (const el of threesToCheck) {
            if (this.checkIfSet(el)) {
                set = el;
                test = true;
                break;
            }
        }

        return [test, set];
    };

    generateNewCards = () => {

        const newState = {};
        let deck = this.state.deck;
        let newCardId = "";

        // I identify the positions of active cards (to be replaced) by iterating through state:

        const activeCardLocs = [];

        for (let i = 0; i < 3; i++) {
            activeCardLocs.push(this.getKeyByValue(this.state, this.state.active[i]));
        }

        // I replace the cards.
        // If all locations are > 12 &, they all get replaced; else, only those <=12 get replaced.

        if (activeCardLocs.every(el => parseInt(el.substring(4)) > 12)) {
            for (let i = 0; i < 3; i++) {
                if (!deck.length) {
                    newCardId = undefined;
                    newState[activeCardLocs[i]] = newCardId;
                } else {
                    newCardId = deck[this.randomNum(deck)];
                    deck = deck.filter((el) => (el !== newCardId));
                    newState[activeCardLocs[i]] = newCardId;
                }
            }
        } else {
            for (let i = 0; i < 3; i++) {
                if (parseInt(activeCardLocs[i].substring(4)) <= 12) {
                    newCardId = deck[this.randomNum(deck)];
                    newState[activeCardLocs[i]] = newCardId;
                    deck = deck.filter(el => el !== newCardId);
                } else {
                    newCardId = undefined;
                    newState[activeCardLocs[i]] = newCardId;
                }
            }
        }

        newState.deck = deck;
        newState.active = [];

        // I update the state to include the new cards & update deck

        setTimeout(() => this.setState(newState, () => {
            if (!deck.length) {
                this.deckEmpty()
            }
        }), 500);
    };

    generateExtraCards = () => {

        const newState = {};
        let deck = this.state.deck;
        let extraCardLocations = [];

        if (Object.keys(this.state).some(key => parseInt(key.slice(4,6)) >= 13)) {
            extraCardLocations = ["card16", "card17", "card18"];
        } else {
            extraCardLocations = ["card13", "card14", "card15"];
        }

        // I generate three new ids

        for (let i = 0; i < 3; i++) {

            let newCardId;
            if (!deck.length) {
                newCardId = undefined;
                newState[extraCardLocations[i]] = newCardId;
            } else {
                newCardId = deck[this.randomNum(deck)];
                newState[extraCardLocations[i]] = newCardId;
                deck = deck.filter((el) => (el !== newCardId))
            }
        }

        newState.deck = deck;
        newState.active = [];

        // I update the state to include the new cards & update deck

        setTimeout(() => this.setState(newState, () => {
            if (!deck.length) {
                this.deckEmpty()
            }
        }), 500);
    };

    deckEmpty = () => {

        const results = this.checkAllCards();
        if (!results[0]) {
            this.setState({win: true});
        }
    };

    // clickhandlers:

    checkButton = () => {

        const results = this.checkAllCards();
        const test = results[0];
        const set = results[1];

        if (test) {

            this.setState({
                active: set,
                extraSecs: this.state.extraSecs + 3
            }, () => this.generateNewCards())

        } else {
            if (!this.state.deck.length) {
                this.setState({win: true})
            } else {
                this.generateExtraCards();
            }
        }
    };

    cardClickHandler = (e) => {

        if (!this.state.win) {

            // I add the id to state.active or remove it

            const {active} = this.state;
            const cardIndex = active.findIndex(el => el === e.target.id);

            if (cardIndex < 0)  {
                active.push(e.target.id);
            } else {
                active.splice(cardIndex, 1);
            }

            // If the active array has three elements, I check if it's a set

            if (active.length === 3) {
                this.setState({active: active}, () => this.threeCardsHighlighted());
            } else {
                this.setState({active: active});
            }
        }
    };

    // helpers:

    randomNum = (deck) => {
        return Math.floor(Math.random() * deck.length);
    };

    getKeyByValue = (object, value) => {
        return Object.keys(object).find(key => object[key] === value);
    };

    render() {

        let cards = Array(18).fill("0");

        if (Object.keys(this.state).some(key => key.slice(0,4) === "card")) {

            cards = cards.map((card, i) => <GameCard
                    key={`key${i}`}
                    id={this.state[`card${i + 1}`]}
                    active={this.state.active}
                    cardClickHandler={this.cardClickHandler}/>);
        }

        return (
            <div className="NewGame fade-in">
                <SVG/>
                {cards}
                {this.state.win ? <Victory/> : <CheckButton checkButton={this.checkButton}/>}
                <Timer win={this.state.win} extraSecs={this.state.extraSecs}/>
            </div>
        )
    }
}

export default NewGame;
import React, { Component } from "react";
import Button from "../components/Button";
import Picture from "../components/Picture";
import data from "../data.json";

class Drawing extends Component {
    state = {
        data,
        dice: [],
        counter: 0,
        rolls: 0,
        location: 0,
        turn: 12,
        total: 0,
        scores: [
            {
                score: 0,
                entered: false,
                value: 1
            },
            {
                score: 0,
                entered: false,
                value: 2
            },
            {
                score: 0,
                entered: false,
                value: 3
            },
            {
                score: 0,
                entered: false,
                value: 4
            },
            {
                score: 0,
                entered: false,
                value: 5
            },
            {
                score: 0,
                entered: false,
                value: 6
            },
            {
                score: 0,
                entered: false,
                value: 7
            },
            {
                score: 0,
                entered: false,
                value: 8
            },
            {
                score: 0,
                entered: false,
                value: 9
            },
            {
                score: 0,
                entered: false,
                value: 10
            },
            {
                score: 0,
                entered: false,
                value: 11
            },
            {
                score: 0,
                entered: false,
                value: 12
            },
        ]
    }



    // DICE LOGIC

    // myDice checks turn and roll is approved then rolls dice
    myDice = (data) => {
        let turn = this.state.turn;
        let rolls = this.state.rolls;
        let i = 0;
        let myDice = this.checkHold();
        let x = 5 - myDice.length;
        let counter = this.state.counter;
        if (rolls < 3 && turn > 0) {
            while (i < x) {
                let num = (Math.floor(Math.random() * 6) + 1);
                counter++;
                i++;
                for (let e of data) {
                    if (e.value === num) {
                        let empty = {};
                        e.id = counter
                        myDice.push(Object.assign(empty, e));
                        break
                    }
                }
            }
            this.setState({
                dice: myDice,
                rolls: (rolls + 1),
                counter: counter
            });
        } else if (rolls === 3 && turn < 0) {
            alert("You have no rolls left!");
        } else {
            alert("Game Over! Click restart to play again!")
        }
    }

    // checkHold updates dice to keep
    checkHold = () => {
        let data = this.state.dice;
        let hold = [];
        for (let e of data) {
            if (e.clicked === true) {
                hold.push(e);
            }
        }
        return hold;

    }

    // handleDiceClick updates if nice is saved
    handleDiceClick = id => {
        let data = this.state.dice;
        for (let e of data) {
            if (e.id === id) {
                if (e.clicked === false) {
                    console.log(e);
                    e.clicked = true;
                    break
                } else {
                    e.clicked = false;
                    break
                }
            }
        }
        this.setState({
            dice: data
        });
    }

    //  cycleScores
    cycleScores = () => {
        let loca = this.state.location;
        let scores = this.state.scores;
        let box = scores[loca];
        console.log(loca);
        console.log(scores);
        console.log(box);
        if (box.entered === false) {
            console.log("cycleScores found where to update");
        } else if (box.entered === true) {
            loca++;
        } else {
            console.log("Error on finding entered in cycleScores");
        }

    }


    selectScore = () => {
        console.log("PM");
    }



    // rest for new game
    reset = () => {
        this.setState({
            dice: [],
            counter: 0,
            rolls: 0,
            maybe: 0,
            score: 0,
            turn: 12
        })
    }



    render() {
        return (
            <div id="body" className="container-fluid">
                <section className="row d-flex justify-content-center">
                    <section className="col-8">
                        <table className="table table-bordered">
                            <thead className="row justify-content-center">

                                Score Board

                            </thead>
                            <tbody>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3"> Ones</td>
                                    <td className="col-2">{this.state.scores[0].score}</td>
                                    <td className="col-3">3x</td>
                                    <td className="col-2">{this.state.scores[6].score}</td>
                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Twoes </td>
                                    <td className="col-2">{this.state.scores[1].score}</td>
                                    <td className="col-3">Four of a Kind </td>
                                    <td className="col-2">{this.state.scores[7].score}</td>

                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Threes </td>
                                    <td className="col-2">{this.state.scores[2].score}</td>
                                    <td className="col-3">Full House </td>
                                    <td className="col-2">{this.state.scores[8].score}</td>
                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Fours </td>
                                    <td className="col-2">{this.state.scores[3].score}</td>
                                    <td className="col-3">Low Straight </td>
                                    <td className="col-2">{this.state.scores[9].score}</td>

                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Fives </td>
                                    <td className="col-2">{this.state.scores[4].score}</td>
                                    <td className="col-3">High Straight </td>
                                    <td className="col-2">{this.state.scores[10].score}</td>
                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Sixes </td>
                                    <td className="col-2">{this.state.scores[5].score}</td>
                                    <td className="col-3">Yahtzee </td>
                                    <td className="col-2">{this.state.scores[11].score}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </section>
                <section className="row">
                    <section className="col">
                        {this.state.dice.map(item => (
                            <Picture
                                key={item.id}
                                id={item.id}
                                handleClick={this.handleDiceClick}
                                image={item.image}
                            />
                        ))}
                    </section>
                </section>

                <section className="row">
                    <section className="col">
                        <h2> Score: {this.state.total} </h2>
                        <h3> Rolls Used: {this.state.rolls}</h3>
                    </section>
                </section>
                <section className="row">
                    <section className="col" id="intoButton">
                        {/* <!-- Store Button --> */}
                        <Button
                            click={this.myDice.bind(this, data)}
                            text="Roll Dice"
                        ></Button>
                        <Button
                            click={this.cycleScores}
                            text="Cycle Scores"
                        ></Button>
                        <Button
                            click={this.selectScore}
                            text="Select Score"
                        ></Button>

                        <Button
                            click={this.reset}
                            text="Reset"
                        ></Button>
                    </section>
                </section>

            </div >
        );
    }
}

export default Drawing;
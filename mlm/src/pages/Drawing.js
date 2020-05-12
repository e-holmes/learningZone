import React, { Component } from "react";
import Button from "../components/Button";
import Picture from "../components/Picture";
import data from "../data.json";
import leftScores from "../leftScores.json";
import rightScores from "../rightScores.json"
import Tray from "../components/Tray";

class Drawing extends Component {
    state = {
        data,
        dice: [],
        counter: 0,
        rolls: 0,
        turn: 12,
        total: 0,
        location: 1,
        leftScores,
        rightScores
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
                    e.class ="col-2 border";
                    break
                } else {
                    e.clicked = false;
                    e.class ="col-2";
                    break
                }
            }
        }
        this.setState({
            dice: data
        });
    }

    cycleScores = () => {
        let loca = this.state.location;
        let leftScores = this.state.leftScores;
        let rightScores = this.state.rightScores;
        if (loca < 7) {
            for (let e of leftScores) {
                if (e.value === loca) {
                    if (e.entered === false) {
                        loca = loca + 1;
                        console.log(loca);
                        this.setState({
                            e: this.checkMyDice(e),
                            location: loca
                        })
                        console.log("cycleScores found where to update");
                        break
                    } else if (e.entered === true) {
                        loca = loca + 1;
                        this.setState({
                            location: loca
                        })
                        console.log("No matching moving to next.");
                    } else {
                        console.log("Error on finding entered in leftScores");
                    }
                }
            }
        } else if (loca > 7) {
            for (let e of rightScores) {
                if (e.value === loca) {
                    if (e.entered === false) {
                        console.log("Not Programmed Yet");
                    } else if (e.entered === true) {
                        console.log("Not Programmed Yet");
                    } else {
                        console.log("Error on finding entered in rightScores")
                    }
                }
            }
        } else {
            console.log("Error finding location for scoring.")
        }
    }

    checkMyDice = (box) => {
        let myDice = this.state.dice;
        let counter = 0;
        if (box.value < 7) {
            for (let e of myDice) {
                if (box.value === e.value) {
                    counter = counter + e.value;
                }
            }
            box.score = counter;
            return box;
        }
    }


    selectScore = () => {
        console.log("PM");
    }



    // rest for new game
    reset = () => {
        this.resetScores();
        this.setState({
            dice: [],
            counter: 0,
            rolls: 0,
            maybe: 0,
            score: 0,
            turn: 12
        })
    }

    resetScores = () => {
        let scores = this.state.leftScores;
        for (let e of scores) {
            if (e.score > 0) {
                e.score = 0;
                this.setState({
                    e: e
                })
            }
        }
    }




    render() {
        return (
            <div id="body" className="container-fluid">
                <section className="row d-flex justify-content-center">
                    <section className="col-10">
                        <section className="row">

                            <table className="col-5 table">
                                <thead className="row justify-content-center">
                                </thead>
                                <tbody>
                                    {this.state.leftScores.map(item => (
                                        <Tray
                                            key={item.value}
                                            text={item.text}
                                            score={item.score}
                                        />
                                    ))}
                                </tbody>
                            </table>
                            <table className="col-5 table">
                                <thead className="row justify-content-center">
                                </thead>
                                <tbody>
                                    {this.state.rightScores.map(item => (
                                        <Tray
                                            key={item.value}
                                            text={item.text}
                                            score={item.score}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </section>
                </section>
                <section className="row">
                    {this.state.dice.map(item => (
                        <Picture
                            class={item.class}
                            key={item.id}
                            id={item.id}
                            handleClick={this.handleDiceClick}
                            image={item.image}
                        />
                    ))}
                </section>


                <section className="row d-flex justify-content-center">
                    <section className="col-3">
                        <h2> Score: {this.state.total} </h2>
                    </section>
                    <section className="col-3">
                        <h3> Rolls Used: {this.state.rolls}</h3>
                    </section>
                </section>
                <section className="row d-flex justify-content-center">
                    {/* <!-- Store Button --> */}
                    <Button
                        click={this.myDice.bind(this, data)}
                        text="Roll Dice"
                    ></Button>
                    <section className="col-1"></section>
                    <Button
                        click={this.cycleScores}
                        text="Cycle Scores"
                    ></Button>
                    <section className="col-1"></section>
                    <Button
                        click={this.selectScore}
                        text="Select Score"
                    ></Button>
                    <section className="col-1"></section>
                    <Button
                        click={this.reset}
                        text="Reset"
                    ></Button>
                </section>
            </div >
        );
    }
}

export default Drawing;
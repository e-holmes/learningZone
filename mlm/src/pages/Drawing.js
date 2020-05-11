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
        turn:12,
        total: 0,
        scores:{
            one:{
                score:0,
                entered: false,
                value:1
            },
            two:{
                score:0,
                entered: false,
                value:2
            },
            three:{
                score:0,
                entered: false,
                value:3
            },
            four:{
                score:0,
                entered: false,
                value:4
            },
            five:{
                score:0,
                entered: false,
                value:5
            },
            six:{
                score:0,
                entered: false,
                value:6
            },
            tripple:{
                score:0,
                entered: false,
                value:7
            },
            double:{
                score:0,
                entered: false,
                value:8
            },
            house:{
                score:0,
                entered: false,
                value:9
            },
            low:{
                score:0,
                entered: false,
                value:10
            },
            high:{
                score:0,
                entered: false,
                value:11
            },
            yahtzee:{
                score:0,
                entered: false,
                value:12
            }
        }
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
        if (rolls < 3 && turn>0) {
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
        } else if(rolls===3 && turn<0) {
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
                if(e.clicked===false){
                console.log(e);
                e.clicked = true;
                break
                }else{
                    e.clicked=false;
                    break
                }
            }
        }
        this.setState({
            dice: data
        });
    }




    reset = () => {
        this.setState({
            dice: [],
            counter: 0,
            rolls: 0,
            maybe: 0,
            score: 0,
        })
    }





    selectScore = () => {
        console.log("PM");
    }

    render() {
        return (
            <div id="body" className="container-fluid">
                <section className="row d-flex justify-content-center">
                    <section className="col-8">
                        <table className="table table-bordered">
                            <thead className="row justify-content-center">

                                <h2>Score Board</h2>

                            </thead>
                            <tbody>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3"> Ones</td>
                                    <td className="col-2">{this.state.scores.one.score}</td>
                                    <td className="col-3">3x</td>
                                    <td className="col-2">{this.state.scores.tripple.score}</td>
                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Twoes </td>
                                    <td className="col-2">{this.state.scores.two.score}</td>
                                    <td className="col-3">Four of a Kind </td>
                                    <td className="col-2">{this.state.scores.double.score}</td>

                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Threes </td>
                                    <td className="col-2">{this.state.scores.three.score}</td>
                                    <td className="col-3">Full House </td>
                                    <td className="col-2">{this.state.scores.house.score}</td>
                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Fours </td>
                                    <td className="col-2">{this.state.scores.four.score}</td>
                                    <td className="col-3">Low Straight </td>
                                    <td className="col-2">{this.state.scores.low.score}</td>

                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Fives </td>
                                    <td className="col-2">{this.state.scores.five.score}</td>
                                    <td className="col-3">High Straight </td>
                                    <td className="col-2">{this.state.scores.high.score}</td>
                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Sixes </td>
                                    <td className="col-2">{this.state.scores.six.score}</td>
                                    <td className="col-3">Yahtzee </td>
                                    <td className="col-2">{this.state.scores.yahtzee.score}</td>
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
                            click={this.cycleScores()}
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
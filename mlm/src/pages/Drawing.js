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
        ones: { score: -1, entered: false },
        tripple: { score: -1, entered: false },
        scores:{
            ones:{
                score:-1,
                entered: false
            }
        }
        total: 0
    }

    // Rolls the dice if able to and populates dice
    myDice = (data) => {
        let rolls = this.state.rolls;
        let i = 0;
        let myDice = this.checkHold();
        let x = 5 - myDice.length;
        let counter = this.state.counter;
        if (rolls < 3) {
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
        } else {
            alert("You have no rolls left!");
        }
    }

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

    handleDiceClick = id => {
        let data = this.state.dice;
        for (let e of data) {
            if (e.id === id) {
                console.log(e);
                e.clicked = true;
                break
            }
        }
        this.setState({
            dice: data
        });
    }

    checkOnes = () => {
        let data = this.state.dice;
        let ones = this.state.ones;
        let holdScore;

        if (ones.entered === false) {
            for (let e of data) {
                if (e.value === 1) {
                    holdScore= holdScore +1;
                }
            }
        }
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
                                    <td className="col-3" onClick={this.checkOnes()}>
                                        Ones
                                    </td>
                                    <td className="col-2">{this.state.ones.score}</td>
                                    <td className="col-3">
                                        3x
                                </td>
                                    <td className="col-2">{this.state.tripple.score}</td>
                                </tr>
                                {/* <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Twoes </td>
                                    <td className="col-2">{this.state.score[1]}</td>
                                    <td className="col-3">Four of a Kind </td>
                                    <td className="col-2">{this.state.score[7]}</td>

                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Threes </td>
                                    <td className="col-2">{this.state.score[2]}</td>
                                    <td className="col-3">Full House </td>
                                    <td className="col-2">{this.state.score[8]}</td>
                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Fours </td>
                                    <td className="col-2">{this.state.score[3]}</td>
                                    <td className="col-3">Low Straight </td>
                                    <td className="col-2">{this.state.score[9]}</td>

                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Fives </td>
                                    <td className="col-2">{this.state.score[4]}</td>
                                    <td className="col-3">High Straight </td>
                                    <td className="col-2">{this.state.score[10]}</td>
                                </tr>
                                <tr className="row d-flex justify-content-center">
                                    <td className="col-3">Sixes </td>
                                    <td className="col-2">{this.state.score[5]}</td>
                                    <td className="col-3">Yahtzee </td>
                                    <td className="col-2">{this.state.score[11]}</td>
                                </tr> */}
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
                            click={this.leftClick()}
                            text="View Scores"
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
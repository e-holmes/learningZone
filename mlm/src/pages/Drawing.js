import React, { Component } from "react";
import Button from "../components/Button";
import Picture from "../components/Picture";
import data from "../data.json";

class Drawing extends Component {
    state = {
        data,
        dice: data,
        rolls: 0,
        maybe: 0,
        score: 0,
        one:0,
        two:0,
        
    }

    // returns random number
    rollDice = () => {
        var num = (Math.floor(Math.random() * 7) + 1);
        // console.log(num);
        return num;
    }
    //  
    myDice = (data) => {
        let k = this.state.rolls;
        let i = 0;
        var myDice = [];
        console.log(myDice);
        let result = true;
        while (i < 5) {
            let num = (Math.floor(Math.random() * 7) + 1);
            data[0].id === num ? myDice.push(data[0])
                : data[1].id === num ? myDice.push(data[1])
                    : data[2].id === num ? myDice.push(data[2])
                        : data[3].id === num ? myDice.push(data[3])
                            : data[4].id === num ? myDice.push(data[4])
                                : data[5].id === num ? myDice.push(data[5])
                                    : result = false;
            result ? console.log(myDice) : console.log(result);
            myDice[i].id = i;
            i++;
        }

        // this.updateID(myDice);

        this.setState({
            dice: myDice,
            rolls: (k + 1)
        });
    }

    // updateID = (myDice) => {
    //     myDice[0].id = 1;
    //     myDice[1].id = 2;
    //     myDice[2].id = 3;
    //     console.log(myDice[0]);
    //     console.log(myDice[1]);
    //     console.log(myDice[2]);
    // }


    selectScore = () => {
        console.log("PM");
    }

    render() {
        return (
            <div id="body" className="container-fluid">
                <section id="intoHeader" className="row d-flex justify-content-center">
                    <h1 id="win" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                    </h1>
                </section>

                <section className="row d-flex justify-content-center">
                    <section className="col">
                        {this.state.dice.map(item => (
                            <Picture
                                key={item.id}
                                id={item.id}
                                handleClick={this.handleItemClick}
                                image={item.image}
                            />
                        ))}
                    </section>
                    <section className="col">
                        <section className="row">
                            <h1>Upper Section</h1>
                            <p>
                                Ones: {this.state.one}
                                Twos: {this.state.two}
                                Threes: {this.state.three}
                                Fours: {this.state.four}
                                Five: {this.state.five}
                                Six: {this.state.six}
                            </p>
                        </section>
                        <section className="row">
                            <h1>Lower Section</h1>
                            <p>
                                Three of a Kind: {this.state.triple}
                                Four of a Kind: {this.state.double}
                                Full House: {this.state.house}
                                Low Straight: {this.state.low}
                                High Straight: {this.state.high}
                                Yahtzee: {this.state.yahtzee}
                                Chance: {this.state.chance}
                            </p>
                        </section>
                    </section>
                </section>

                <section className="row">
                    <section className="col">
                        <h2> Score: {this.state.score} </h2>
                        <h3> Score: {this.state.maybe}</h3>
                        <h3> Rolls Used: {this.state.rolls}</h3>
                    </section>

                    <section className="col" id="intoButton">
                        {/* <!-- Store Button --> */}
                        <Button
                            click={this.myDice.bind(this, data)}
                            text="Roll Dice"
                        ></Button>
                        <Button
                            click={this.selectScore}
                            text="Select Score"
                        ></Button>
                    </section>
                </section>

            </div>
        );
    }
}

export default Drawing;
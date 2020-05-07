import React, { Component } from "react";
import Button from "../components/Button";
import Picture from "../components/Picture";
import data from"../data.json";

class Drawing extends Component {
    state = {
        data,
        dice: [],
    }

    rollDice = () => {
        var i;
        for (i = 0; i < 5; i++) {
            var num = (Math.floor(Math.random() * 7))
            this.state.dice.push(num);
        }

        console.log("Roll Dice");
        console.log(this.state.dice);
    }

    selectScore = () => {
        console.log("Select Score");
    }

    render() {
        return (
            <div id="body" className="container-fluid">
                <section id="intoHeader" className="row d-flex justify-content-center">
                    <h1 id="win" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                    </h1>
                </section>

                <section className="row d-flex justify-content-center">
                    <h1 id="myDice">
                    {this.state.data.map(item => (
                        <Picture
                            key={item.id}
                            id={item.id}
                            update={!this.state.score && this.state.topScore}
                            handleClick={this.handleItemClick}
                            image={item.image}
                        />
                    ))}
                    </h1>
                </section>

                <section id="intoButton">
                    {/* <!-- Store Button --> */}
                    <Button
                        click={this.rollDice}
                        text="Roll Dice"
                    ></Button>
                    <Button
                        click={this.selectScore}
                        text="Select Score"
                    ></Button>
                </section>

            </div>
        );
    }
}

export default Drawing;
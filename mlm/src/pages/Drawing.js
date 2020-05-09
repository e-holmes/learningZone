import React, { Component } from "react";
import Button from "../components/Button";
import Picture from "../components/Picture";
import data from "../data.json";

class Drawing extends Component {
    state = {
        data,
        dice: data,
    }

    // returns random number
    rollDice = () => {
        var num = (Math.floor(Math.random() * 7) + 1);
        // console.log(num);
        return num;
    }
    //  
    myDice = (data) => {
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
            i++;
        }
        this.setState({
            dice: myDice
        });
    }


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
                    {this.state.dice.map(item => (
                        <Picture
                            key={item.id}
                            id={item.id}
                            image={item.image}
                        />
                    ))}
                </section>

                <section id="intoButton">
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

            </div>
        );
    }
}

export default Drawing;
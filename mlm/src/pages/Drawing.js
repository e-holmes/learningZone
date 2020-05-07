import React, { Component } from "react";
import Button from "../components/Button";
import Picture from "../components/Picture";
import data from "../data.json";

class Drawing extends Component {
    state = {
        data,
        dice: []
    }


    rollDice = (data) => {
        console.log("Data:");
        console.log(data);
        var i;
        let post = "empty";
        var k = 0;
        for (i = 0; i < 5; i++) {
            var num = (Math.floor(Math.random() * 7));
            console.log(num);
            while (k < data.length - 1) {
                console.log("While loop: " +k)
                if (data[i].id === num) {
                    console.log("id num match on " +k)
                    k=k+(data.length-1-k);
                }else{
                    k++;
                }
            }
            console.log("Roll Dice");
        }



        console.log(post);
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
                    {/* {this.state.data.map(item => (
                        <Picture
                            key={item.id}
                            id={item.id}
                            image={item.image}
                        />
                    ))} */}
                </section>

                <section id="intoButton">
                    {/* <!-- Store Button --> */}
                    <Button
                        click={this.rollDice.bind(this, data)}
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
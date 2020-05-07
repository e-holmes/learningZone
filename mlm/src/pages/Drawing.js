import React, { Component } from "react";
import Button from "../components/Button";

class Drawing extends Component {
    state={
     dice:[]
    }

    drawAMStudent = () =>{
        var i;
        for(i=0; i<5; i++){
            var num =(Math.floor(Math.random()*7))
            this.state.dice.push(num);
        }
        $("myDice").append(
            "Dice 1: " 
            +this.state.dice[0] 
            +"  Dice 2: "
            +this.state.dice[1] 
            +"  Dice 3: "
            +this.state.dice[2] 
            +"  Dice 4: "
            +this.state.dice[3] 
            +"  Dice 5: "
            +this.state.dice[4] 
            
            )
        console.log("Roll Dice");
        console.log(this.state.dice);
    }

    drawPMStudent = () =>{
        console.log("PM");
    }

    render() {
        return (
            <div id="body" className="container-fluid">
                <section id="intoHeader" className="row d-flex justify-content-center">
                    <h1 id="win" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        
                    </h1>
                </section>

                <section id="myDice" className="row d-flex justify-content-center">

                </section>

                <section id="intoButton">
                    {/* <!-- Store Button --> */}
                    <Button
                        click={this.drawAMStudent}
                        text="Roll Dice"
                    ></Button>
                    <Button
                         click={this.drawPMStudent}
                        text="Select Score"
                    ></Button>
                </section>

            </div>
        );
    }
}

export default Drawing;
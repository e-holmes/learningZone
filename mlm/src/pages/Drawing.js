import React, { Component } from "react";
import Button from "../components/Button";
import Picture from "../components/Picture";
import data from "../data.json";

class Drawing extends Component {
    state = {
        data,
        dice: []
    }

    // returns random number
    rollDice = () => {
        var num = (Math.floor(Math.random() * 7));
        // console.log(num);
        return num;
    }

    // look for matching image
    findImg = (data, num) => {
        var k = 0;
        var result = null;
        var found;
        console.log("findImg is running" +result);
        while (result === null) {
            found = this.myfunction(data, k, num);
            console.log("var found in findImg: " +found);
            found ? result = data[k] : (k = k + 0);
            k++;
        }
        return result;
    }

    myDice = (data) => {
        var i=0;
        var myDice = [];
        console.log(myDice);
        while (i<5){
            var num = this.rollDice();
            console.log("Num in function myDice: " +num);
            var found = this.findImg(data, num);
            found ? (myDice.push(data[i])) : (i=i+0);
            i++;
        }
        // console.log(this.myDice[0]);
    }



    myfunction = (data, i, num) => {
        console.log("myfucntion is running");
        console.log(i);
        console.log("data item id: "+data[i].id)
        var hold = (data[i]);
        var pic = (hold.id);
        console.log(pic)
        console.log("num: "+num);
        // return true;
        return ((pic === num) ? true : false);
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
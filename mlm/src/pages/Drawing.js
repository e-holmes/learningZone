import React, { Component } from "react";
import Button from "../components/Button";

class Drawing extends Component {

    drawAMStudent = () =>{
        console.log("AM");
    }

    drawPMStudent = () =>{
        console.log("PM");
    }

    render() {
        return (
            <div id="body" className="container-fluid">
                <section id="intoHeader" className="row d-flex justify-content-center">
                    <h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {this.props.winner}
                    </h1>
                </section>

                <section id="intoButton">
                    {/* <!-- Store Button --> */}
                    <Button
                        click={this.drawAMStudent}
                        text="AM Drawing"
                    ></Button>
                    <Button
                         click={this.drawPMStudent}
                        text="PM Drawing"
                    ></Button>
                </section>

            </div>
        );
    }
}

export default Drawing;
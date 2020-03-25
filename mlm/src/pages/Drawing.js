import React, { Component } from "react";
import Button from "../components/Button";
import Card from "../components/Card"

class Drawing extends Component {

    // Handles updating component state when the user types into the input field

    render() {
        return (
            <div id="body" className="container-fluid">
                <section id="intoHeader" className="row d-flex justify-content-center">
                    <h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12"></h1>
                </section>
                
                <section id="intoButton">
                    {/* <!-- Store Button --> */}
                    <Card></Card>
                    <Button></Button>
                </section>

            </div>
        );
    }
}

export default Drawing;
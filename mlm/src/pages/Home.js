import React, { Component } from "react";
import PageButton from "../components/PageButton";
import Card from "../components/Card";


class Home extends Component {

    // Handles updating component state when the user types into the input field

    render() {
        return (
            <div id="body" className="container-fluid">
                <section id="intoHeader" className="row d-flex justify-content-center">
                    <h1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">Put in your Magical Learning Moment!</h1>
                </section>
                
                <section id="intoButton">
                    {/* <!-- Store Button --> */}
                    <Card></Card>
                    <PageButton></PageButton>
                </section>

            </div>
        );
    }
}

export default Home;
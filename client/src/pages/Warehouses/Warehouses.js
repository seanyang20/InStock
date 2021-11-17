import { Component, useEffect, useState } from "react";
import axios from "axios";

export default class Home extends Component {
    

    render () {
        return (
            <main className="warehouse">
                <div className="warehouse__heading">
                    <figure className="warehouse__backarrow"></figure>
                    <div className="warehouse__title"></div>
                    <button className="warehouse__edit-button"></button>
                </div>    
            </main>
        )
    }
}


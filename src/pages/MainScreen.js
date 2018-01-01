import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import Menu from "../components/Menu"

class MainScreen extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <Menu />
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(MainScreen)
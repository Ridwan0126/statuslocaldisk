import React, { Component } from 'react';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    buttonHandler = () => {
        this.props.history.push("/list")

        // fetch(url, {
        //     method: "POST",
        //     body: [Object][Object]
        // })
        //     .then()
    }

    componentDidMount() {
        // cart
        // messages
        // chat
        // recommendation
    }

    render() {
        console.log(this.props);
        const { idUser } = this.props.match.params
        return (
            <>
                <h1>ini register {idUser}</h1>
                <button onClick={this.buttonHandler} >Go To List</button>
            </>
        );
    }
}

export default Register;
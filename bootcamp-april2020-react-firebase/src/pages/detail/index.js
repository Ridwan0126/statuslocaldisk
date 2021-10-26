import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom"

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props);
        if (!this.props.isLogedIn)
            return <Redirect to="/list" />

        return (
            <h1>ini detail, {this.props.userLogedIn}</h1>
        );
    }
}

const mapStateToProps = state => ({
    isLogedIn: state.Auth.statusLogin,
    userLogedIn: state.Auth.username
})

// export default Detail;
export default connect(mapStateToProps)(Detail);
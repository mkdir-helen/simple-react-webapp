import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" id="City..." />
                <input type="text" name="country" id="Country..." />
                <button>Get weather</button>
            </form>
        )
    }
}

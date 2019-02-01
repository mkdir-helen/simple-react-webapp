import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city}
                {this.props.country}
                {this.props.temperature}
                {this.props.humidity}
                {this.props.description}
            </div>
        )
    }
}

import React, { Component } from 'react'

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" id="City..." />
        <input type="text" name="country" id="Country..." />
        <button>Get weather</button>
    </form>
);


export default Form;

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        this.setState({
            name,
            email,
            password
        })

    }

    render() {
        return (
                <div className='function2'>
                    <h2>Class Form</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder="Enter name" /> <br />
                        <br />
                        <input type="email" name="email" placeholder="Enter Email" /> <br />
                        <br />
                        <input type="password" name="password" placeholder="password" />
                        <br />
                        <br />
                        <button>Submit</button>
                    </form>
                <div className='data'>
                <h3>{this.state.name}</h3>
                <h3>{this.state.email}</h3>
                <h3>{this.state.password}</h3>
                </div>
            </div>
            
        )
    }
}

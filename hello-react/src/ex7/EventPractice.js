import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: ''
    }

    /*  constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.handleClick = this.handleClick.bind(this);
      }
  
    handleChange(e) {
        this.setState({
            message: e.target.value
        });
    }
    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    */
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1> Event Test </h1>
                <input
                    type="text"
                    name="message"
                    placeholder="any..."
                    value={this.state.message}
                    onChange={this.handleChange}
                >
                </input>
                <button onClick={this.handleClick}> Ok </button>
            </div>
        );
    }
}

export default EventPractice;

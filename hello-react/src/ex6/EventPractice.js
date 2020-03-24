import React, { Component } from 'react';

class EventParctice extends Component {
    state = {
        message: ''
    }

    render() {
        return (
            <div>
                <h1> Test </h1>
                <input
                    type="text"
                    name="message"
                    placeholder="any.."
                    vlaue={this.state.message}
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({ message: '' })
                    }
                }>
                    Ok
                </button>
            </div>
        );
    }
}

export default EventParctice;

import React, { Component } from "react";

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    state = {
        count: 0
    };
    // console.log("I am in the CONSTRUCTOR of the Counter.js.");
    // }

    // this will run after the constructor but before the render
    UNSAFE_componentWillMount() {
        console.log("I will mount in Counter.js.");
    }

    counter = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            };
        });
    };

    // this gets called after the component renders
    componentDidMount() {
        this.timer = setInterval(this.counter, 100);
        console.log("Component DID MOUNT.");
    }

    // this gets called after the the state has changed
    componentDidUpdate(prevProps, prevState) {
        console.log("Component Counter UPDATED from: ", prevState.count);
    }

    // this will get called before the component unmounts
    componentWillUnmount() {
        console.log("======== Component COUNTER is UNMOUNTED! ========");
        clearInterval(this.timer); // !!!
    }

    render() {
        console.log("I am in the RENDER of the Counter.");
        return (
            <div>
                <h1> {this.state.count}</h1>
            </div>
        );
    }
}

export default Counter;

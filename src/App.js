import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";

class App extends Component {
    // constructor(props) {
    //     super(props);
    state = {
        // isRunning: true,
        linkRedirect: false
    };
    //     console.log(">>>>> I am in the CONSTRUCTOR of the App.js. <<<<<");
    // }

    UNSAFE_componentWillMount() {
        console.log("The Render will run after this message in App.js");
    }

    // stopCounter = () => {
    //     this.setState({ ...this.state, isRunning: false });
    // };

    // render() {
    //     console.log("I am in RENDER of the App.js.");
    //     return this.state.isRunning ? (
    //         <div className="App">
    //             <h2>
    //                 Clicking this button will destroy the Counter component and
    //                 clear the state.
    //             </h2>
    //             <button onClick={this.stopCounter}>Stop the counter</button>

    //             <Counter />
    //         </div>
    //     ) : (
    //         <div className="App">
    //             <header className="App-header">
    //                 <img src={logo} className="App-logo" alt="logo" />
    //                 <p>
    //                     Edit <code>src/App.js</code> and save to reload.
    //                 </p>
    //                 <a
    //                     className="App-link"
    //                     href="https://reactjs.org"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                 >
    //                     Learn React
    //                 </a>
    //             </header>
    //         </div>
    //     );

    changeLinks = () => {
        this.setState({
            ...this.state,
            linkRedirect: !this.state.linkRedirect
        });
    };

    render() {
        return (
            <div className="App">
                <NavBar
                    linkChange={this.changeLinks}
                    changeLinkStatus={this.state.linkRedirect}
                />

                <Switch>
                    {/* this method allows for only one prop to be passed */}
                    <Route exact path="/" component={Home} />

                    {/* this is the method to be able to pass multiple props */}
                    <Route
                        exact
                        path="/about"
                        render={props =>
                            this.state.linkRedirect ? (
                                <Redirect to="/" />
                            ) : (
                                <About
                                    {...props}
                                    theUserName={"Marcos"}
                                    theUserStatus={"Chillin'"}
                                />
                            )
                        }
                    />

                    <Route exact path="/about/:blah" component={About} />
                </Switch>
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { generateRobots } from "./robots";
import SearchBox from './SearchBox';
import './App.css';

//generate how much robots:
let robots = generateRobots(100);

// const App = () => { 
//     return (
//     <div className="tc">
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <Cardlist robots={robots}/>
//     </div>
//     );
// }


class App extends Component {
    constructor () {
        super();
        this.state = {
            totalRobot : 0,
            robots: [],
            searchfield: ''    
        }
    }

// the short line
componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}));

    this.setState({robots:robots});
}

// the long line
// componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             return response.json();
//         })
//         .then(users => {
//             this.setState({robots: users});
//          })
// }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })


        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Cardlist robots={filteredRobots}  />
            </div>
            );
            }
        }

export default App;
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
            robots: robots,
            searchfield: ''    
        }
    }

    onSearchChange = (event) => {
      
        this.setState({searchfield: event.target.value});
    }

    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.fullName.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Cardlist robots={filteredRobots}/>
            </div>
            );
    }
}

export default App;
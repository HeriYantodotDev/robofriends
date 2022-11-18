import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { generateRobots } from "./robots";
import SearchBox from './SearchBox';

//generate how much robots:
let robots = generateRobots(2);

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

    onSearchChange(event) {
        console.log(event.target.value);
    }

    render () {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Cardlist robots={this.state.robots}/>
            </div>
            );
    }
}

export default App;
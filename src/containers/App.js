import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import generateRobots from "../robots";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import './App.css'
import InputBox from "../components/InputBox";
import ErrorBoundry from "../components/ErrorBoundry";

//generate how much robots:

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

    this.setState({robots: []});
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

    onClickGenerateRobots = (event) => {
        // console.log(event.target.parentElement.parentElement.children[2].children[0].value);
        event.target.parentElement.parentElement.children[2].children[0].value = '';
        this.setState({searchfield:event.target.parentElement.parentElement.children[2].children[0].value });
        if (event.target.parentElement.children[1].value > 200 ) {
            alert("Can't have more than 200 robots!");
            event.target.parentElement.children[1].value = 0;
            this.setState({robots:[]})
        } else {
            this.setState({robots: generateRobots.generate(event.target.parentElement.children[1].value)});
        }
    }



    render () {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
        })


        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <InputBox clickGenerate = {this.onClickGenerateRobots} checkRobot = {this.checkNumberofRobots}/>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredRobots}  />
                    </ErrorBoundry>
                </Scroll>
            </div>
            );
            }
        }

export default App;
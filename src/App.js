import React, { Component } from 'react';
import CardList from './CardList.js';
import Scroll from './Scroll.js'
import Searchbox from './Searchbox.js';
import ErrorBoundry from './ErrorBoundry';
import { render } from '@testing-library/react';


class App  extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        }).then(users=> {
           return this.setState({robots: users})
        })
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
      }
   render(){
    const {robots, searchField} = this.state;
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    }) 
    console.log(filteredRobots) 
    if(robots.length === 0) {
       return <h1>Loading</h1>;
    } else {

    
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <Searchbox SearchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
        <CardList robots={filteredRobots} />
        </ErrorBoundry>
        </Scroll>
        </div> 
        );
   }
}
}

export default App;
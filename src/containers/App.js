import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';  
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css'; 

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

// STATE in React means the description of the app
// this STATE, here, is the robots and the searchbox
// unlike PROPS, which are simply things that come out of STATE

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: []            
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({ robots: robots }));

    }
    
    render () {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
            <h1>Loading . . .</h1>: 
            (
            
                <div className='tc'>
                    <h1 className='f2'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                <   Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}
    
// connect() is a higher order function
  // higher order functions return other functions
  // connect() is returning another function, in this case
  // App()
export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';  
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css'; 

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

// STATE in React means the description of the app
// this STATE, here, is the robots and the searchbox
// unlike PROPS, which are simply things that come out of STATE

class App extends Component {
// there are no more states because
// robots are going to be returned from the props from onRequestRobots
//, so we don't need the below
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: []            
    //     }
    

    componentDidMount() {
       this.props.onRequestRobots();
    }
    
    render () {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !isPending ?
            <h1>Loading . . .</h1>: 
            (
              <div className='tc'>
                <h1 className='f2'>Robofriends</h1>
                  <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                      <CardList robots={filteredRobots} />
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
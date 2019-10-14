import React, {Component } from 'react';
import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo /> 
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
=======
const particlesOptions = {
  particles: {
    number: {
      value:30,
      density: {
        enable: true,
        value_area: 800
      }
    }
    // line_linked: {
    //   shadow: {
    //     enable: true,
    //     color: "#3CA9D1",
    //     blur: 5
      }
}

class App extends Component {
  render() {
     return (
        <div className="App">
          <Particles className ='particles' 
                params={particlesOptions} 
                />
          <Navigation />
          <Logo /> 
          <Rank /> 
          <ImageLinkForm />
          {/* <FaceRecognition />} */}  
        </div>
      );
    }
>>>>>>> 309555fcb76c978a4668a11f7bb24360de56f584
}

export default App;

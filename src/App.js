import React from 'react';
import logo from './logo.svg';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/Imagelinkform/Imagelinkform'
import Clarifai from 'clarifai'
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import Facerec from './Components/Facerec/Facerec'
import faceDetectApi from './Components/Api/Api';
import Signin from './Components/Signin/Signin';
import './App.css';

const particleOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}


  const app = new Clarifai.App({
    apiKey: 'e0357803b22f409dbb059d51ca2675b1'
  });









class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      inputBar: 'https://samples.clarifai.com/face-det.jpg',
      imageUrl: 'https://samples.clarifai.com/face-det.jpg',
      box: [],
      route : 'signin'
    }
    this.apiSetFace = this.apiSetFace.bind(this)
    this.handleInput = this.handleInput.bind(this);
    this.onRouteChange = this.onRouteChange.bind(this);
  }
  handleInput(input){
    this.setState({inputBar: input})
  }
  
  calculateFaceLocation (data){
    console.log(data)
  }

  

  async apiSetFace () {
    this.setState({imageUrl: this.state.inputBar});
    const boxData = await faceDetectApi(this.state.inputBar);
  
    this.setState({box: boxData})


  }
  onRouteChange (){
    this.setState({route: 'home'})

  }
  render(){
    return (
      <div className='App'>
        <Navigation/>
        {this.state.route === 'signin' ? 
        <Signin onRouteChange={this.onRouteChange}/> 
        : <div>
            <Particles params={particleOptions} className='particles'/>
            <Logo/>
            <Rank/>
            <ImageLinkForm onInputChange = {this.handleInput} onClick={this.apiSetFace} imageUrl ={this.state.imageUrl} />
            <Facerec imageUrl ={this.state.imageUrl} box={this.state.box}/>
          </div>}
        
      </div>
    )
  }
};

export default App;

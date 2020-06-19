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
      inputBar: '',
      imageUrl: 'https://samples.clarifai.com/face-det.jpg',
      box: []
    }
    this.apiSetFace = this.apiSetFace.bind(this)
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(input){
    this.setState({inputBar: input})
  }
  
  calculateFaceLocation (data){
    console.log(data)
  }

  

  async apiSetFace () {
    this.setState({imageUrl: this.state.inputBar});
    const boxData = await faceDetectApi(this.state.imageUrl);
    this.setState({box:boxData})
    const boxData2 = await faceDetectApi(this.state.imageUrl)
    this.setState({box: boxData2})


  }
  render(){
    return (
      <div className='App'>
        <Navigation/>
        <Particles params={particleOptions} className='particles'/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange = {this.handleInput} onClick={this.apiSetFace} />
        <Facerec imageUrl ={this.state.imageUrl} box={this.state.box}/>
      </div>
    )
  }
};

export default App;

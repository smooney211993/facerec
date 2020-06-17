import React from 'react';
import logo from './logo.svg';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/Imagelinkform/Imagelinkform'
import Clarifai from 'clarifai'
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import Facerec from './Components/Facerec/Facerec'
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
      imageUrl: ''
    }
    this.api = this.api.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(input){
    this.setState({inputBar: input})
  }
  async api () {
    this.setState({imageUrl: this.state.inputBar})
   try {
    const response = await app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg")
    if(response.status.description === 'Ok'){
      console.log(response)
    } else {
      throw new Error('shit didnt do shit')
    }
    
     
   } catch (error) {
     console.log(error)
     
   }
   
    
   
  }
  render(){
    return (
      <div className='App'>
        <Navigation/>
        <Particles params={particleOptions} className='particles'/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange = {this.handleInput} onClick={this.api} />
        <Facerec/>
      </div>
    )
  }
};

export default App;

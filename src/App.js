//import React from 'react';
import React, {useState} from 'react';
import logo from './logo.svg';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/Imagelinkform/Imagelinkform'
import Clarifai from 'clarifai'
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import Facerec from './Components/Facerec/Facerec'
import api from './Components/Api/Api';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
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

/*
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
      route : 'signin',
      isSignedIn: true
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
    const boxData = await api.faceDetectApi(this.state.inputBar);
  
    this.setState({box: boxData})


  }
  onRouteChange (route){
    if(route === 'signout'){
      this.setState({isSignedIn: false})

    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})

  }
  homePage(){
    return this.state.route === 'home' 
    ?  
      <div>
          <Logo/>
          <Rank/>
          <ImageLinkForm onInputChange = {this.handleInput} 
          onClick={this.apiSetFace} 
          imageUrl ={this.state.imageUrl}
          />
          <Facerec imageUrl ={this.state.imageUrl} box={this.state.box}/>
      </div>
    : (
        this.state.route === 'signin'
        ? <Signin  onRouteChange={this.onRouteChange}/>
        : <Register  onRouteChange={this.onRouteChange}/>
     )
         
         
       
    
  }


  render(){
    return (
      <div className='App'>
        <Particles params={particleOptions} className='particles'/>
        <Navigation onRouteChange = {this.onRouteChange} isSignedIn = {this.state.isSignedIn}/>
        {this.homePage()}
        
      </div>
    )
  }
};

*/


const App2 = () => {
  const [inputBar, setInutBar] = useState('https://samples.clarifai.com/face-det.jpg');
  const [imageUrl, setImageUrl] = useState('https://samples.clarifai.com/face-det.jpg');
  const [box, setBox] = useState([]);
  const [route, setRoute] = useState('signin');
  const [isSignedin, setSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: '',
    joined: '',
  });
  
  
  const handleInput = (input) =>{
    setInutBar(input)

  };

  const apiSetFace =  async () =>{
    setImageUrl(inputBar);
    
      //const boxData = await api.faceDetectApi(inputBar);
      //setBox(boxData);
      //const imageCount = await api.imageCount(user.id, box.length);
      //setUser({...user,entries: imageCount})
    api.faceDetectApi(inputBar).then(response=>{
      setBox(response) // sets the dimensions of the boxes around the detected faces
      api.imageCount(user.id, response.length).then(response=> setUser({...user,entries: response}))
    })
    
   
    

  }

  
  
  
  const onRouteChange = (routeAdress) =>{
    setRoute(routeAdress)
    if(routeAdress === 'signout'){
      setSignedIn(false)
      setUser({
          id: '',
          name: '',
          email: '',
          entries: '',
          joined: '', 
      })
     

    } else if (routeAdress === 'home') {
      setSignedIn(true)
      
    }
  }
    // changes the route adress once signed in
  const loadUser = (data) =>{
    setUser({
        id: data.id,
        name: data.name,
        email : data.email,
        entries: data.entries,
        joined: data.joined
      })
     
  }

  const homePage = () =>{
    return route === 'home' 
    ?  
      <div>
          <Logo/>
          <Rank imageCount ={user.entries}/>
          <ImageLinkForm onInputChange = {handleInput} 
          onClick={apiSetFace} 
          imageUrl ={imageUrl}
          />
          <Facerec imageUrl ={imageUrl} box={box}/>
      </div>
    : (
        route === 'signin'
        ? <Signin  onRouteChange={onRouteChange} loadUser={loadUser} />
        : <Register  onRouteChange={onRouteChange} loadUser={loadUser}/>
     )
         
         
// this renders whats on the homepage on the condition if the user has signed in or not
  }




  return (
      <div className='App'>
        <Particles params={particleOptions} className='particles'/>
        <Navigation onRouteChange = {onRouteChange}  isSignedin ={isSignedin} route ={route} />
        {homePage()}
        
      </div>
      
      )

}



export default App2;

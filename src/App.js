//import React from 'react';
import React, {useState, useEffect} from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/Imagelinkform/Imagelinkform'
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




const App2 = () => {
  const [inputBar, setInutBar] = useState('');
  const [imageUrl, setImageUrl] = useState('');
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
  

  
  useEffect(()=>{
    const apiSetFace =  async () =>{
      try{
        const response = await api.faceDetectApi(inputBar);
        if(response){
          setBox(response)
          const boxes = response.length
          const data = await api.imageCount(user.id, boxes)
          setUser({...user,entries: data})
        } else {
          throw new Error('bad request')
        }
      } catch(error) {
        console.log('can not detect with poor image quality')
        }
    }

      if(imageUrl !== ''){  
        apiSetFace()
      }  
  
  }, [imageUrl])
  
  
  const handleInput = (input) =>{
    setInutBar(input)

  };

 

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
          <Rank imageCount ={user.entries} user={user}/>
          <ImageLinkForm onInputChange = {handleInput} inputValue={inputBar}
          onClick={e=>{
            e.preventDefault()
            setImageUrl(inputBar)}}
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

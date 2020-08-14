import React, {useState} from 'react';
import api from '../Api/Api';
import capitalizeName from '../../Helpers/capitalize';

const Register = (props) => {
    const {onRouteChange, loadUser} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    
    const onPasswordChange = (event) => {
        setPassword(event.target.value);

    };

    const onNameChange = (event) => {
        setName(capitalizeName(event.target.value));
    };
    
    

    const onSubmit = async () =>{
        const user =  await api.register(name, email, password,);
        if(!user){
            document.getElementById("register").innerText = 'User already exists/Incorrect Formatting'
            return
             
        }

        loadUser(user)
        onRouteChange('home')
        
        
    }

    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0" id="register">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                             type="text" 
                             name="name" 
                              id="name"
                              onChange={onNameChange}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                             type="email" 
                             name="email-address" 
                              id="email-address"
                              onChange={onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password" 
                             id="password"
                             onChange={onPasswordChange}/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={onSubmit}/>
                    </div>                   
                </div>
            </main>
        </article>
        
    
    )
}

export default Register;
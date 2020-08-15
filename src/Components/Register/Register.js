import React, {useState} from 'react';
import api from '../Api/Api';
import capitalizeName from '../../Helpers/capitalize';
import Inputs from '../Inputs/Inputs';

const Register = (props) => {
    const {onRouteChange, loadUser} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(null);
    

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
            setIsValid(false)
            return
             
        }
        loadUser(user)
        onRouteChange('home')
        }
    const errorMessage = () =>{
        if(isValid === false) {
            return 'Unable to sign in/Please enter the correct details'
        }
        return 'Register'
    }   

    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0" id="register">{errorMessage()}</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <Inputs
                                type={"text"} 
                                name={"name"} 
                                id={"name"}
                                onChange={onNameChange}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <Inputs
                                type="email" 
                                name={"email-address"} 
                                id={"email-address"}
                                onChange={onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <Inputs
                                type={"password"} 
                                name={"password"} 
                                id={"password"}
                                onChange={onPasswordChange}
                            />
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
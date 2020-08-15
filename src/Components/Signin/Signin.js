import React, {useState} from 'react';
import 'tachyons';
import Inputs from '../Inputs/Inputs.js'
import emailValidation from '../../Helpers/validatemails'
import api from '../Api/Api';

const Signin = (props) => {
    const {onRouteChange, loadUser} = props;
    const [email, setSignEmail] = useState('');
    const [password, setSigninPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const handleSigninEmail = (event) =>{
        setSignEmail(event.target.value);
    };
    const handleSigninPassword = (event) => {
        setSigninPassword(event.target.value);
    };

    const onSubmitSignin = async ()  => {
        const isValidEmail = emailValidation(email);
        if(!isValidEmail){
            setIsValidEmail(false)
        }
        const user = await api.signIn(email,password);
        if(!user){
            return
        }
        loadUser(user);
        onRouteChange('home')
    }
       
        

    
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <Inputs 
                                type={"email"}
                                name={"email-address"}
                                id={"email-address"}
                                onChange={handleSigninEmail}
                                isValidEmail ={isValidEmail}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <Inputs
                                type={"password"}
                                name={"password"}
                                id={"password"}
                                onChange={handleSigninPassword}
                                isValidEmail={true}/>
                                
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit" value="Sign in"
                            onClick={onSubmitSignin}/>
                    </div>
                    <div className="lh-copy mt3">
                        <input 
                            onClick={()=>onRouteChange('Register')}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"  
                            type='submit'
                             value={"Register"}/>
                    </div>
                </div>
            </main>
        </article>
        
    )
}

export default Signin;
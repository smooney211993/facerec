import React, {useState} from 'react';
import 'tachyons';

const Signin = (props) => {
    const {onRouteChange} = props;
    const [signinEmail, setSignEmail] = useState('');
    const [signinPassword, setSigninPassword] = useState('');
    const handleSigninEmail = (event) =>{
        setSignEmail(event.target.value);
    };
    const handleSigninPassword = (event) => {
        setSigninPassword(event.target.value);
    };

    const onSubmitSignin = async ()  => {
       try{
           const response = await fetch('http://localhost:4001/signin',{
               method: 'post',
               headers: {'Content-type' : 'application/json'},
               body: JSON.stringify({
                   email: signinEmail,
                   password: signinPassword 
               })
           })
           if(response.ok) {
               const jsonResponse = response.json();
               console.log(jsonResponse)
               onRouteChange('home')
           } else {
               throw new Error('didnt work')
           }

       } catch(error) {
           console.log(error)
       }

    }
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                             type="email"
                             name="email-address"
                              id="email-address"
                             onChange={handleSigninEmail}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                             type="password"
                              name="password"
                              id="password"
                              onChange={handleSigninPassword}/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                         type="submit" value="Sign in"
                          onClick={onSubmitSignin}/>
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={()=>onRouteChange('Register')}className="f6 link dim black db pointer">Register</p>
                    </div>
                </div>
            </main>
        </article>
        
    )
}

export default Signin;
import React from 'react';

const Inputs = (props) => {
    const {
        type,
        name,
        id,
        onChange,
        isValidEmail,
        isValidName
    } = props;

    const renderErrorMessage = ()=>{
        if(!isValidEmail) {
            return 'Please use a valid email address'
        } else if(!isValidName){
            return 'Please enter your name'
        }
        
    }
   
    
    return (
    <>
        <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type={type} 
            name={name} 
            id={id}
            onChange={onChange}
        />
        {renderErrorMessage()}
    </>
    )

}


export default Inputs;
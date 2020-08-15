import React from 'react';

const Inputs = (props) => {
    const {
        type,
        name,
        id,
        onChange,
        isValidEmail
    } = props;

    const renderErrorMessage = ()=>{
        if(!isValidEmail) {
            return 'Please use a valid email address'
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
import React from 'react';

const Inputs = (props) => {
    const {
        type,
        name,
        id,
        onChange
    } = props;

    return (
    <>
        <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type={type} 
            name={name} 
            id={id}
            onChange={onChange}
        />
        
    </>
    )

}


export default Inputs;
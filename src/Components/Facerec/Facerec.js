import React from 'react';

const Facerec =(props)=>{
    const {imageUrl} = props
    return(
        <div className='center'>
            <div>
                <img id='imageinput' alt='detecting' src={imageUrl} witdh='500px' height='auto'/>
            </div>
        </div>
    )
};

export default Facerec;
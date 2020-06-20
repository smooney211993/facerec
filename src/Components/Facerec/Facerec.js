import React from 'react';
import './Facerec.css';
import 'tachyons';

const Facerec =(props)=>{
    const {imageUrl, box} = props
    
    
    const render = () =>{
        if(!box ) return <div>Error</div>
        return  box.map(el =>{ return <div className='bounding-box'style={{top: el.topRow, right: el.rightCol, bottom: el.bottomRow, left: el.leftCol}}></div> })
    }
    
    
    return(
        <div className='center'>
            <div className='absolute mt2'>
                <img id='imageinput' alt='detecting' src={imageUrl} witdh='400px' height='auto'/>
                {render()}
            </div>
        </div>
    )
};

export default Facerec;
import React from 'react';
import './Facerec.css';
import 'tachyons';

const Facerec =(props)=>{
    const {imageUrl, box} = props
    const render = () =>{
        if(box < 1) return <div>Image quality too poor.Can not detect face. Please use another image!</div>
        return  box.map((el, i) =>{ return <div key={i} className='bounding-box'style={{top: el.topRow, right: el.rightCol, bottom: el.bottomRow, left: el.leftCol}}></div> })
    }
    const renderImage =()=>{
        if(imageUrl===''){
            return
        }
        return <><img id='imageinput' alt='detecting' src={imageUrl} witdh='400px' height='auto'/>
        {render()} </>
    }
    
    
    return(
        <div className='center'>
            <div className='absolute mt2'>
                {renderImage()}
            </div>
        </div>
    )
};

export default Facerec;
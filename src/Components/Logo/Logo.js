import React from 'react'
import Tilt from 'react-tilt';
import './Logo.css'
import eye from './eye.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 170, width: 150 }} >
                <div className="Tilt-inner pa3" > <img src ={eye} alt='eye scanner logo' style={{paddingTop: '20px', paddingLeft: '10px'}}  /> </div>
            </Tilt>
        </div>

    )
}

export default Logo;
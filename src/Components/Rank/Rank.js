import React from 'react'
import ImageLinkForm from '../Imagelinkform/Imagelinkform';

const Rank = (props) =>{
    const {imageCount} = props;
    return (
        <div>
            <div className='white f3'>
                {'Stephen, your current face count is'}
            </div>
            <div className="white f3">
                {imageCount}

            </div>
        </div>
    )
;}


export default Rank;
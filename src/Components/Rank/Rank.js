import React from 'react'
import ImageLinkForm from '../Imagelinkform/Imagelinkform';

const Rank = (props) =>{
    const {imageCount, user} = props;
    return (
        <div>
            <div className='white f3'>
                {user.name}, your current face count is'
            </div>
            <div className="white f3">
                {imageCount}

            </div>
        </div>
    )
;}


export default Rank;
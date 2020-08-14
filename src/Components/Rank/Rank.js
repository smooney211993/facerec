import React from 'react'


const Rank = (props) =>{
    const {imageCount, user} = props;
    return (
        <div>
            <div className='white f3 pa2'>
                {user.name} your current face count is
                
            </div>
            <div className="white f3">
                {imageCount}

            </div>
            <br></br>
            <div className ='f7'>
                    Please make sure of decent image quality in order for the face detection to work!
            </div>
        </div>
    )
;}


export default Rank;
import React from 'react'


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
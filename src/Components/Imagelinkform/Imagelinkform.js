import React from 'react';
import './Imagelinkform.css'


const ImageLinkForm = (props)=>{
    const {onInputChange, inputValue,  handleImageUrl} = props
    const handleInput =(event)=>{
        onInputChange(event.target.value)
    }
    return (
        <div className ='image-link'>
            <p className='f3'>This will detect faces in images links!</p>
            <form className='center' onSubmit={handleImageUrl}>
                <div className='form center pa4 br3 shadow-5 image-container' >
                    <input className='f4 pa2 w-70 center  '  type='text' onChange ={handleInput} value={inputValue} />
                    <button  className='w-40 grow f4 link ph3 pv2 dib white bg-light-purple' type='submit' >Detect</button >
                </div>
            </form>
        </div>
    )

}

export default ImageLinkForm;

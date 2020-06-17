import React from 'react';
import './Imagelinkform.css'

class ImageLinkForm extends React.Component {
    constructor(props){
        super(props)

        this.handleInput = this.handleInput.bind(this)

        
        
    }

    handleInput(event){
        this.props.onInputChange(event.target.value)
    }

    render(){
        return (
            <div className ='image-link'>
                <p className='f3'>This will detect faces in images!</p>
                <div className='center'>
                    <div className='form center pa4 br3 shadow-5'>
                        <input className='f4 pa2 w-70 center ' type='text' onChange ={this.handleInput}  />
                        <button  className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={this.props.onClick}>Detect</button >
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageLinkForm;

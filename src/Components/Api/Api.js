import Clarifai from 'clarifai';
const app = new Clarifai.App({
    apiKey: 'e0357803b22f409dbb059d51ca2675b1'
   });
const faceDetectApi = async (input) =>{

    try {
    const response = await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", input)
    if(response.status.description === 'Ok'){
      console.log(response)
      console.log(response.outputs[0].id)
     return response.outputs[0].data.regions.map((box)=>{
      const {left_col, top_row , right_col, bottom_row} = box.region_info.bounding_box;
      const image = document.getElementById('imageinput');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: left_col * width,
        topRow: top_row * height,
        rightCol: width - (right_col * width),
        bottomRow: height - (bottom_row * height)
      }
    })

    
  
    } else {
      throw new Error('shit didnt do shit')
    }
    
     
   } catch (error) {
     console.log(error)
     
   }

};


export default faceDetectApi
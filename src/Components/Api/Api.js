//import Clarifai from 'clarifai';
/*const app = new Clarifai.App({
    apiKey: ''
   }); */
const api = {

    async faceDetectApi (input) {
        try {
            //const response = await app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", input)
            const response = await fetch('http://localhost:4001/imageurl',{
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    input: input
                })
            }) 
            if(response.ok){
             const jsonResponse = await response.json();
             const boxArray = jsonResponse.outputs[0].data.regions.map((box)=>{
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
            return boxArray;
        
            
          
            } else {
              throw new Error('error')
            }
            
             
           } catch (error) {
             console.log(error)
             
           }

    },

    async imageCount(id, number){
        try {
          const response = await fetch('http://localhost:4001/image', {
            method: 'put',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                id: id,
                count : number
                


            })
        })

        if(response.ok){
          const data = response.json()
          return data
        }

        } catch(error) {
          console.log(error)
        }
    },
    
    
    async register (name, email, password) {
        try{
            const response = await fetch(`http://localhost:4001/register`,{
                method: 'post',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password 
                })
             })
            if(response.ok) {
                const user = response.json();
                console.log(user)
                return user
                 } else {
                throw new Error('Error registering')
            }
    
        } catch(error) {
            console.log(error)
        }
    },

   


    async signIn(email, password){
        try{
            const response = await fetch('http://localhost:4001/signin',{
                method: 'post',
                headers: {'Content-type' : 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password 
                })
            })
            if(response.ok) {
                const user = response.json();
                console.log(user)
                return user
                } else {
                throw new Error('Error signing in.Please be sure that credentials are correct!')
            }
 
        } catch(error) {
            console.log(error)
        }
    }
}

 
export default api
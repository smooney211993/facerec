const api = {
    
    
    async register (email, password) {
        try{
            const response = await fetch(`http://localhost:4001/register`,{
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
                throw new Error('didnt work')
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
                throw new Error('didnt work')
            }
 
        } catch(error) {
            console.log(error)
        }
    }
}

 

export default api;
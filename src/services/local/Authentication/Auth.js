import apiService from '../apiService'; 
import store from '../../../store/index';  

export default { 

    signIn(EMAIL, PASSWORD) {
        return apiService.post('/signIn', { email: EMAIL, password: PASSWORD })
    },

    async signOut() {
        return apiService.get('/signOut',{
            headers: {
                'Authorization': `Bearer ${store.state.token}`
              }
        })
    },

    getSession() { 
        return apiService.get('/getSession',{
            headers: {
                'Authorization': `Bearer ${store.state.token}`
              }
        })
    } 
} 
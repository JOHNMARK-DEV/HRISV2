
import { createStore } from 'vuex' 
import stateRehydrationPlugin from '../plugins/stateRehydrationPlugin'

const index = createStore({ 
    plugins: [stateRehydrationPlugin],
    state() {
        return {
            token:'', 
        }
    },
    mutations: {  
        setToken(state, value) {
            state.token = value 
        }, 
    }
})

export default index
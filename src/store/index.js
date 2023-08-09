
import { createStore } from 'vuex' 
import stateRehydrationPlugin from '../plugins/stateRehydrationPlugin'

const index = createStore({ 
    plugins: [stateRehydrationPlugin],
    state() {
        return {
            token:'', 
            recordId:'', 
        }
    },
    mutations: {  
        setToken(state, value) {
            state.token = value 
        }, 
        setRecordId(state, value) {
            state.recordId = value 
        }, 
    }
})

export default index
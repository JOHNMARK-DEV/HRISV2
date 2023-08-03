import router from '../../../router';
import { supabase } from '../supabase'

export default {

    async signUp(EMAIL, PASSWORD) {
        try {
            if (!supabase) {
                throw new Error("Supabase client not initialized.");
            }
            let { data, error } = await supabase.auth.signUp({
                email: EMAIL,
                password: PASSWORD
            })

            if (error) {
                throw new Error(error.message);
            }
            console.log("Sign up successful!", user);
        } catch (error) {
            console.error("Error during sign up:", error.message);
        }
    },

    async signIn(EMAIL, PASSWORD) {
        if (!supabase) {
            throw new Error("Supabase client not initialized.");
        }
        const { data, error } = await supabase.auth.signInWithPassword({
            email: EMAIL,
            password: PASSWORD
        })

        if (error) {
            throw new Error(error.message);
        }  
        return data
    },

    async signOut() {
        try {
            let { error } = await supabase.auth.signOut()
            router.push('/login')
        } catch (error) {
            throw new Error(error.message);
        }
    } 
} 
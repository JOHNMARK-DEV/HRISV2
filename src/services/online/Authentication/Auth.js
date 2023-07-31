import router from '../../../router';
import { supabase } from '../supabase'

class Auth {

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
    }

    async signInWithEmail(EMAIL, PASSWORD) {
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
        
        router.push('/User/EmployeeDashboard')
    }
    async signOut() {
        try {
            let { error } = await supabase.auth.signOut()
        } catch (error) {
            throw new Error(error.message);
        }
    }

}
export default Auth
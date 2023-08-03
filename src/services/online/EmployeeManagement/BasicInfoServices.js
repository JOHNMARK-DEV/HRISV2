 import { supabase } from '../supabase'

export default {

    async handleSave(info) {
        try {
            const { data, error } = await supabase
                .from('tbl_users')
                .insert([
                    info
                ])
                .select()

            if (error) {
                throw new Error(error.message);
            } 
            return data
        } catch (error) {
            console.error("Error :", error.message);
        }
    },

    async handleUpdate(id, info) {
        try {
            const { data, error } = await supabase
                .from('tbl_users')
                .update(info)
                .eq('id', id)
                .select()

            if (error) {
                throw new Error(error.message);
            }
            return data
        } catch (error) {
            console.error("Error :", error.message);
        }
    },

    async show() {
        try {
            let { data: tbl_users, error } = await supabase
                .from('tbl_users')
                .select('firstName,lastName')

            if (error) {
                throw new Error(error.message);
            }
            return tbl_users
        } catch (error) {
            console.error("Error :", error.message);
        }
    },
} 
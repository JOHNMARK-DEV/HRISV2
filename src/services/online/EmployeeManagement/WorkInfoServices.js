import { supabase } from '../supabase'

export default {

    async handleSave(info) {
        try {
            const { data, error } = await supabase
                .from('tbl_emp_workInfo')
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
                .from('tbl_emp_workInfo')
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
            let { data: tbl_emp_workInfo, error } = await supabase
                .from('tbl_emp_workInfo')
                .select('firstName,lastName')

            if (error) {
                throw new Error(error.message);
            }
            return tbl_emp_workInfo
        } catch (error) {
            console.error("Error :", error.message);
        }
    },
} 
import { supabase } from '../supabase'

export default {

    async handleSave(info) {
        try {
            const { data, error } = await supabase
                .from('tbl_emp_sched_details')
                .insert(info)
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
                .from('tbl_emp_sched_details')
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

    async getAll() {
        try {
            let { data: tbl_emp_sched_details, error } = await supabase
                .from('tbl_emp_sched_details')
                .select('*')

            if (error) {
                throw new Error(error.message);
            }
            return tbl_emp_sched_details
        } catch (error) {
            console.error("Error :", error.message);
        }
    }, 
    
    async getById(id) { 
        try {
            let { data: datas, error } = await supabase
                .from('tbl_emp_sched_details_details') 
                .select('*')
                .eq("emp_id",id)
                .order('id')

            if (error) {
                throw new Error(error.message);
            } 
            return datas

        } catch (error) {
            console.error("Error :", error.message);
        }
    },
} 
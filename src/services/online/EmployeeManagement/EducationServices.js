import { supabase } from '../supabase'

export default {

    async handleSave(info,emp_id) {
        try { 
            this.handleDelete(emp_id)
            const { data, error } = await supabase
                .from('tbl_emp_education')
                .insert([info])
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
                .from('tbl_emp_education')
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
    
    async handleDelete(emp_id) {
        try {
            const { data, error } = await supabase
                .from('tbl_emp_education')
                .delete()
                .in('id', emp_id) 

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
            let { data: tbl_emp_education, error } = await supabase
                .from('tbl_emp_education')
                .select('*')

            if (error) {
                throw new Error(error.message);
            }
            return tbl_emp_education
        } catch (error) {
            console.error("Error :", error.message);
        }
    },

    async getById(id) {
        try {
            let { data: datas, error } = await supabase
                .from('tbl_emp_education')
                .select('*')
                .eq("emp_id", id)
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
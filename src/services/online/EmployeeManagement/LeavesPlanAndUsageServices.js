import { supabase } from '../supabase'

export default { 
    async handleSave(info) {
        try {
            const { data, error } = await supabase
                .from('tb_emp_leave_usage')
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
                .from('tb_emp_leave_usage')
                .update(info)
                .eq('emp_id', id)
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
            let { data: tb_emp_leave_usage, error } = await supabase
                .from('tb_emp_leave_usage')
                .select('*')

            if (error) {
                throw new Error(error.message);
            }
            return tb_emp_leave_usage
        } catch (error) {
            console.error("Error :", error.message);
        }
    }, 
    
    async getById(id) { 
        try {
            let { data: tbl_users, error } = await supabase
                .from('tb_emp_leave_usage') 
                .select('*')
                .eq("emp_id",id)

            if (error) {
                throw new Error(error.message);
            } 
            return tbl_users[0]

        } catch (error) {
            console.error("Error :", error.message);
        }
    },
} 
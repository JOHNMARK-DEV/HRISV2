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

    async fetchAll() {
        try {
            let { data: tbl_users, error } = await supabase
                .from('tbl_users')
                .select('*')

            if (error) {
                throw new Error(error.message);
            }
            const employees = tbl_users.map(data => {
                return {
                    name: data.first_name + " " + data.middle_name + " " + data.last_name,
                    position: data.position_id,
                    office: data.office_id,
                    age: data.age,
                    start_date: data.start_date ,

                } 
            })
            return employees
        } catch (error) {
            console.error("Error :", error.message);
        }
    },
} 
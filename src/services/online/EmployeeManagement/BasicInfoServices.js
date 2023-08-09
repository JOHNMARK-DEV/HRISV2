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
            // console.log('insert',data[0].id)
            return data[0].id
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
            return data[0].id
        } catch (error) {
            console.error("Error :", error.message);
        }
    },

    async getAll() {
        try {
            let { data: tbl_users, error } = await supabase
                .from('tbl_users')
                .select('*')

            if (error) {
                throw new Error(error.message);
            }
            const employees = tbl_users.map(data => {
                return { 
                    id: data.id ,
                    name: data.first_name + " " + data.middle_name + " " + data.last_name, 
                } 
            })
            return employees
        } catch (error) {
            console.error("Error :", error.message);
        }
    },

    async getById(id) {
        try {
            let { data: tbl_users, error } = await supabase
                .from('tbl_users') 
                .select('*')
                .eq("id",id)

            if (error) {
                throw new Error(error.message);
            } 
            return tbl_users[0]

        } catch (error) {
            console.error("Error :", error.message);
        }
    },
} 
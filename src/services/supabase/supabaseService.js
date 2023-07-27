import { createClient } from '@supabase/supabase-js';


class SupabaseService {
  constructor() { 
    const supabaseUrl = 'https://xbfcisyylojofvwxdulp.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZmNpc3l5bG9qb2Z2d3hkdWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1MTc5MDYsImV4cCI6MjAwNTA5MzkwNn0.Rl1kvcBd7e5UHpMJ74RMg0dMEWIstr_nRPk7mP07fpo'
 
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async fetchTableData(tableName) {
    const { data, error } = await this.supabase.from(tableName).select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async insertData(tableName, data) {
    const { error } = await this.supabase.from(tableName).insert(data);
    if (error) {
      throw new Error(error.message);
    }
  }

  async updateData(tableName, id, data) {
    const { error } = await this.supabase.from(tableName).update(data).eq('id', id);
    if (error) {
      throw new Error(error.message);
    }
  }

  async deleteData(tableName, id) {
    const { error } = await this.supabase.from(tableName).delete().eq('id', id);
    if (error) {
      throw new Error(error.message);
    }
  }
}

export default SupabaseService;

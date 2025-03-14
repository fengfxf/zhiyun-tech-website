import { createClient } from '@supabase/supabase-js';
import { ContactFormData } from '../types/contact';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey);

// 管理员登录
export async function signIn(email: string, password: string) {
  const { data, error } = await supabaseAdmin.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

// 管理员登出
export async function signOut() {
  const { error } = await supabaseAdmin.auth.signOut();
  return { error };
}

// 获取当前登录用户
export async function getCurrentUser() {
  const { data, error } = await supabaseAdmin.auth.getUser();
  return { user: data.user, error };
}

// 获取联系表单数据
export async function getContactMessages(page = 1, pageSize = 10) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabaseAdmin
    .from('contact_messages')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  return { data: data as ContactFormData[], error, count };
}

// 删除联系表单数据
export async function deleteContactMessage(id: number) {
  const { error } = await supabaseAdmin
    .from('contact_messages')
    .delete()
    .eq('id', id);

  return { error };
}

// 标记联系表单数据为已处理
export async function markAsProcessed(id: number, processed: boolean) {
  const { error } = await supabaseAdmin
    .from('contact_messages')
    .update({ processed })
    .eq('id', id);

  return { error };
} 
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Profile {
  id: string;
  email: string;
  full_name: string;
  bio?: string;
  avatar_url?: string;
  institution?: string;
  grade_level?: string;
  subjects: string[];
  interests: string[];
  points: number;
  rating: number;
  total_sessions: number;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface StudyRoom {
  id: string;
  name: string;
  description?: string;
  subject: string;
  creator_id: string;
  max_participants: number;
  is_active: boolean;
  created_at: string;
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id?: string;
  room_id?: string;
  content: string;
  created_at: string;
}

export interface StudyMaterial {
  id: string;
  uploader_id: string;
  title: string;
  description?: string;
  subject: string;
  file_url: string;
  file_type: string;
  downloads: number;
  rating: number;
  created_at: string;
}

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://aftugqwgegdsdixciuef.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdHVncXdnZWdkc2RpeGNpdWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2NTA3MTQsImV4cCI6MjA3NDIyNjcxNH0.rxoq7H91msLTPjne25yf2hpKa-v-ZkNz61fBxDkF5Uo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Newsletter subscription function
export async function subscribeToNewsletter(email) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        { 
          email: email,
          subscribed_at: new Date().toISOString(),
          status: 'active'
        }
      ])
      .select()

    if (error) {
      console.error('Error subscribing to newsletter:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, error: 'Something went wrong' }
  }
}

// Get subscriber count
export async function getSubscriberCount() {
  try {
    const { count, error } = await supabase
      .from('newsletter_subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active')

    if (error) {
      console.error('Error getting subscriber count:', error)
      return 0
    }

    return count || 0
  } catch (error) {
    console.error('Unexpected error:', error)
    return 0
  }
}

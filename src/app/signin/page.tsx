"use client";
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://achfjfhepdsqmowglmgx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjaGZqZmhlcGRzcW1vd2dsbWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1NDQxMDAsImV4cCI6MjAyMDEyMDEwMH0.i7pnQS0nVn33U0CSLX3x0DjSkUs624J0aZ9zp8wPo-8')

const App = () => (
    <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google', 'facebook', 'twitter']}
    />
)

export default App;
"use client";
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const App = () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
            <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={['google', 'facebook', 'twitter']}
            // className="space-y-4"
            />
        </div>
    </div>
);
//h
export default App;

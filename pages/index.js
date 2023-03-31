import Link from 'next/link'

import { supabase } from './../lib/supabaseClient';

function Page({ countries }) {
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mt-16 mb-4">Next + TailwindCSS + Supabase Starter Template</h1>
        <a href="https://github.com/jeanbaptistebeck/next-tailwind-supabase-starter-template" className="text-blue-500 hover:text-blue-800 underline">https://github.com/jeanbaptistebeck/next-tailwind-supabase-starter-template</a>
      </div>
    </>
  );
}

export default Page;

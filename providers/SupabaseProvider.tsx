"use client";
import { Database } from "@/types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <SessionContextProvider supabaseClient={supabaseClient as any}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;

declare module 'npm:@supabase/supabase-js@2' {
  export function createClient(url: string, key: string): {
    from: (table: string) => {
      insert: (data: object) => Promise<{ error: unknown }>
      select: (columns?: string) => { eq: (col: string, val: unknown) => { limit: (n: number) => { single: () => Promise<{ data: unknown }> } } }
    }
  }
}

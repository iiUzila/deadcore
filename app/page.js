'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { Plus, LayoutGrid, List, Search, Settings } from 'lucide-react' // Ícones

export default function Dashboard() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkUser() {
      // 1. Verificar quem está logado
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/login')
        return
      }

      // 2. Buscar o perfil para ver se é admin
      // Lembra-te: Criámos a tabela 'profiles' na conversa anterior
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      if (profile && profile.role === 'admin') {
        setIsAdmin(true)
      }
      setLoading(false)
    }

    checkUser()
  }, [router])

  if (loading) return <div className="h-screen bg-[#121212] flex items-center justify-center text-zinc-500">Carregando...</div>

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-100">
      
      {/* Top Bar (Header) */}
      <header className="flex h-14 items-center justify-between border-b border-zinc-800 px-6 bg-[#121212]">
        <div className="flex items-center gap-4">
          <img src="/favicon.png" alt="Logo" className="w-6 h-6 opacity-80" />
          <span className="text-sm font-medium text-zinc-400">.deadcore</span>
          <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">BETA</span>
        </div>
        
        {/* User Icon / Settings */}
        <div className="flex gap-4 text-zinc-500">
            <button className="hover:text-white"><Settings size={18} /></button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="mb-8 text-2xl font-medium">Projects</h1>

        {/* Toolbar: Search & Filter */}
        <div className="mb-6 flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            <input 
              type="text" 
              placeholder="Search for a project" 
              className="h-9 w-64 rounded bg-[#1c1c1c] border border-zinc-800 pl-9 text-sm focus:border-zinc-600 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded p-2 text-zinc-500 hover:bg-zinc-800"><LayoutGrid size={18} /></button>
            <button className="rounded p-2 text-zinc-500 hover:bg-zinc-800"><List size={18} /></button>
            
            {/* O BOTÃO MÁGICO - SÓ APARECE PARA ADMIN */}
            {isAdmin && (
              <button className="ml-2 flex items-center gap-2 rounded bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 transition-colors">
                <Plus size={16} />
                New project
              </button>
            )}
          </div>
        </div>

        {/* Lista de Projetos (Exemplo Visual) */}
        <div className="grid gap-4">
          {/* Card de Exemplo */}
          <div className="group relative flex items-center justify-between rounded-lg border border-zinc-800 bg-[#1c1c1c] p-4 transition-colors hover:border-zinc-700">
            <div>
              <h3 className="font-medium text-zinc-200">Site Institucional</h3>
              <p className="text-xs text-zinc-500">AWS | us-west-2</p>
            </div>
            <div className="flex items-center gap-4">
               <span className="rounded bg-zinc-800 px-2 py-1 text-[10px] text-zinc-400">PRO</span>
               <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}
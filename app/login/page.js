'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert('Erro: ' + error.message)
    else router.push('/') // Vai para o dashboard
  }

  return (
    <div className="flex h-screen bg-[#121212] text-white">
      {/* Coluna da Esquerda (Formulário) */}
      <div className="flex w-full max-w-md flex-col justify-center px-12">
        
        {/* Marca */}
        <div className="mb-10 flex items-center gap-2">
           {/* Lembra-te de por o favicon.png na pasta public */}
          <img src="/favicon.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">.deadcore</span>
        </div>

        <h2 className="mb-2 text-2xl font-bold">Welcome back</h2>
        <p className="mb-8 text-sm text-zinc-500">Sign in to your account</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-xs text-zinc-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded bg-[#1c1c1c] border border-zinc-800 p-2 text-sm focus:border-green-500 focus:outline-none transition-colors"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-zinc-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded bg-[#1c1c1c] border border-zinc-800 p-2 text-sm focus:border-green-500 focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded bg-green-700 py-2 text-sm font-medium hover:bg-green-600 transition-colors text-white"
          >
            Sign in
          </button>
        </form>
      </div>

      {/* Coluna da Direita (Decorativa - Citação) */}
      <div className="hidden lg:flex flex-1 flex-col justify-center bg-[#0a0a0a] px-20 border-l border-zinc-900">
        <blockquote className="space-y-4">
          <p className="text-xl font-medium text-zinc-300">
            "A segurança do .deadcore é impressionante. De promissora a essencial em tempo recorde."
          </p>
          <footer className="text-sm text-zinc-500">— Utilizador Satisfeito</footer>
        </blockquote>
      </div>
    </div>
  )
}
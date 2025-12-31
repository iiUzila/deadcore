import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[#121212] text-zinc-400">
      {/* O Favicon + Marca */}
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <img src="/favicon.png" alt="Logo" className="w-6 h-6" />
        <span className="text-sm font-medium text-zinc-500">.deadcore</span>
      </div>

      {/* O Texto 404 Gigante */}
      <h1 className="text-[12rem] font-bold leading-none tracking-tighter text-[#1c1c1c] select-none">
        404
      </h1>
      
      <div className="mt-4 text-center">
        <p className="text-zinc-500">Página não encontrada</p>
        <Link href="/" className="mt-4 inline-block text-sm text-green-500 hover:text-green-400 transition-colors">
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
import { Inter } from 'next/font/google'
import Navbar from '@/Components/navBar/navbar'
import { IconEdit } from '@/Components/Icons'
import TagUsuarioLogado from '@/Components/TagUsuarioLogado'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
      <div className={`flex justify-between select-none
      bg-gradient-to-t from-teal-700 to-slate-400 text-blue-500 h-14 pt-4
            
      `}>
      <header>
        <title>CRM-FACIL</title>
      </header>  
      <TagUsuarioLogado iniciais='WB' usuario='WILLIAN BORGES' empresa='GERBOR SOLUÇÕES'/>
     
        <section id='#menu'> <Navbar TypeMenu='Dashboard'/></section>
    </div> 
    <div className={`bg-gradient-to-t from-white to-slate-400 p-2
            text-slate-800 h-screen
        `}>
        <section id='body'><h1>Conteudo da home</h1></section>
    </div>

    </>
  )
}

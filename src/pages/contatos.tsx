import TagUsuarioLogado from "@/Components/TagUsuarioLogado";
import Navbar from "@/Components/navBar/navbar";

export default function Contatos(){
    return(<>
        <div className='flex justify-between bg-gradient-to-t from-teal-700 to-slate-400 h-14 pt-4 select-none'>
        <header>
            <title>CRM-FACIL</title>
        </header>
        <TagUsuarioLogado iniciais='WB' usuario='WILLIAN BORGES' empresa='GERBOR SOLUÇÕES'/>
        <section id='#menu'> <Navbar TypeMenu='Contatos'/></section>
        </div>
        <div className={`bg-gradient-to-t from-white to-slate-400 p-2
            text-slate-800 h-screen
        `}>
        <section id='body'><h1>Conteudo da Contatos</h1></section>
        </div>
        </>
    )
}
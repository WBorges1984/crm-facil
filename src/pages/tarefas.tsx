import TagUsuarioLogado from "@/Components/TagUsuarioLogado";
import Navbar from "@/Components/navBar/navbar";

export default function Tarefas(){
    return(<>
        <div className=' flex justify-between bg-gradient-to-t from-teal-700 to-slate-700 h-14 pt-4 select-none'>
        <header><title>CRM-FACIL</title></header>
        <TagUsuarioLogado iniciais='WB' usuario='WILLIAN BORGES' empresa='GERBOR SOLUÇÕES'/>
            <section id='#menu'> <Navbar TypeMenu='Tarefas'/></section>
        </div>
        <div className={`bg-gradient-to-t from-teal-700 to-slate-700 p-2
            text-slate-800 h-screen
        `}>
            <section id='body'><h1>Conteudo da Tarefas</h1></section>
        </div>
        </>
    )
}
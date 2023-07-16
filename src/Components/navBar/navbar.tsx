interface NavBarProps{
    TypeMenu: 'Dashboard' | 'Tarefas' | 'Contatos' | 'Empresas' |'Configuração' 
    | 'Relatórios' |'Importação'
    
}

import Itemsnavbar from "./itemsNavbar";

export default function Navbar(props: NavBarProps){
    return(
        <div className="flex justify-end">

            {props.TypeMenu === 'Dashboard' ? (
                <Itemsnavbar Dashboard texto={props.TypeMenu} />
            ) : ''}
            
            {props.TypeMenu === 'Tarefas' ? (
                <Itemsnavbar Tarefas texto={props.TypeMenu} />
            ) : ''}
            {props.TypeMenu === 'Contatos' ? (
                <Itemsnavbar Contatos texto={props.TypeMenu} />
            ) : ''}
            
            {props.TypeMenu === 'Empresas' ? (
                <Itemsnavbar Empresas texto={props.TypeMenu} />
            ) : ''}
            {props.TypeMenu === 'Configuração' ? (
                <Itemsnavbar Configurações texto={props.TypeMenu} />
            ) : ''}
            {props.TypeMenu === 'Relatórios' ? (
                <Itemsnavbar Relatórios texto={props.TypeMenu} />
            ) : ''}
            {props.TypeMenu === 'Importação' ? (
                <Itemsnavbar Importações texto={props.TypeMenu} />
            ) : ''}

        </div>
    )
}
interface NavBarProps{
    TypeMenu: 'Dashboard' | 'Tarefas' | 'Contatos' | 'Empresas' |'Configurações' 
    | 'Relatórios' |'Importações'
    
}

import Itemsnavbar from "./itemsNavbar";

export default function Navbar(props: NavBarProps){
    return(
        <div className="flex justify-end0">

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
            {props.TypeMenu === 'Configurações' ? (
                <Itemsnavbar Configurações texto={props.TypeMenu} />
            ) : ''}
            {props.TypeMenu === 'Relatórios' ? (
                <Itemsnavbar Relatórios texto={props.TypeMenu} />
            ) : ''}
            {props.TypeMenu === 'Importações' ? (
                <Itemsnavbar Importações texto={props.TypeMenu} />
            ) : ''}

        </div>
    )
}
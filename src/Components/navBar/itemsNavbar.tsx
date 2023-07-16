import ButtonMenu from "../button/buttonMenu"

interface ItemsnavbarProps{
    Dashboard?: boolean
    Tarefas?: boolean
    Contatos?: boolean
    Empresas?: boolean
    Configurações?: boolean
    Importações?: boolean
    Relatórios?: boolean
    texto: string
} 

export default function Itemsnavbar(props: ItemsnavbarProps){
    return(
       <div>
        {props.Dashboard ? 
        (<div className={`flex`}>
            <div className="mr-2 w-28">
                <ButtonMenu  page="" text={props.texto}/> 
            </div>
            <div className="mr-2 w-28">
                <ButtonMenu page="tarefas" text='Tarefas' /> 
            </div>
            <div className="mr-2 w-28">
                <ButtonMenu page="contatos" text='Contatos'/> 
            </div>
            <div className="mr-2 w-28">
                <ButtonMenu page="empresas" text='Empresas'/> 
            </div>
            <div className="mr-2 w-28">
                <ButtonMenu page="relatorios" text='Relatórios'/> 
            </div>
            <div className="mr-2 w-28">
                <ButtonMenu page="importacao" text='Importações'/> 
            </div>
            <div className="mr-2 w-28">
                <ButtonMenu page="configuracao" text='Configurações'/> 
            </div>
        </div>
       ) : ''}

        {props.Tarefas ? 
                (<div className={`flex`}>
                <div className="mr-2 w-28">
                    <ButtonMenu  page="/" text='Dashboard' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/tarefas" text={props.texto} /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/contatos" text='Contatos' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/empresas" text='Empresas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="relatorios" text='Relatórios'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="importacao" text='Importações'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="configuracao" text='Configurações'/> 
                </div>
                
            </div>

            ) : ''}

            {props.Contatos ? 
                (<div className={`flex`}>
                <div className="mr-2 w-28">
                    <ButtonMenu  page="/" text='Dashboard' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/tarefas" text='Tarefas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/contatos" text={props.texto} /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/empresas" text='Empresas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="relatorios" text='Relatórios'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="importacao" text='Importações'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="configuracao" text='Configurações'/> 
                </div>
                
                </div>

            ) : ''}
            {props.Empresas ? 
                (<div className={`flex`}>
                <div className="mr-2 w-28">
                    <ButtonMenu  page="/" text='Dashboard' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/tarefas" text='Tarefas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/contatos" text='Contatos' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/empresas" text={props.texto} /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="relatorios" text='Relatórios'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="importacao" text='Importações'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="configuracao" text='Configurações'/> 
                </div>
                
                </div>

            ) : ''}
            {props.Relatórios ? 
                (<div className={`flex`}>
                <div className="mr-2 w-28">
                    <ButtonMenu  page="/" text='Dashboard' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/tarefas" text='Tarefas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/contatos" text='Contatos' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/empresas" text='Empresas'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="relatorios" text={props.texto} /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="importacao" text='Importações'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="configuracao" text='Configurações'/> 
                </div>
                
                </div>

            ) : ''}
            {props.Configurações ? 
                (<div className={`flex`}>
                <div className="mr-2 w-28">
                    <ButtonMenu  page="/" text='Dashboard' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/tarefas" text='Tarefas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/contatos" text='Contatos' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/empresas" text='Empresas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="relatorios" text='Relatórios'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="importacao" text='Importações'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="configuracao" text={props.texto}/> 
                </div>
                
                </div>

            ) : ''}
            {props.Importações ? 
                (<div className={`flex`}>
                <div className="mr-2 w-28">
                    <ButtonMenu  page="/" text='Dashboard' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/tarefas" text='Tarefas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/contatos" text='Contatos' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/empresas" text='Empresas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="relatorios" text='Relatórios'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="importacao" text={props.texto}/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="configuracao" text='Configurações'/> 
                </div>
                
                </div>

            ) : ''}

       </div>
    )
}
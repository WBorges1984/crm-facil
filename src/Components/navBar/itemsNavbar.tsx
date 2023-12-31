import ButtonMenu from "../button/buttonMenu"

interface ItemsnavbarProps{
    Dashboard?: boolean
    Tarefas?: boolean
    Contatos?: boolean
    Empresas?: boolean
    Configurações?: boolean
    Notes?: boolean
    Relatórios?: boolean
    texto: string
} 

export default function Itemsnavbar(props: ItemsnavbarProps){
    return(
       <div>
        {props.Dashboard ? 
        (<div className={`flex flex-wrap  `}>
            <div className="mr-2 w-28 font-black shadow-xl">
                <ButtonMenu  page="" text={props.texto}/> 
            </div>
            <div className="mr-2 w-28">
                <ButtonMenu page="notes" text='Notes'/> 
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
                    <ButtonMenu page="notes" text='Notes'/> 
                </div>
                <div className="mr-2 w-28 font-black shadow-xl">
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
                    <ButtonMenu page="notes" text='Notes'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/tarefas" text='Tarefas' /> 
                </div>
                <div className="mr-2 w-28 font-black shadow-xl">
                    <ButtonMenu page="/contatos" text={props.texto} /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/empresas" text='Empresas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="relatorios" text='Relatórios'/> 
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
                    <ButtonMenu page="notes" text='Notes'/> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/tarefas" text='Tarefas' /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="/contatos" text='Contatos' /> 
                </div>
                <div className="mr-2 w-28 font-black shadow-xl">
                    <ButtonMenu page="/empresas" text={props.texto} /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="relatorios" text='Relatórios'/> 
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
                    <ButtonMenu page="notes" text='Notes'/> 
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
                <div className="mr-2 w-28 font-black shadow-xl">
                    <ButtonMenu page="relatorios" text={props.texto} /> 
                </div>
                <div className="mr-2 w-28">
                    <ButtonMenu page="configuracao" text='Configurações'/> 
                </div>
                
                </div>

            ) : ''}
            {props.Notes ? 
                (<div className={`flex`}>
                <div className="mr-2 w-28">
                    <ButtonMenu  page="/" text='Dashboard' /> 
                </div>
                <div className="mr-2 w-28 font-black shadow-xl">
                    <ButtonMenu page="notes" text={props.texto}/> 
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
                    <ButtonMenu page="notes" text='Notes'/> 
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
                <div className="mr-2 w-28 font-black shadow-xl">
                    <ButtonMenu page="configuracao" text={props.texto}/> 
                </div>
                
                </div>

            ) : ''}

       </div>
    )
}
import { IconDown,IconLupa,IconNotification,IconMore } from "./Icons"

interface TagUsuarioLogadoProps{
    usuario: string
    iniciais: string
    empresa: string
}

export default function TagUsuarioLogado(props: TagUsuarioLogadoProps){
    return(
        <div onClick={()=> console.log(';;;...;;;')} className={`flex items-center pb-4 cursor-pointer select-none`}>
            <div className="items-center justify-center pr-5 bg-gray-400 rounded-full h-12 w-12">
                <h1 className="text-white text-2xl text-center pl-1 pr-1 pt-2">{props.iniciais}</h1>
            </div>

            <div className="pl-4">
                <h1 className={`font-bold
                    text-black 
                `}>{props.usuario}</h1>
                <h1 className={`font-semibold text-xs
                    text-black 
                `}>{props.empresa}</h1>
            </div>
            <div className={` pl-3
                    text-blue-300 
                `}>{IconDown}</div>
                <div className="pl-3 text-blue-300">{IconLupa}</div>
                <div className="pl-3 text-blue-300">{IconNotification}</div>
                <div className="pl-3 text-blue-300">{IconMore}</div>



        </div>
    )
}
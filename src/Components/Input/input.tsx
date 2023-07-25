import { IconLupa } from "../Icons";


export default function Input(){
    return(
        <div className={` flex  w-1/4`}>
        <div className="text-white m-2">
            {IconLupa}   
        </div>
         <input type="text"  placeholder="Pesquisar Empresa" className="w-full h-10 pl-3" />   
        </div>
    )
}
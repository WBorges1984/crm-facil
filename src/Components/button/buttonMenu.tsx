import Link from "next/link"

interface ButtonMenuProps{
    text : string
    page?: string
}

export default function ButtonMenu(props: ButtonMenuProps){
    return(
        <div className={`
            text-center text-gray-100 hover:-translate-y-0.5 
            transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none
        `}>
         <Link href={`${props.page}`}> 
           <button className={``}>
            {props.text}
            </button> 
            </Link>      
        </div>
    )
}
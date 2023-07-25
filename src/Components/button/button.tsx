

interface ButtonProps{
    text : string
    textColor?: 'black-500' | 'white' | 'blue-500' | 'green' 
    bgColor?: 'green' |'blue' | 'gray' | 'red'
    wButton?: '1/2'|'1/3'|'1/4'|'1/5'|'1/6'
    children: any
    
}

export default function Button(props: ButtonProps){
    return(
        <div className={`text-${props.textColor} flex border 
         bg-${props.bgColor}-600 font-black
        w-${props.wButton} text-center items-center 
        justify-center p-2 rounded-lg bg-green-900 hover:bg-green-700 cursor-pointer select-none`}>
            <div className="mr-2">
                {props.children}
            </div>
            <div>
            {props.text}
            </div>
            
        </div>
    )
}
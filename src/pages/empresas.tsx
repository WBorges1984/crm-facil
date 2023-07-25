import { IconAdd, IconEdit, IconInfo, IconCheck, IconNo } from "@/Components/Icons";
import Input from "@/Components/Input/input";
import TagUsuarioLogado from "@/Components/TagUsuarioLogado";
import Button from "@/Components/button/button";
import Navbar from "@/Components/navBar/navbar";
import { useState } from "react";

export default function Empresas(){

 const [pag, setPag ] = useState(3);   
    return(<>
        <div className='flex justify-between bg-gradient-to-t from-teal-700 to-slate-700 h-14 pt-4 select-none'>
        <header>
            <title>CRM-FACIL</title>
        </header>
        <TagUsuarioLogado iniciais='WB' usuario='WILLIAN BORGES' empresa='GERBOR SOLUÇÕES'/>
        <section id='#menu'> <Navbar TypeMenu='Empresas'/></section>
        </div>
        <div className={`bg-gradient-to-t from-teal-700 to-slate-700
            text-slate-800 h-screen p-7 
        `}>
            <div className={` flex justify-between
                   
             `}> 
                <Button text="Adicionar Empresa" textColor="white" 
                        bgColor="green" wButton="1/6" >
                       {IconAdd}
                       </Button> 
                <Input />
            </div>
    
        <section id="TabelaClientes" className={`mt-10 `}>
            <table className="w-full ">
                <thead className={`text-gray-200 text-left bg-gradient-to-t from-teal-700 to-teal-400
                    
                    `}>
                    
                    <tr  className={``}>
                    <td className="pl-2"><input type="checkbox" name="empresa1" id="" /></td>
                    <th scope="col" className="pl-2">Cód</th>
                    <th scope="col">Razão Social</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Negócios</th>
                    <th scope="col">Ações</th>
                    </tr>
                </thead>
        <tbody className="text-white">
            <tr>
            <td className="pl-2"><input type="checkbox" name="empresa1" id="" /></td>
                <th scope="row" className="text-left">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>3</td>
                <td className="flex ">{IconEdit} {IconInfo} {IconCheck}</td>
            </tr>
            <tr>
            <td className="pl-2"><input type="checkbox" name="empresa1" id="" /></td>
                <th scope="row"className="text-left">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>4</td>
                <td className="flex ">{IconEdit} {IconInfo} {IconCheck}</td>
            </tr>
            <tr>
            <td className="pl-2"><input type="checkbox" name="empresa1" id="" /></td>
                <th scope="row"className="text-left">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>2</td>
                <td className="flex " >{IconEdit} {IconInfo} {IconCheck}</td>
            </tr>
        </tbody>
                </table>

        </section>

        <section id="#rodape">
        <div className="flex justify-between mt-5 pl-2">
            
            <div className="flex">
                <h4 className="text-teal-100">Exibindo</h4>
            <select className="mr-2 ml-2">
                <option value="10" selected>10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
                <h4 className="text-teal-100">de 3 Empresas</h4>
            </div>

            <div className="flex text-teal-100">
                <h4 className="mr-3">{`<`} Anterior</h4>
                {pag}
                <h4 className="ml-3">Próxima {`>`} </h4>
            </div>
        </div>

        </section>



        </div>
        </>
    )
}
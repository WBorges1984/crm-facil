import { IconAdd, IconEdit, IconInfo, IconCheck, IconNo } from "@/Components/Icons";
import Input from "@/Components/Input/input";
import TagUsuarioLogado from "@/Components/TagUsuarioLogado";
import Button from "@/Components/button/button";
import Navbar from "@/Components/navBar/navbar";
import { data } from "autoprefixer";
import { useState, useEffect } from "react";

export default function Empresas(){

 const [pag, setPag ] = useState(3); 
 const [users, setUsers] = useState([]);

 useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('http://localhost:3000/api/empresas'); // Substitua pela URL da sua API
        if (!response.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);

 
 
    return(<>
        <div className='flex justify-between
        
        bg-gradient-to-t bg-white h-14 pt-4 select-none'>
        <header>
            <title>CRM-FACIL</title>
        </header>
        <TagUsuarioLogado iniciais='WB' usuario='WILLIAN BORGES' empresa='GERBOR SOLUÇÕES'/>
        <section id='#menu'> <Navbar TypeMenu='Empresas'/></section>
        </div>
        <div className={`bg-gradient-to-t from-white to-gray-100
            text-slate-800 h-full p-7 
        `}>
            <div className={` flex justify-between
                   
             `}> 
                <Button text="Adicionar Empresa" textColor="white" 
                        bgColor="gray" wButton="1/6" >
                       {IconAdd}
                       </Button> 
                <Input />
            </div>
    
        <section id="TabelaClientes" className={`mt-10 `}>

                <table className="w-full">
                <thead className={`text-black text-left
                    h-12
                    `}>
                    
                    <tr  className={` border-b border-gray-500 shadow-black`}>                        
                    <td className="pl-2"><input type="checkbox" name="empresa1" id="" /></td>
                    <th scope="col" className=" ">Empresas</th>
                    <th scope="col">Responsável</th>
                    <th scope="col">Segmento</th>
                    <th scope="col">Negóciações</th>
                    <th scope="col">Último Contato</th>
                    </tr>
                </thead>
                <tbody>
        {users.map((item) => (
          <tr key={item.id} className={`h-14 ${item.id % 2 == 0 ?'bg-slate-300' : 'bg-slate-200'}
          
          `}>
            <td className="pl-2 border-b border-gray-500"><input type="checkbox" name="empresa1" id="" /></td>
            <td className="border-b border-gray-500 h-10">{item.name}</td>
            <td className="border-b border-gray-500">{item.responsavel}</td>
            <td className="border-b border-gray-500">{item.segmento}</td>
            <td className="border-b border-gray-500">{item.negociacoes}</td>
            <td className="border-b border-gray-500">{item.ultContato}</td>
          </tr>
        ))}
      </tbody>
                </table>

        </section>

        <section id="#rodape">
        <div className="flex justify-between mt-5 pl-2">
            
            <div className="flex">
                <h4 className="text-black">Exibindo</h4>
            <select className="mr-2 ml-2">
                <option value="10" selected>10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
                <h4 className="text-black">de 3 Empresas</h4>
            </div>

            <div className="flex text-black">
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
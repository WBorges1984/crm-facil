import { Inter } from 'next/font/google'
import Navbar from '@/Components/navBar/navbar'
import { IconEdit } from '@/Components/Icons'
import TagUsuarioLogado from '@/Components/TagUsuarioLogado'
import CardLineChart from '@/Components/graphics/CardLineChart'
import { useEffect, useState } from 'react'
import { Charts, Charts2 } from '@/Components/graphics/charts/charts'
import Grafico from '@/Components/graphics/charts/grafico'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dados = [
    ['Vendedores', 'Vendas'],
    ['Pedro', 1105],
    ['Diego', 2526],
    ['João', 758],
  ]


  const dados_vendas = [
    ['Qunt Vendas', 'Meses'],
    ['Jan', 50],
    ['Fev', 20],
    ['Mar', 35],
    ['Abr', 14],
    ['Mai', 55],
    ['Jun', 23],
    ['Jul', 56],
    ['Ago', 59],
    ['Set', 15],
    ['Out', 65],
    ['Nov', 110],
    ['Dez', 250]
   
  ]

  return (<>


      <div className={`flex  justify-between select-none
      bg-gradient-to-t from-teal-700 to-slate-700 text-blue-500 h-14 pt-4
         
      `}>
      <header>
        <title>CRM-FACIL</title>
      </header>  
      <TagUsuarioLogado iniciais='WB' usuario='WILLIAN BORGES' empresa='GESBOR SOLUÇÕES'/>
     
        <section className='flex ' id='#menu'> <Navbar TypeMenu='Dashboard'/></section>
    </div> 
    <div className={`flex flex-wrap bg-gradient-to-t from-teal-700 to-slate-700 p-2
            text-slate-800 w-full
        `}>
          <section className={`flex  ml-10 mr-10 W-600`} id='body'>
          <div className={`flex flex-wrap items-center text-center justify-center `}>
          
            <div className={`ml-10 `}>
              <h3 className={`text-2xl text-white font-semibold `}>.Vendedores</h3>
            <Grafico 
              titulo='Vendedores'
              width='500px'
              height='300px'
              dados={dados}
              chartType={'ColumnChart'}
              />
              
            </div>

            <div className={`ml-10`}>
              <h3 className={`text-2xl text-white font-semibold `}>.Vendas</h3>
            <Grafico 
              titulo='Minhas Vendas'
              width='500px'
              height='300px'
              dados={dados_vendas}
              chartType={'AreaChart'}
              />
              
            </div>
            
            <div className={`ml-10`}>
              <h3 className={`text-2xl text-white font-semibold `}>.Vendas</h3>
            <Grafico 
              titulo='Minhas Vendas'
              width='500px'
              height='300px'
              dados={dados_vendas}
              chartType={'PieChart'}
              />
              
            </div>

            <div className={`ml-10`}>
              <h3 className={`text-2xl text-white font-semibold `}>.Vendas</h3>
            <Grafico 
              titulo='Novos Clientes'
              width='500px'
              height='300px'
              dados={dados_vendas}
              chartType={'LineChart'}
              />
            </div>
          </div>
          </section>

          
      
    </div>

    </>
  )
}

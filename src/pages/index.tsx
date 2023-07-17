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
    ['Vendedores', 'Qunt de Vendas'],
    ['Pedro', 1105],
    ['Diego', 2526],
    ['João', 758],
  ]


  const dados_vendas = [
    ['Qunt Vendas', 'Valor da Venda'],
    ['50', 550.5],
    ['30', 5510.5],
    ['20', 5520.5],
    ['50', 5560.5],
    ['55', 5580.5],
    ['10', 5550.5],
    ['56', 4550.5],
   
  ]

  return (<>


      <div className={`flex justify-between select-none
      bg-gradient-to-t from-teal-700 to-slate-400 text-blue-500 h-14 pt-4
            
      `}>
      <header>
        <title>CRM-FACIL</title>
      </header>  
      <TagUsuarioLogado iniciais='WB' usuario='WILLIAN BORGES' empresa='GESBOR SOLUÇÕES'/>
     
        <section id='#menu'> <Navbar TypeMenu='Dashboard'/></section>
    </div> 
    <div className={`bg-gradient-to-t from-white to-slate-400 p-2
            text-slate-800 h-screen
        `}>
          <section className={`ml-2`} id='body'>
          <div className={`flex w-50`}>
          
            <div className={``}>
              <h3>Vendedores</h3>
            <Grafico 
              titulo='Vendedores'
              width='500px'
              height='200px'
              dados={dados}
              chartType={'BarChart'}
              />
              
            </div>

            <div className={`ml-10`}>
              <h3>Vendas</h3>
            <Grafico 
              titulo='Minhas Vendas'
              width='500px'
              height='200px'
              dados={dados_vendas}
              chartType={'AreaChart'}
              />
              
            </div>
            
          </div>
          </section>

          
      
    </div>

    </>
  )
}

import { Chart } from "react-google-charts";

interface ChartsProps{
    dados: any
    chartType: any
    options: any
    width?: string
    height?: string
}

export const Charts  =(
    
        <div className="">
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={[
                ['Vendedores', 'Qunt de Vendas'],
                ['Pedro', 1105],
                ['Diego', 2526],
                ['João', 758],
              ]}
            options={{
                title: 'My Daily Activities',
      }}
    />


        </div>
    )


export const Charts2 =(
  
        <div>
        <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        data={[
            ['Qunt Vendas', 'Valor da Venda'],
            ['50', '550.5'],
            ['30', '5510.5'],
            ['20', '5520.5'],
            ['50', '5560.5'],
            ['55', '5580.5'],
            ['10', '5550.5'],
            ['56', '4550.5'],
           
          ]}
        options={{
        title: 'My Daily Activities',
      }}
    />
        </div>
  
)

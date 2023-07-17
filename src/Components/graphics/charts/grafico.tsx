interface GraficoProps{
    titulo: string
    width: string
    height: string
    chartType: any
    dados: any

}

import { Chart } from "react-google-charts";

export default function Grafico(props: GraficoProps){
    return(
        <div>
            <Chart
            width={props.width}
            height={props.height}
            chartType={props.chartType}
            data={props.dados}
            options={{
                title: `${props.titulo}`,
      }}
    />
        </div>
    )
}
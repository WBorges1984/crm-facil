import type { NextApiRequest, NextApiResponse } from 'next'
const empresas = [
    {
      "id": 1,
      "name": "João Silva",
      "responsavel": "Ana",
      "segmento": "Tecnologia",
      "negociacoes": 5,
      "ultContato": "2023-07-28"
    },
    {
      "id": 2,
      "name": "Maria Souza",
      "responsavel": "Pedro",
      "segmento": "Educação",
      "negociacoes": 10,
      "ultContato": "2023-07-27"
    },
    {
      "id": 3,
      "name": "Carlos Santos",
      "responsavel": "Laura",
      "segmento": "Saúde",
      "negociacoes": 3,
      "ultContato": "2023-07-26"
    },
    {
      "id": 4,
      "name": "Ana Pereira",
      "responsavel": "João",
      "segmento": "Alimentos",
      "negociacoes": 8,
      "ultContato": "2023-07-25"
    },
    {
      "id": 5,
      "name": "Pedro Gomes",
      "responsavel": "Maria",
      "segmento": "Moda",
      "negociacoes": 12,
      "ultContato": "2023-07-24"
    },
    {
      "id": 6,
      "name": "Laura Costa",
      "responsavel": "Carlos",
      "segmento": "Construção",
      "negociacoes": 2,
      "ultContato": "2023-07-23"
    },
    {
      "id": 7,
      "name": "Mariana Almeida",
      "responsavel": "Ricardo",
      "segmento": "Automotivo",
      "negociacoes": 6,
      "ultContato": "2023-07-22"
    },
    {
      "id": 8,
      "name": "Ricardo Lima",
      "responsavel": "Mariana",
      "segmento": "Beleza",
      "negociacoes": 4,
      "ultContato": "2023-07-21"
    },
    {
      "id": 9,
      "name": "Fernanda Rocha",
      "responsavel": "Gustavo",
      "segmento": "Turismo",
      "negociacoes": 7,
      "ultContato": "2023-07-20"
    },
    {
      "id": 10,
      "name": "Gustavo Ferreira",
      "responsavel": "Fernanda",
      "segmento": "Esportes",
      "negociacoes": 9,
      "ultContato": "2023-07-19"
    },
    {
      "id": 11,
      "name": "Patrícia Oliveira",
      "responsavel": "Eduardo",
      "segmento": "Farmacêutico",
      "negociacoes": 15,
      "ultContato": "2023-07-18"
    },
    {
      "id": 12,
      "name": "Eduardo Rodrigues",
      "responsavel": "Patrícia",
      "segmento": "Financeiro",
      "negociacoes": 11,
      "ultContato": "2023-07-17"
    },
    {
      "id": 13,
      "name": "Roberto Silva",
      "responsavel": "Camila",
      "segmento": "Comércio",
      "negociacoes": 6,
      "ultContato": "2023-07-16"
    },
    {
      "id": 14,
      "name": "Camila Santos",
      "responsavel": "Roberto",
      "segmento": "Logística",
      "negociacoes": 3,
      "ultContato": "2023-07-15"
    },
    {
      "id": 15,
      "name": "Lucas Souza",
      "responsavel": "Luciana",
      "segmento": "Imobiliário",
      "negociacoes": 8,
      "ultContato": "2023-07-14"
    }
  ]
  

  export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    res.status(200).json(empresas)
  }
  
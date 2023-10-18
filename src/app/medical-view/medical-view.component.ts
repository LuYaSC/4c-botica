import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medical-view',
  templateUrl: './medical-view.component.html',
  styleUrls: ['./medical-view.component.scss']
})
export class MedicalViewComponent implements OnInit {
  id: number = 0;
  medicament: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const idValue = this.route.snapshot.paramMap.get('id');
    this.id = idValue ? +idValue : 0;

    switch (this.id) {
      case 1:
        this.medicament = {
          url: 'assets/images/botica/abrazofeno.png',
          name: "Abrazofeno",
          description: "Abrazoprofeno es un elixir diseñado para fortalecer la conexión emocional y tender puentes en la comunicación familiar. Especialmente formulado para momentos donde el silencio se vuelve ensordecedor y el corazón anhela cercanía. Cada dosis lleva consigo la promesa de un abrazo sincero y la dulzura de un amor inquebrantable.",
          esp: [{
            name: "Indicaciones",
            value: "Administrar a través de un abrazo genuino. Mire a los ojos del ser querido y deje que el medicamento actúe, permitiendo que fluya la conexión entre ambos."
          },
          {
            name: "Recomendaciones",
            value: 'Para maximizar los efectos, es fundamental acompañar la dosis con palabras llenas de amor y comprensión, como "Te quiero mucho" o "Estoy aquí contigo".'
          }],
          prizes: [{
            minus: "-5 de orgullo",
            add: "+3 de empatía"
          },
          {
            minus: "-3 de prejuicios",
            add: "+2 de madurez"
          },
          ],
          orderingInf: [
            {
              material: "Abrazos Concentrados",
              description: "Extracto puro de gestos cariñosos y reconfortantes.",
              package: "1 frasco de 500 ml"
            },
            {
              material: "Amor Líquido",
              description: "Solución enriquecida con sentimientos genuinos.",
              package: "1 botellín de 200 ml"
            },
            {
              material: "Esencia de Comprensión",
              description: "Infusión destilada de entendimiento mutuo.",
              package: "1 tubo de 100 ml"
            }
          ],
          especifications: [
            {
              code: "HPIS CODE",
              value: "999-200-40-0"
            },
            {
              code: "RESPE CODE",
              value: "450-300-15-5"
            }
          ]
        };

        break;
      case 2:
        this.medicament = {
          url: 'assets/images/botica/tolerol.png',
          name: "Tolerol",
          description: "Abrazoprofeno es un elixir diseñado para fortalecer la conexión emocional y tender puentes en la comunicación familiar. Especialmente formulado para momentos donde el silencio se vuelve ensordecedor y el corazón anhela cercanía. Cada dosis lleva consigo la promesa de un abrazo sincero y la dulzura de un amor inquebrantable.",
          esp: [{
            name: "Indicaciones",
            value: "Administrar a través de un abrazo genuino. Mire a los ojos del ser querido y deje que el medicamento actúe, permitiendo que fluya la conexión entre ambos."
          },
          {
            name: "Recomendaciones",
            value: 'Para maximizar los efectos, es fundamental acompañar la dosis con palabras llenas de amor y comprensión, como "Te quiero mucho" o "Estoy aquí contigo".'
          }],
          prizes: [{
            minus: "-5 de orgullo",
            add: "+3 de empatía"
          },
          {
            minus: "-3 de prejuicios",
            add: "+2 de madurez"
          },
          ],
          orderingInf: [
            {
              material: "Abrazos Concentrados",
              description: "Extracto puro de gestos cariñosos y reconfortantes.",
              package: "1 frasco de 500 ml"
            },
            {
              material: "Amor Líquido",
              description: "Solución enriquecida con sentimientos genuinos.",
              package: "1 botellín de 200 ml"
            },
            {
              material: "Esencia de Comprensión",
              description: "Infusión destilada de entendimiento mutuo.",
              package: "1 tubo de 100 ml"
            }
          ],
          especifications: [
            {
              code: "HPIS CODE",
              value: "999-200-40-0"
            },
            {
              code: "RESPE CODE",
              value: "450-300-15-5"
            }
          ]
        };
        break;
      case 3:
      this.medicament = {
        url: 'assets/images/botica/ecuani.png',
        name: "ECUANIMEDIPINO",
        description: "Abrazoprofeno es un elixir diseñado para fortalecer la conexión emocional y tender puentes en la comunicación familiar. Especialmente formulado para momentos donde el silencio se vuelve ensordecedor y el corazón anhela cercanía. Cada dosis lleva consigo la promesa de un abrazo sincero y la dulzura de un amor inquebrantable.",
        esp: [{
          name: "Indicaciones",
          value: "Administrar a través de un abrazo genuino. Mire a los ojos del ser querido y deje que el medicamento actúe, permitiendo que fluya la conexión entre ambos."
        },
        {
          name: "Recomendaciones",
          value: 'Para maximizar los efectos, es fundamental acompañar la dosis con palabras llenas de amor y comprensión, como "Te quiero mucho" o "Estoy aquí contigo".'
        }],
        prizes: [{
          minus: "-5 de orgullo",
          add: "+3 de empatía"
        },
        {
          minus: "-3 de prejuicios",
          add: "+2 de madurez"
        },
        ],
        orderingInf: [
          {
            material: "Abrazos Concentrados",
            description: "Extracto puro de gestos cariñosos y reconfortantes.",
            package: "1 frasco de 500 ml"
          },
          {
            material: "Amor Líquido",
            description: "Solución enriquecida con sentimientos genuinos.",
            package: "1 botellín de 200 ml"
          },
          {
            material: "Esencia de Comprensión",
            description: "Infusión destilada de entendimiento mutuo.",
            package: "1 tubo de 100 ml"
          }
        ],
        especifications: [
          {
            code: "HPIS CODE",
            value: "999-200-40-0"
          },
          {
            code: "RESPE CODE",
            value: "450-300-15-5"
          }
        ]
      };
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
    }
  }

}

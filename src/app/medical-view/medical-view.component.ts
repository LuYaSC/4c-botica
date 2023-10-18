import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medical-view',
  templateUrl: './medical-view.component.html',
  styleUrls: ['./medical-view.component.scss']
})
export class MedicalViewComponent implements OnInit {
  id: number = 0;
  medicament: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  /*Order Medicaments
  1 Abrazofeno
  2 Tolerol
  3 Resiliciencia-pirina
  4 ECUANIMEDIPINO
  5 COMUNICATEX
  6 EMPATIA-G
  7 DIALOGADOL
  */
  refreshPage() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
}

  buy() {
    Swal.fire({
      icon: 'success',
      title: 'Producto Adquirido',
      text: '¡Muchas gracias por adquirir el producto que lo disfrutes!'
    });
  }

  ngOnInit() {
    const idValue = this.route.snapshot.paramMap.get('id');
    this.id = idValue ? +idValue : 0;

    switch (this.id) {
      case 1:
        this.medicament = {
          url: 'assets/images/botica/abrazofeno.png',
          name: "ABRAZOFENO",
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
          name: "TOLEROL",
          description: "Tolerol es una solución mágica, creada para fomentar la paciencia y comprensión en momentos de tensión. Formulado para aquellos instantes en los que las diferencias parecen insuperables y la armonía familiar necesita ser restaurada. Cada gota es una promesa de empatía y una invitación al entendimiento.",
          esp: [
            {
              name: "Indicaciones",
              value: "Administrar mediante una actitud abierta y receptiva. Escuche activamente, valide los sentimientos del otro y busque puntos en común para fomentar el diálogo."
            },
            {
              name: "Recomendaciones",
              value: 'Para un efecto optimizado, combine con gestos de cariño y palabras de apoyo. Reconocer un error o decir "Entiendo cómo te sientes" potencia el efecto del medicamento.'
            }
          ],
          prizes: [
            {
              minus: "-4 de ego",
              add: "+5 de paz interior"
            },
            {
              minus: "-3 de obstinación",
              add: "+2 de unidad familiar, +3 de comprensión mutua"
            }
          ],
          orderingInf: [
            {
              material: "Extracto de Paciencia",
              description: "Destilado puro diseñado para momentos de máxima tensión.",
              package: "1 frasco de 500 ml"
            },
            {
              material: "Esencia de Empatía",
              description: "Concentrado para generar un entendimiento profundo.",
              package: "1 botellín de 200 ml"
            },
            {
              material: "Escucha Activa",
              description: "Solución líquida para fomentar la atención y el diálogo.",
              package: "1 tubo de 100 ml"
            }
          ],
          especifications: [
            {
              code: "TOLER CODE",
              value: "998-100-30-7"
            },
            {
              code: "EMPAT CODE",
              value: "400-250-12-4"
            }
          ]
        };
        break;
      case 3:
        this.medicament = {
          url: 'assets/images/botica/Resci.png',
          name: "RESILIENCIA-PIRINA",
          description: "Resiliciencia-pirina es el remedio por excelencia para aquellos momentos de adversidad y desafío. Diseñado para ayudar a las familias a superar obstáculos, este medicamento refuerza la capacidad de adaptarse a los cambios y crecer ante la adversidad. Cada dosis es un impulso de fortaleza, permitiendo a la familia mantenerse unida, incluso en las tormentas más fuertes.",
          esp: [
            {
              name: "Indicaciones",
              value: "Administrar mediante actitudes positivas y constructivas. Enfrentar los desafíos con determinación, aprendiendo de ellos y buscando soluciones en conjunto."
            },
            {
              name: "Recomendaciones",
              value: 'Para potenciar el efecto, es esencial recordar los logros y superaciones pasadas. Las palabras de aliento como "Podemos superar esto juntos" o "Cada desafío nos hace más fuertes" son catalizadores poderosos del medicamento.'
            }
          ],
          prizes: [
            {
              minus: "-6 de miedo",
              add: "+5 de fortaleza"
            },
            {
              minus: "-2 de desánimo",
              add: "+3 de crecimiento personal, +2 de confianza familiar"
            }
          ],
          orderingInf: [
            {
              material: "Extracto fortalecedor de carácter",
              description: "Potenciador natural para fortalecer la resiliencia en situaciones desafiantes.",
              package: "1 frasco de 500 ml"
            },
            {
              material: "Esencia de adaptabilidad",
              description: "Refuerzo líquido que favorece la adaptación ante cambios y desafíos.",
              package: "1 botellín de 200 ml"
            },
            {
              material: "Optimismo Concentrado",
              description: "Solución para potenciar la actitud positiva y la visión constructiva.",
              package: "1 tubo de 100 ml"
            }
          ],
          especifications: [
            {
              code: "RESILI CODE",
              value: "997-150-25-8"
            },
            {
              code: "FORTA CODE",
              value: "396-225-10-3"
            }
          ]
        };
        break;
      case 4:
        this.medicament = {
          url: 'assets/images/botica/ecuani.png',
          name: "ECUANIMEDIPINO",
          description: "ECUANIMEDIPINO es el elixir pensado para equilibrar las emociones y proporcionar serenidad en medio del caos. Formulado para momentos de agitación, discusiones o conflictos en el seno familiar, es el bálsamo que permite tomar un respiro, calmar las aguas y promover un ambiente de diálogo tranquilo. Cada dosis es un viaje hacia la calma y el entendimiento.",
          esp: [
            {
              name: "Indicaciones",
              value: "Administrar en situaciones de conflicto. Tome una dosis y respire profundamente, buscando el equilibrio interno antes de responder o reaccionar."
            },
            {
              name: "Recomendaciones",
              value: 'Para potenciar el efecto, es beneficioso practicar técnicas de relajación o meditación. Las afirmaciones como "Estoy en paz" o "Todo estará bien" pueden servir de mantra para acompañar el tratamiento.'
            }
          ],
          prizes: [
            {
              minus: "-5 de impulsividad",
              add: "+6 de paz interior"
            },
            {
              minus: "-3 de tensión",
              add: "+4 de comunicación efectiva, +2 de empatía"
            }
          ],
          orderingInf: [
            {
              material: "Extracto de serenidad",
              description: "Destilado puro para promover la tranquilidad y la paz interna.",
              package: "1 frasco de 500 ml"
            },
            {
              material: "Esencia de equilibrio emocional",
              description: "Fórmula especializada para nivelar y equilibrar las emociones.",
              package: "1 botellín de 200 ml"
            },
            {
              material: "Calma Concentrada",
              description: "Solución que proporciona un respiro en medio del caos y ayuda a mantener la claridad mental.",
              package: "1 tubo de 100 ml"
            }
          ],
          especifications: [
            {
              code: "EQUIL CODE",
              value: "891-170-28-6"
            },
            {
              code: "CALMA CODE",
              value: "492-205-11-4"
            }
          ]
        };


        break;
      case 5:
        this.medicament = {
          url: 'assets/images/botica/comunicatex.png',
          name: "COMUNICATEX",
          description: "COMUNICATEX es el medicamento esencial para fortalecer los lazos comunicativos en la familia. Ideal para momentos en los que las palabras parecen perderse o cuando el silencio se vuelve abrumador. Cada dosis es una herramienta poderosa para abrir canales de diálogo, permitiendo expresar sentimientos, pensamientos y deseos de manera clara y comprensiva.",
          esp: [
            {
              name: "Indicaciones",
              value: "Administrar en situaciones donde la comunicación es crucial. Tome una dosis y, antes de hablar, escuche atentamente. Luego, comparta sus pensamientos con claridad y sin juicio."
            },
            {
              name: "Recomendaciones",
              value: 'Para un efecto optimizado, evite las interrupciones cuando alguien más esté hablando y fomente un ambiente donde todos se sientan seguros para compartir. Reforzando con frases como "Entiendo lo que dices" o "Gracias por compartir eso conmigo", se amplificarán los beneficios del medicamento.'
            }
          ],
          prizes: [
            {
              minus: "-4 de suposiciones",
              add: "+6 de entendimiento mutuo"
            },
            {
              minus: "-3 de distracciones",
              add: "+5 de cercanía emocional, +3 de armonía familiar"
            }
          ],
          orderingInf: [
            {
              material: "Extracto de escucha activa",
              description: "Componente esencial que promueve la escucha atenta y comprensiva.",
              package: "1 frasco de 500 ml"
            },
            {
              material: "Esencia de expresión clara",
              description: "Favorece la transmisión de ideas y sentimientos de manera directa y efectiva.",
              package: "1 botellín de 200 ml"
            },
            {
              material: "Diálogo Puro",
              description: "Concentrado para mejorar la fluidez comunicativa y resolver malentendidos.",
              package: "1 tubo de 100 ml"
            }
          ],
          especifications: [
            {
              code: "DIALOG CODE",
              value: "762-125-30-7"
            },
            {
              code: "ESCUCHA CODE",
              value: "542-215-18-2"
            }
          ]
        };

        break;
      case 6:
        this.medicament = {
          url: 'assets/images/botica/empatiag.png',
          name: "EMPATIA-G",
          description: "EMPATIA-G es el remedio perfecto para los corazones que buscan conectarse en un nivel más profundo. Diseñado para momentos en los que se necesita comprender y sentir lo que el otro está viviendo, este medicamento es un puente hacia la comprensión mutua. Cada dosis es un llamado a caminar en los zapatos del otro, reconociendo y validando sus sentimientos.",
          esp: [
            {
              name: "Indicaciones",
              value: "Administrar en situaciones donde es esencial entender el punto de vista o los sentimientos de otro. Al tomar una dosis, deje a un lado los prejuicios y abra su corazón a las experiencias del otro."
            },
            {
              name: "Recomendaciones",
              value: 'El efecto de EMPATIA-G se potencia al preguntar cómo se siente la otra persona y realmente esperar y valorar su respuesta. Las frases como "Estoy aquí para ti" o "Cuéntame más sobre cómo te sientes" son excelentes coadyuvantes del tratamiento.'
            }
          ],
          prizes: [
            {
              minus: "-4 de juicios rápidos",
              add: "+7 de conexión humana"
            },
            {
              minus: "-3 de indiferencia",
              add: "+5 de relaciones más profundas, +2 de confianza mutua"
            }
          ],
          orderingInf: [
            {
              material: "Extracto de comprensión",
              description: "Sustancia clave que facilita el entendimiento y la conexión con los sentimientos ajenos.",
              package: "1 frasco de 500 ml"
            },
            {
              material: "Esencia de conexión emocional",
              description: "Ayuda a sintonizar con las emociones del otro y a generar vínculos más profundos.",
              package: "1 botellín de 200 ml"
            },
            {
              material: "Solidaridad Pura",
              description: "Concentrado para fortalecer la capacidad de ponerse en el lugar del otro y actuar con amabilidad.",
              package: "1 tubo de 100 ml"
            }
          ],
          especifications: [
            {
              code: "COMPRENSIÓN CODE",
              value: "963-415-21-9"
            },
            {
              code: "CONEXIÓN CODE",
              value: "842-115-08-3"
            }
          ]
        };


        break;
      case 7:
        this.medicament = {
          url: 'assets/images/botica/dialogadol.png',
          name: "DIALOGADOL",
          description: "DIALOGADOL es la fórmula magistral para momentos en que las conversaciones se tornan difíciles o las palabras no fluyen. Es el elixir que facilita la apertura de canales de diálogo, permitiendo a las familias abordar temas complicados con respeto y comprensión mutua. Cada dosis es una oportunidad para construir puentes de entendimiento y profundizar los lazos familiares.",
          esp: [
            {
              name: "Indicaciones",
              value: "Administrar en momentos de tensión conversacional o cuando se requiere abordar temas importantes en familia. Al tomar una dosis, adopte una postura abierta y dispuesta a la escucha y el diálogo."
            },
            {
              name: "Recomendaciones",
              value: 'Para maximizar los efectos de DIALOGADOL, evite interrumpir al interlocutor y busque un espacio tranquilo y cómodo para conversar. Refuerce con frases que inviten al diálogo, como "Hablemos de esto" o "Valoro tu opinión, cuéntame más".'
            }
          ],
          prizes: [
            {
              minus: "-4 de resistencia",
              add: "+6 de relaciones fortalecidas"
            },
            {
              minus: "-3 de preconcepciones",
              add: "+5 de entendimiento mutuo, +3 de resolución de conflictos"
            }
          ],
          orderingInf: [
            {
              material: "Extracto de apertura",
              description: "Elemento que facilita el inicio de conversaciones y la disposición al diálogo.",
              package: "1 frasco de 500 ml"
            },
            {
              material: "Esencia de claridad conversacional",
              description: "Ayuda a transmitir pensamientos y emociones de forma clara y directa.",
              package: "1 botellín de 200 ml"
            },
            {
              material: "Sinceridad Pura",
              description: "Favorece la honestidad y genuinidad en cada interacción.",
              package: "1 tubo de 150 ml"
            }
          ],
          especifications: [
            {
              code: "APERTURA CODE",
              value: "761-215-45-7"
            },
            {
              code: "CLARIDAD CODE",
              value: "492-098-65-2"
            }
          ]
        };

        break;
    }
  }

}

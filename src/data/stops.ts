// data/stops.ts
export interface Stop {
  id: number;
  icon: string;
  location: string;
  clue: string;
  hint: string;
  type: "normal" | "choice" | "riddle";
  choiceQ?: string;
  choices?: string[];
  choiceResponses?: string[];
  riddleHint?: string;
  answers?: string[];
  successMsg?: string;
}

export const STOPS: Stop[] = [
  {
    id: 1,
    icon: "✨",
    location: "Donde todo comenzó",
    clue: "Vuelve al lugar donde nuestra historia empezó sin que lo supiéramos. Donde el tiempo pasó diferente, y sin darnos cuenta, ese momento se convirtió en el primero de muchos recuerdos juntos.",
    hint: "Ese día llevabas cubrebocas, te veías guapísima… y no estábamos solos, un pequeño gatito también fue testigo de ese momento.",
    type: "normal",
  },
  {
    id: 2,
    icon: "🎟️",
    location: "Cupón especial",
    clue: "Hoy tienes un cupón especial… pero no es un cupón cualquiera. Solo hay una condición: debes dejarte llevar y confiar en la experiencia. Puede convertirse en algo muy especial 😉",
    hint: "No todo lo que parece una elección… realmente lo es.",
    type: "choice",
    choiceQ: "¿Qué te gustaría hoy?",
    choices: ["🍽️ Algo especial", "🍽️ Algo muy delicioso"],
    choiceResponses: [
      "Perfecto… entonces prepárate, porque hoy toca algo especial ✨",
      "Perfecto… confía en mí, tengo algo preparado que te va a gustar 😌",
    ],
  },
  {
    id: 3,
    icon: "☀️",
    location: "Un recuerdo bajo el sol",
    clue: "¿Recuerdas aquel día? La ventana que no abría, el calor que parecía no terminar, y las Sabritas que no te guardé… Aun así, ese momento se quedó conmigo para siempre.",
    hint: "Un lugar al que llegamos con mucho calor, pero que valió la pena. Hoy volvemos, pero esta vez será más tranquilo, con comida, algo frío para tomar y tiempo solo para nosotros.",
    type: "normal",
  },
  {
    id: 4,
    icon: "🤍",
    location: "Nuestra Iglesia",
    clue: "El último paso te lleva al lugar más sagrado que compartimos. Donde cada semana le damos gracias por todo lo que tenemos... incluyendo lo que está a punto de pasar.",
    hint: "La iglesia donde siempre vamos a misa. Ve al santisimo, cierra los ojos un momento, y espérame.",
    type: "normal",
  },
];

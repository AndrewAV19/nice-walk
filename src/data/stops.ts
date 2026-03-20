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
    icon: "💫",
    location: "El lugar de la Casualidad",
    clue: "Un día, nuestro lugar de siempre cerró sus puertas. Y sin saberlo, el destino nos llevó a descubrir algo mejor. Un lugar que ahora también es nuestro.",
    hint: "Ese lugar al que llegamos por casualidad y que terminó gustándonos más de lo que imaginábamos. Hoy nos espera otra vez.",
    type: "choice",
    choiceQ: "Y hoy... ¿qué antojo tienes? 😋",
    choices: ["🍔 ¡Hamburguesa!", "🥩 ¡Un corte!"],
    choiceResponses: [
      "¡Hamburguesa! Perfecta elección. Ahí te espero con tu orden favorita ❤️",
      "¡Corte! Excelente gusto. Te espero con la mejor mesa del lugar ❤️",
    ],
  },
  {
    id: 3,
    icon: "🔎",
    location: "El lugar del misterio",
    clue: "Hay un lugar donde siempre pides algo frío, algo que te hace sonreír desde el primer sorbo. Cada vez que vamos, tus ojos brillan igual que la primera vez. Estoy seguro de que sabes a dónde ir.",
    hint: "Piensa en esa bebida fría que siempre eliges, la que nunca falla y siempre se te antoja.",
    type: "riddle",
    riddleHint: "Escribe el nombre de tu bebida favorita...",
    answers: [
      "frappe",
      "frappé",
      "frapé",
      "cafe frio",
      "café frio",
      "frappuccino",
      "café helado",
    ],
    successMsg:
      "¡Exacto! Esa bebida que tanto te gusta te está esperando ahí. ☕✨",
  },
  {
    id: 4,
    icon: "☀️",
    location: "Un recuerdo bajo el sol",
    clue: "¿Recuerdas aquel día? La ventana que no abría, el calor que parecía no terminar, y las Sabritas que no te guardé… Aun así, ese momento se quedó conmigo para siempre.",
    hint: "Un lugar al que llegamos con mucho calor, pero que valió la pena. Hoy volvemos, pero esta vez será más tranquilo, con comida, algo frío para tomar y tiempo solo para nosotros.",
    type: "normal",
  },
  {
    id: 5,
    icon: "🤍",
    location: "Nuestra Iglesia",
    clue: "El último paso te lleva al lugar más sagrado que compartimos. Donde cada semana le damos gracias por todo lo que tenemos... incluyendo lo que está a punto de pasar.",
    hint: "La iglesia donde siempre vamos a misa. Ve al santisimo, cierra los ojos un momento, y espérame.",
    type: "normal",
  },
];

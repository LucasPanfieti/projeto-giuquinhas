// ============================================================
// ARQUIVO DE DADOS — edite aqui para personalizar o site!
// ============================================================

export const coupleData = {
  names: {
    person1: "Lucas", // ← coloque o seu nome
    person2: "Giulia", // ← coloque o nome dela
  },

  // Data do primeiro beijo: 08 de outubro de 2023
  firstKissDate: new Date("2023-10-08T00:00:00"),

  // Data oficial do namoro: 08 de dezembro de 2023
  startDate: new Date("2023-12-08T00:00:00"),

  // Frase principal exibida no topo
  mainQuote: "Depois que se reencontramos, nunca mais nos separamos.",

  // Frases românticas que aparecem na seção do contador
  quotes: [
    "GiuQuinhas para sempre ♥",
    "Você é meu Daylight",
    "Ti amu",
    "Meu Momot",
  ],
};

// ============================================================
// LINHA DO TEMPO POR ANO
// Adicione eventos e fotos em cada ano
// ============================================================

export type TimelineEvent = {
  date: string; // ex: "08 de outubro"
  title: string;
  description: string;
  photo?: string; // caminho em /public/photos/
  side: "left" | "right";
};

export const timelineByYear: Record<string, TimelineEvent[]> = {
  "2023": [
    {
      date: "08 de outubro",
      title: "Nosso primeiro beijo ✨",
      description: "O momento em que tudo começou. Um beijo que mudou tudo.",
      photo: "/photos/2023/primeiro-beijo.jpg", // ← substitua pela sua foto
      side: "left",
    },
    {
      date: "Novembro",
      title: "Primeiras aventuras juntos",
      description:
        "Os primeiros passeios, os primeiros risos, as primeiras descobertas um do outro.",
      photo: "/photos/2023/novembro.jpg",
      side: "right",
    },
    {
      date: "08 de dezembro",
      title: "Começamos a namorar 💍",
      description:
        "O dia em que tornamos oficial o que nossos corações já sabiam.",
      photo: "/photos/2023/namoro.jpg",
      side: "left",
    },
    {
      date: "Natal",
      title: "Primeiro Natal juntos 🎄",
      description: "O Natal ganhou um significado completamente novo.",
      photo: "/photos/2023/natal.jpg",
      side: "right",
    },
  ],

  "2024": [
    {
      date: "Janeiro",
      title: "Ano novo, nós dois 🥂",
      description: "Começamos o ano sabendo que queríamos enfrentá-lo juntos.",
      photo: "/photos/2024/janeiro.jpg",
      side: "left",
    },
    {
      date: "08 de outubro",
      title: "1 ano do primeiro beijo 💛",
      description:
        "Um ano desde aquele beijo que mudou tudo. Cada segundo valeu.",
      photo: "/photos/2024/aniversario-beijo.jpg",
      side: "right",
    },
    {
      date: "08 de dezembro",
      title: "1 ano de namoro 🎉",
      description:
        "Celebramos nosso primeiro aniversário de namoro com muito amor.",
      photo: "/photos/2024/aniversario.jpg",
      side: "left",
    },
  ],

  "2025": [
    {
      date: "Janeiro",
      title: "Mais um ano começando",
      description: "2025 chegou e nós também chegamos juntos até aqui.",
      photo: "/photos/2025/janeiro.jpg",
      side: "left",
    },
    {
      date: "08 de outubro",
      title: "2 anos do primeiro beijo 💫",
      description: "Dois anos de um amor que só cresce.",
      photo: "/photos/2025/aniversario-beijo.jpg",
      side: "right",
    },
    {
      date: "08 de dezembro",
      title: "2 anos de namoro 🥂",
      description: "Dois anos juntos e ainda parece o primeiro dia.",
      photo: "/photos/2025/aniversario.jpg",
      side: "left",
    },
  ],

  "2026": [
    {
      date: "Janeiro",
      title: "2026 — nosso presente",
      description:
        "Aqui estamos nós, escrevendo mais um capítulo dessa história.",
      photo: "/photos/2026/janeiro.jpg",
      side: "left",
    },
  ],
};

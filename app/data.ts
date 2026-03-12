// ✏️  EDITE AQUI: Adicione os momentos de cada ano
// Para cada foto, coloque o arquivo em /public/photos/
// Ex: { photo: '/photos/viagem.jpg', ... }

export interface Moment {
  date: string; // "Janeiro 2023" ou "14 de fevereiro"
  title: string; // Título do momento
  description: string; // Descrição romântica
  photo?: string; // Caminho da foto (opcional)
  emoji?: string; // Emoji representativo
  highlight?: boolean; // Se é um momento especial/destaque
}

export interface YearData {
  year: number;
  subtitle: string;
  moments: Moment[];
}

export const yearsData: Record<string, YearData> = {
  "2023": {
    year: 2023,
    subtitle: "Onde tudo começou",
    moments: [
      {
        date: "8 de outubro",
        title: "Nosso primeiro beijo",
        description:
          "Infelizmente não temos uma foto desse momento, mas foi mágico e inesquecível.",
        emoji: "💋",
        highlight: true,
        photo: "/photos/2023/primeiro-beijo.webp",
      },
      {
        date: "12 de outubro",
        title: "Primeiro encontro",
        description:
          "Fomos até o Center Norte ver um filme e pegamos a maior chuva com o Uninho.",
        emoji: "☔",
        photo: "/photos/2023/primeiro-encontro.webp",
      },
      {
        date: "14 de outubro",
        title: "Primeira fotinha",
        description:
          "Conversas até tarde, risadas e a certeza de que queria você por perto.",
        emoji: "📸",
        photo: "/photos/2023/primeira-foto-juntos.webp",
      },
      {
        date: "28 de outubro",
        title: "Primeiro Halloween",
        description: "Vampiros 🧛🎃",
        emoji: "🎃",
        photo: "/photos/2023/primeiro-halloween.webp",
      },
      {
        date: "2 de novembro",
        title: "Primeiro jogo do São Paulo",
        description: "Torcendo juntos e vibrando a cada gol.",
        emoji: "⚽",
        photo: "/photos/2023/primeiro-jogo-sp.webp",
      },
      {
        date: "5 de novembro",
        title: "Primeiro sítio",
        description:
          "Um dia especial no sítio, cercados pela natureza e pelo amor.",
        emoji: "🏡",
        photo: "/photos/2023/primeiro-sitio.webp",
      },
      {
        date: "11 de novembro",
        title: "Primeiro parque",
        description: "Primeiro role no Vila Lobos",
        emoji: "🌳",
        photo: "/photos/2023/primeiro-parque.webp",
      },
      {
        date: "8 de dezembro",
        title: "Oficialmente namorados",
        description: "O dia em que disse sim e eu gaguejei pra carai.",
        emoji: "💍",
        highlight: true,
        photo: "/photos/2023/finalmente-namorados.webp",
      },
    ],
  },

  "2024": {
    year: 2024,
    subtitle: "Construindo memórias",
    moments: [
      {
        date: "Janeiro",
        title: "Ano Novo, amor novo",
        description: "Virar o ano de mãos dadas foi a melhor forma de começar.",
        emoji: "🥂",
        highlight: true,
        photo: "",
      },
      {
        date: "14 de fevereiro",
        title: "Primeiro Dia dos Namorados",
        description: "Celebrando o amor que cresceu mais do que imaginei.",
        emoji: "❤️",
        photo: "",
      },
      {
        date: "8 de abril",
        title: "4 meses juntos",
        description: "Cada mês uma descoberta, cada dia uma razão pra sorrir.",
        emoji: "🌸",
        photo: "",
      },
      {
        date: "Julho",
        title: "Aventuras de inverno",
        description: "Frio lá fora, quentinho aqui dentro.",
        emoji: "🧣",
        photo: "",
      },
      {
        date: "8 de outubro",
        title: "1 ano do primeiro beijo",
        description: "Um ano desde aquele beijo que mudou tudo.",
        emoji: "💫",
        highlight: true,
        photo: "",
      },
      {
        date: "8 de dezembro",
        title: "1 ano de namoro! 🎉",
        description:
          "Um ano inteiro de amor, cumplicidade e crescimento juntos. Que venham muitos mais.",
        emoji: "🥳",
        highlight: true,
        photo: "",
      },
    ],
  },

  "2025": {
    year: 2025,
    subtitle: "Amor que amadurece",
    moments: [
      {
        date: "Janeiro",
        title: "Virada juntos",
        description: "Mais um ano começando ao seu lado — o melhor lugar.",
        emoji: "🎆",
        photo: "",
      },
      {
        date: "14 de fevereiro",
        title: "Segundo Dia dos Namorados",
        description: "O amor ficou maior, a cumplicidade ficou mais bonita.",
        emoji: "💝",
        highlight: true,
        photo: "",
      },
      {
        date: "8 de junho",
        title: "18 meses juntos",
        description: "Um ano e meio de histórias escritas com muito amor.",
        emoji: "💛",
        photo: "",
      },
      {
        date: "8 de outubro",
        title: "2 anos do primeiro beijo",
        description: "Dois anos desde o começo de tudo. Que momento.",
        emoji: "🌟",
        highlight: true,
        photo: "",
      },
      {
        date: "8 de dezembro",
        title: "2 anos de namoro! 💖",
        description:
          "Dois anos juntos. Dois anos de sorrisos, abraços e amor de verdade.",
        emoji: "🎊",
        highlight: true,
        photo: "",
      },
    ],
  },

  "2026": {
    year: 2026,
    subtitle: "Escrevendo o futuro",
    moments: [
      {
        date: "Janeiro",
        title: "Começo de mais um ano",
        description: "O futuro é nosso para construir, um dia de cada vez.",
        emoji: "🌅",
        photo: "",
      },
      {
        date: "14 de fevereiro",
        title: "Dia dos Namorados",
        description: "Celebrando o amor que só cresce.",
        emoji: "💌",
        highlight: true,
        photo: "",
      },
    ],
  },
};

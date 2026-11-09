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
  link?: { href: string; label: string }; // Link opcional (ex: ler HQ)
}

export interface YearData {
  year: number;
  subtitle: string;
  published: boolean; // 🔒 false = mostra "em breve" para visitantes
  moments: Moment[];
}

export const yearsData: Record<string, YearData> = {
  "2023": {
    year: 2023,
    subtitle: "Onde tudo começou",
    published: true, // ✅ visível
    moments: [
      {
        date: "8 de outubro",
        title: "Nosso primeiro beijo",
        description:
          "O beijo que mudou tudo — mágico e inesquecível.",
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
    published: true, // ✅ visível
    subtitle: "Construindo memórias",
    moments: [
      {
        date: "1 de janeiro",
        title: "Ano Novo, amor novo",
        description: "Virar o ano de mãos dadas foi a melhor forma de começar.",
        emoji: "🥂",
        highlight: true,
        photo: "/photos/2024/ano-novo.webp",
      },
      {
        date: "Janeiro",
        title: "Primeira praia",
        description: "Nossa primeira praia juntos — sol, areia e o começo do ano.",
        emoji: "🐚",
        photo: "/photos/2024/primeira-praia.webp",
      },
      {
        date: "Janeiro",
        title: "InkinCare",
        description: "Cuidando da gente — e da arte na pele.",
        emoji: "🖋️",
        photo: "/photos/2024/inkincare.webp",
      },
      {
        date: "Fevereiro",
        title: "Praia Carnaval",
        description: "Carnaval na praia, sol e a gente juntos.",
        emoji: "🏖️",
        photo: "/photos/2024/outra-praia.webp",
      },
      {
        date: "Março",
        title: "Niver Momotzin",
        description: "Celebrando o aniversário da Momotzin juntos.",
        emoji: "🎂",
        photo: "/photos/2024/niver-momotzin.webp",
      },
      {
        date: "Maio",
        title: "Dilatação",
        description: "Dilatei a vista e não tava enxergando nada.",
        emoji: "👀",
        photo: "/photos/2024/dilatacao.webp",
      },
      {
        date: "Junho",
        title: "Pizza Crek",
        description: "Pizza, conversa e aquela noite boa juntos.",
        emoji: "🍕",
        photo: "/photos/2024/crek.webp",
      },
      {
        date: "Julho",
        title: "Center Norte",
        description: "Mais um rolê nosso pelo Center Norte.",
        emoji: "🛍️",
        photo: "/photos/2024/cn.webp",
      },
      {
        date: "Setembro",
        title: "Primeira vez em Boituva juntos",
        description: "Também, ele é surdo. kkkk",
        emoji: "🏞️",
        photo: "/photos/2024/boituva.webp",
      },
      {
        date: "15 de setembro",
        title: "Primeira Bienal do Livro",
        description: "Entre livros e corredores, mais uma memória nossa.",
        emoji: "📚",
        photo: "/photos/2024/bienal.webp",
      },
      {
        date: "Outubro",
        title: "Halloween",
        description: "Mais um Halloween juntos — fantasias, clima e a gente.",
        emoji: "🎃",
        photo: "/photos/2024/halloween.webp",
      },
      {
        date: "Novembro",
        title: "Mr. Texas",
        description: "Uma noite no Mr. Texas, só nossa.",
        emoji: "🤠",
        photo: "/photos/2024/mr-texas.webp",
      },
      {
        date: "Novembro",
        title: "Santana Parque",
        description: "Um passeio no Santana Parque juntos.",
        emoji: "🌳",
        photo: "/photos/2024/santana-parque.webp",
      },
      {
        date: "8 de dezembro",
        title: "1 ano de namoro! 🎉",
        description:
          "Um ano inteiro de amor, cumplicidade e crescimento juntos. Que venham muitos mais.",
        emoji: "🥳",
        highlight: true,
        photo: "/photos/2024/juarez.webp",
      },
      {
        date: "Dezembro",
        title: "Praia de rico",
        description: "Água clara, sol forte e cara de quem tá numa praia de rico.",
        emoji: "🌊",
        photo: "/photos/2024/praia-cara.webp",
      },
    ],
  },

  "2025": {
    year: 2025,
    published: false, // 🔒 em breve
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
    published: false, // 🔒 em breve
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

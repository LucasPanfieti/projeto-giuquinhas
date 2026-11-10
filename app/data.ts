// ✏️  EDITE AQUI: Adicione os momentos de cada ano
// Para cada foto, coloque o arquivo em /public/photos/
// Ex: { photo: '/photos/viagem.jpg', ... }

export interface Moment {
  date: string; // "Janeiro 2023" ou "14 de fevereiro"
  title: string; // Título do momento
  description: string; // Descrição romântica
  photo?: string; // Caminho da foto (opcional)
  audio?: string; // Preview de áudio ao abrir a foto (opcional)
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
          "Infelizmente não temos fotos desse dia, mas foi um momento inesquecível e mágico. O tempo parou.",
        emoji: "💋",
        highlight: true,
        photo: "/photos/2023/primeiro-beijo.webp",
        audio: "/audio/preview-what-lovers-do.mp3",
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
        description: "Que vampira gata!",
        emoji: "🎃",
        photo: "/photos/2023/primeiro-halloween.webp",
      },
      {
        date: "2 de novembro",
        title: "Primeiro jogo do São Paulo",
        description: "Cartão vermelho pra você por roubar meu coração.",
        emoji: "⚽",
        photo: "/photos/2023/primeiro-jogo-sp.webp",
      },
      {
        date: "5 de novembro",
        title: "Primeiro sítio",
        description: "Primeira vez no sítio juntos. Simples assim, e foi ótimo.",
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
        title: "Primeiro Ano Novo juntos",
        description: "Virada com fogos... e um beijo bem no meio deles.",
        highlight: true,
        photo: "/photos/2024/ano-novo.webp",
      },
      {
        date: "Janeiro",
        title: "Primeira praia",
        description:
          "Tentei abrir uma concha com abridor de lata. Rasguei o dedo. Tenho a cicatriz até hoje.",
        photo: "/photos/2024/primeira-praia.webp",
      },
      {
        date: "Janeiro",
        title: "InkinCare",
        description: "InkinCare. O nome já é engraçado. Limpeza de pele feita.",
        photo: "/photos/2024/inkincare.webp",
      },
      {
        date: "Fevereiro",
        title: "Carnaval na praia",
        description: "Carnaval na praia. Teve briga de família, mas a gente tava de boa.",
        photo: "/photos/2024/outra-praia.webp",
      },
      {
        date: "Fevereiro",
        title: "Segundo jogo do São Paulo",
        description: "Segundo jogo do São Paulo juntos.",
        photo: "/photos/2024/jogo-sp.webp",
      },
      {
        date: "Março",
        title: "Niver Momotzin",
        description: 'Ela fez 22. "I don\'t know about you, but I\'m feeling 22."',
        photo: "/photos/2024/niver-momotzin.webp",
      },
      {
        date: "Maio",
        title: "Aniversário aleatório",
        description: "Fomos no aniversário. Eu dilatei a vista e não tava enxergando nada.",
        photo: "/photos/2024/dilatacao.webp",
      },
      {
        date: "Junho",
        title: "Pizza Crek",
        description:
          "Primeira vez no Crek. Momotzin comeu morango com Nutella feito criança e melou a boca toda.",
        photo: "/photos/2024/crek.webp",
      },
      {
        date: "Julho",
        title: "Center Norte",
        description: "Clássico rolê no Center Norte e comer no Spoleto.",
        photo: "/photos/2024/cn.webp",
      },
      {
        date: "Setembro",
        title: "Primeira vez em Boituva juntos",
        description: '"Também, ele é surdo."',
        photo: "/photos/2024/boituva.webp",
      },
      {
        date: "15 de setembro",
        title: "Primeira Bienal do Livro",
        description:
          "Nossa primeira Bienal. Andamos pra caramba, chuva em Santana na volta e pizza no final do dia.",
        photo: "/photos/2024/bienal.webp",
      },
      {
        date: "Outubro",
        title: "Halloween",
        description:
          "Halloween bom… se ignorar as atitudes de certas pessoas.",
        photo: "/photos/2024/halloween.webp",
      },
      {
        date: "Novembro",
        title: "Mr. Texas",
        description: "Primeira vez no Mr. Texas. Climinha bom demais.",
        photo: "/photos/2024/mr-texas.webp",
      },
      {
        date: "Novembro",
        title: "Santana Parque",
        description:
          "Nosso rolê cotidiano — a gente quase morava lá. Falecido Santana Parque, agora Partage Santana.",
        photo: "/photos/2024/santana-parque.webp",
      },
      {
        date: "7 de dezembro",
        title: "Praia de rico",
        description:
          "Casa da madrinha, alto padrão. Multa por estacionar errado e trânsito monstro.",
        photo: "/photos/2024/praia-cara.webp",
      },
      {
        date: "8 de dezembro",
        title: "1 ano de namoro",
        description:
          "E mesmo depois de um ano inteirinho, eu te amo mais e mais. Pra sempre meu momot.",
        highlight: true,
        photo: "/photos/2024/juarez.webp",
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

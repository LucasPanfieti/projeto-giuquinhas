export interface HqChapter {
  slug: string;
  title: string;
  chapter: number;
  subtitle: string;
  description: string;
  cover: string;
  pdf: string;
  pages: string[];
  published: boolean;
}

export const hqsData: HqChapter[] = [
  {
    slug: "primeiro-beijo",
    title: "Nosso Primeiro Beijo",
    chapter: 1,
    subtitle: "Capítulo I",
    description:
      "A história do beijo que mudou tudo — em forma de HQ.",
    cover: "/hqs/primeiro-beijo/cover.webp",
    pdf: "/hqs/primeiro-beijo/download.pdf",
    pages: [
      "/hqs/primeiro-beijo/pages/01.webp",
      "/hqs/primeiro-beijo/pages/02.webp",
      "/hqs/primeiro-beijo/pages/03.webp",
      "/hqs/primeiro-beijo/pages/04.webp",
      "/hqs/primeiro-beijo/pages/05.webp",
      "/hqs/primeiro-beijo/pages/06.webp",
      "/hqs/primeiro-beijo/pages/07.webp",
      "/hqs/primeiro-beijo/pages/08.webp",
      "/hqs/primeiro-beijo/pages/09.webp",
      "/hqs/primeiro-beijo/pages/10.webp",
    ],
    published: true,
  },
];

export function getHqBySlug(slug: string): HqChapter | undefined {
  return hqsData.find((hq) => hq.slug === slug && hq.published);
}

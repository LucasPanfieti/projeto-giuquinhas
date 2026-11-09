import { notFound } from "next/navigation";
import HqReader from "@/components/HqReader";
import { getHqBySlug, hqsData } from "@/app/hqs-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return hqsData.filter((hq) => hq.published).map((hq) => ({ slug: hq.slug }));
}

export default async function HqChapterPage({ params }: Props) {
  const { slug } = await params;
  const hq = getHqBySlug(slug);
  if (!hq) notFound();
  return <HqReader hq={hq} />;
}

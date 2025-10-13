
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { insights } from '@/lib/data';
import { getImageById } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function InsightDetailPage({ params }: { params: { id: string } }) {
  const insight = insights.find((i) => i.id === params.id);

  if (!insight) {
    notFound();
  }

  const insightImage = getImageById(insight.image.id);

  // Simple content formatting (replace newlines with paragraphs, bold with <strong>)
  const formattedContent = insight.content
    .split('\n')
    .filter(para => para.trim() !== '')
    .map((para, index) => {
      if (para.startsWith('**') && para.endsWith('**')) {
        return <h2 key={index} className="font-headline text-2xl font-bold mt-8 mb-4">{para.slice(2, -2)}</h2>;
      }
      if (para.startsWith('http')) {
        return (
          <p key={index} className="mb-6 leading-relaxed">
            <Link href={para} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">
              {para}
            </Link>
          </p>
        );
      }
      return <p key={index} className="mb-6 leading-relaxed">{para}</p>
    });

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {insight.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary text-primary-foreground border-0">{tag}</Badge>
              ))}
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              {insight.title}
            </h1>
            <div className="text-lg text-muted-foreground">
              <span>{insight.date}</span> &middot; <span>{insight.author}</span>
            </div>
          </header>

          {insightImage && (
            <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-12 shadow-lg">
              <Image
                src={insightImage.imageUrl}
                alt={insight.image.alt}
                data-ai-hint={insightImage.imageHint}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/20 to-primary/30 backdrop-blur-sm shadow-xl">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md"></div>
            <CardContent className="p-8 md:p-12 relative z-10">
                <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground prose-p:text-lg prose-h2:text-foreground">
                 {formattedContent}
                </div>
            </CardContent>
          </Card>

        </article>
      </div>
    </div>
  );
}

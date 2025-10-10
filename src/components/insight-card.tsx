
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Insight } from '@/lib/types';
import { getImageById } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

type InsightCardProps = {
  insight: Insight;
};

export function InsightCard({ insight }: InsightCardProps) {
  const isMobile = useIsMobile();
  const insightImage = getImageById(insight.image.id);

  // Remove markdown-style headings from the beginning of the content for the snippet
  const cleanedContent = insight.content.replace(/^\*\*.*?\*\*\s*\n*/, '');
  const snippet = cleanedContent.substring(0, 150) + '...';

  const hoverClasses = !isMobile ? 'hover:shadow-primary/20 hover:-translate-y-2' : '';


  return (
     <div className="p-[1px] rounded-lg group h-full">
        <Card className={`flex flex-col h-full overflow-hidden border bg-background shadow-lg hover:shadow-xl transition-all duration-300 ${hoverClasses}`}>
            {insightImage && (
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={insightImage.imageUrl}
                        alt={insight.image.alt}
                        data-ai-hint={insightImage.imageHint}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {insight.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">{tag}</Badge>
                        ))}
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-2">
                        <Link href={`/insights/${insight.id}`} className="hover:text-primary transition-colors">{insight.title}</Link>
                    </h3>
                    <div className="text-sm text-muted-foreground mb-4">
                        <span>{insight.date}</span> &middot; <span>{insight.author}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{snippet}</p>
                </div>
                <div className="mt-6">
                    <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/90 group/link">
                        <Link href={`/insights/${insight.id}`}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}

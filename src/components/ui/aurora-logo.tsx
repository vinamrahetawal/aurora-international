import { cn } from '@/lib/utils';

export function AuroraLogo({ className }: { className?: string }) {
  return (
    <div className={cn('font-headline font-extrabold text-2xl tracking-tight whitespace-nowrap', className)}>
      <span className="text-foreground">Aurora International</span>
    </div>
  );
}

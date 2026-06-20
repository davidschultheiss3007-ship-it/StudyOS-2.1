import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils.js';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border font-medium leading-none',
  {
    variants: {
      variant: {
        default: 'border-border bg-muted text-muted-foreground',
        primary: 'border-transparent bg-[var(--color-accent-subtle)] text-[var(--color-on-accent-subtle)]',
        success: 'border-transparent bg-[var(--color-success-subtle)] text-[var(--color-on-success-subtle)]',
        warning: 'border-transparent bg-[var(--color-warning-subtle)] text-[var(--color-on-warning-subtle)]',
        error: 'border-transparent bg-[var(--color-error-subtle)] text-[var(--color-on-error-subtle)]',
      },
      size: {
        sm: 'px-2 py-0.5 text-[0.6875rem]',
        md: 'px-2.5 py-1 text-xs',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  },
);

export function Badge({ className, variant, size, ...props }) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}
